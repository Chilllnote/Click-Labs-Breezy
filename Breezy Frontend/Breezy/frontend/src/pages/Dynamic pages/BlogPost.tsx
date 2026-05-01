import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

// Hardcoded fallback data
const MOCK_POST = {
    title: "Building the Future of Headless Tech",
    subTitle: "How Click Labs is redefining the modern web stack.",
    author: "Lead Engineer",
    date: "April 30, 2026",
    image: "https://placehold.co/600x400",
    textBody: `
    <p>Headless WordPress combined with React offers unparalleled flexibility.</p>
    <p>By separating the backend data from the frontend presentation, teams can iterate faster.</p>
  `
};


interface BlogPostPage {
    title: string;
    date: string;
    blogPostMeta: {
        excerpt: string;
        author: string;
        textBody: string;
        image: {
            node: {
                sourceUrl: string;
            };
        }
    };
}

interface QueryData {
    blog_post: BlogPostPage;
}
const GET_ALL_BLOG_POSTS = gql`
    query getBlogBySlug($slug: ID!) {
    blog_post: blogPost(id: $slug, idType: URI) {
        title 
        date
        
        blogPostMeta { 
        excerpt # ACF usually converts snake_case to camelCase in GraphQL
        author
        textBody
        
        image {
            node{
            sourceUrl
            }
        }
        }
    }
    }
`;

const BlogPost: React.FC = () => {

    const { slug } = useParams<{ slug: string }>();
    const { loading, error, data } = useQuery<QueryData>(GET_ALL_BLOG_POSTS, {
        variables: { slug }
    });

    if (loading) return <p>Loading list...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data) return <p>No posts found.</p>;

    // In a real scenario, you'd use your getBlogBySlug query here
    const post = MOCK_POST;

    return (
        <article className="blog-post-container">
            {/* Quick Route Back */}
            <div className="blog-back-link">
                <Link to="/blog" className="btn-text">
                    ← Back to Blog
                </Link>
            </div>

            <header className="blog-header">
                <span className="blog-category">Engineering</span>
                <h1 className="blog-title">{data.blog_post.title}</h1>
                <p className="blog-subtitle">{data.blog_post.blogPostMeta.excerpt}</p>
                <div className="blog-meta">
                    <img src="https://placehold.co/40x40" alt="Author" className="author-img" />
                    <span>{data.blog_post.blogPostMeta.author} • {data.blog_post.date}</span>
                </div>
            </header>

            <div className="blog-featured-image">
                <img src={data.blog_post.blogPostMeta.image.node.sourceUrl} alt={data.blog_post.title} />
            </div>

            <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: data.blog_post.blogPostMeta.textBody }}
            />
        </article>
    );
};

export default BlogPost;