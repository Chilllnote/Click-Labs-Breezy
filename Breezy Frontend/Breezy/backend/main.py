from fastapi import FastAPI
from typing import TypedDict, Annotated
from langgraph.graph.message import add_messages
from contextlib import asynccontextmanager
from pydantic import BaseModel, Field
from typing import Literal

from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.messages import AIMessage, HumanMessage, SystemMessage

from langchain_huggingface import HuggingFacePipeline
from transformers import AutoModelForCausalLM, AutoTokenizer, pipeline



from dotenv import load_dotenv
import os

import logging

# Configure basic logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)

# Create a logger instance
logger = logging.getLogger(__name__)

# Load environment variables at the start of the application
#load_dotenv()
#if os.environ['GEMINI_API_KEY']:
#    logger.info("GEMINI API Key loaded successfully.")
#else:
#    logger.error("GEMINI API Key is not set.")
#    raise ValueError("GEMINI API Key is not set.")
    

# Load open source model for fallback (if Gemini API fails or for local testing)

# app.state added to make this LLM client accessible across all nodes in the graph without needing to pass it around as an argument
model_id = "microsoft/Phi-3-mini-4k-instruct"

# Configure 4-bit loading to save RAM and prevent Segfaults
bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_compute_dtype="float16",
    bnb_4bit_quant_type="nf4"
)

tokenizer = AutoTokenizer.from_pretrained(model_id)
model =  ChatOpenAI(
    model="gpt-5-nano",
    stream_usage=True,
    temperature=None,
    max_tokens=None,
    timeout=None,
    reasoning_effort="low",
    max_retries=2,
)
pipe = pipeline(
    "text-generation", 
    model=model, 
    tokenizer=tokenizer, 
    max_new_tokens=256,
    temperature=0.7
)

llm = HuggingFacePipeline(pipeline=pipe)
# ================ Breathing agent state ================

class BreathingState(TypedDict):
    messages: Annotated[list, add_messages]
    rms_history: list[float]  # To track the "shape" of the breath
    breathing_intensity_category: Literal['Shallow', 'Deep', 'Dangerous', 'None'] = Field(..., description="Category of the Breathing state of the client")  # 'shallow', 'deep', 'dangerous', 'none'


# ================ Start-up code ================
@asynccontextmanager
async def lifespan(app: FastAPI):

    # logging.getLogger().setLevel(logging.INFO)  # Set the logging level to INFO or DEBUG as needed

    # --- STARTUP LOGIC ---
    logger.info("Starting up Breathing Agent...")    
    
    # Initialize your AI clients or shared state here
    #app.state.michael_persona = "You are Michael, a conversational breathing coach."

    # /// Load environment variables
    load_dotenv()
    if os.environ['GEMINI_API_KEY']:
        logger.info("GEMINI API Key loaded successfully.")
    else:
        logger.error("GEMINI API Key is not set.")
        raise ValueError("GEMINI API Key is not set.")
    
    # app.state added to make this LLM client accessible across all nodes in the graph without needing to pass it around as an argument
    app.state.llm = ChatGoogleGenerativeAI(
        model="gemini-3.1-pro-preview",
        max_tokens=None,
        timeout=10,
        max_retries=2,
        temperature=0.7)
    
    yield  # The application runs while this is suspended
    
    # --- SHUTDOWN LOGIC ---
    print("Shutting down Breathing Agent...")
    # Clean up resources (close DB connections, stop audio streams)


# ================= Creating the graph functions =================

# The router node that processes incoming messages and decide what node to go to next
def router_node(state: BreathingState) -> BreathingState:
    # This function would contain the logic to process incoming messages,
    # analyze breathing patterns, and update the state accordingly.
    # For now, it's just a placeholder.
    print("Processing messages and updating breathing state...")
    return state

def condition_for_router_node(state: BreathingState) -> str:
    # 1. PRIORITY 1: Physical Safety (The Firewall)
    # If the category is 'None' (potential breath holding/stop) or 'Dangerous'
    if state.get('breathing_intensity_category') in ['None', 'Dangerous']:
        print("CRITICAL: Routing to Emergency_aid_node")
        return "Emergency_aid_node"

    # 2. PRIORITY 2: Intent Analysis
    # If breathing is fine, check what the user actually said
    last_message = state['messages'][-1].content.lower()
    
    # Check if the request is about the product/site or general info
    site_keywords = ['site', 'account', 'breezy', 'subscription', 'price', 'product']
    if any(keyword in last_message for keyword in site_keywords):
        return "Tool_node"

    # 3. PRIORITY 3: Coaching vs. General Chat
    # If the breathing is 'Shallow' or 'Deep', they likely need coaching feedback
    if state.get('breathing_intensity_category') in ['Shallow', 'Deep']:
        return "Coaching_node"

    # Default to general Michael conversational response
    return "General_response_node"

def Emergency_aid_node(state: BreathingState) -> BreathingState:
    # This function would contain the logic to provide emergency aid instructions
    # based on the breathing state. For now, it's just a placeholder.

    llm = app.state.llm  # Access the LLM client from the app state

    

    messages_manual = state.get('messages', [])
    messages_manual.append(HumanMessage(content="The client's breathing pattern indicates a potential emergency. Please provide clear, concise, and calm instructions for immediate aid."))

    response_manual = llm.invoke(messages_manual).content
    response_manual_ai = AIMessage(content=response_manual)

    state['messages_manual'] = messages_manual + [response_manual_ai]

    print("Providing emergency aid instructions if necessary...")
    return state


def General_response_node(state: BreathingState) -> BreathingState:
    # This function would contain the logic to provide general responses
    # based on the breathing state. For now, it's just a placeholder.
    print("Providing general responses based on breathing state...")
    return state

def Coaching_node(state: BreathingState) -> BreathingState:
    # This function would contain the logic to provide coaching instructions
    # based on the breathing state. For now, it's just a placeholder.
    print("Providing coaching instructions based on breathing state...")
    return state



# // Human in loop node
def approval_node(state: BreathingState) -> BreathingState:
    # This function would contain the logic to ask for human approval
    # before taking certain actions. For now, it's just a placeholder.
    print("Asking for human approval if necessary...")
    return state

# /// Tool nodes Here


# ================ Endpoint creation ================

app = FastAPI()

@app.get("/")
def read_root():
    logger.info("Root endpoint accessed.")
    
    return {"Hello": "World"}


@app.get("/practice")
def get_message_from_llm():

    messages = [
        SystemMessage(content="You are Michael, a conversational breathing coach."),
        HumanMessage(content="I feel anxious and my breath is shallow. What should I do?")
    ]

    response = llm.invoke(messages).content
    logger.info(f"LLM response: {response}")
    
    return {"response": response}



@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}

