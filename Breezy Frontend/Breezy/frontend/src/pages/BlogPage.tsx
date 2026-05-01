import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    blogPostMeta: {
        excerpt: string;
        author: string;
    };
}

interface QueryData {
    blogPosts: {
        nodes: BlogPost[];
    };
}

// Hardcoded Data Array
const BLOG_POSTS = [
    {
        slug: "modern-headless-stacks",
        title: "Why Headless WordPress is the Future",
        date: "April 30, 2026",
        excerpt: "Exploring the shift from monolithic CMS architectures to decoupled React frontends and how it improves performance.",
        author: "Click Labs Team"
    },
    {
        slug: "designing-with-spline",
        title: "Integrating 3D Scenes into Web UI",
        date: "April 22, 2026",
        excerpt: "A guide on using Spline and Styled Components to create immersive 3D experiences without sacrificing site speed.",
        author: "Creative Dept"
    },
    {
        slug: "mastering-tailwind-v4",
        title: "Utility-First CSS in 2026",
        date: "April 15, 2026",
        excerpt: "How the latest updates to Tailwind and CSS variables are streamlining the way we build enterprise-grade applications.",
        author: "Frontend Lead"
    }
];

const GET_ALL_BLOG_POSTS = gql`
  query GetAllBlogPosts {
    blogPosts {
      nodes {
        slug
        title
        date
        blogPostMeta {
            excerpt
            author
        }
      }
    }
  }
`;


const BlogPage: React.FC = () => {

    const { loading, error, data } = useQuery<QueryData>(GET_ALL_BLOG_POSTS);

    if (loading) return <p>Loading list...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data) return <p>No posts found.</p>;

    return (
        <div className="blog-directory-page">
            {/* Hero Section */}
            <section className="directory-hero">
                <div className="container">
                    <span className="badge"><span></span> Latest Updates</span>
                    <h1 className="section-title">Company <em>Insights</em></h1>
                    <p className="section-sub">
                        Exploring the intersection of engineering, design, and digital innovation at Click Labs.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="container">
                <div className="blog-grid">
                    {data.blogPosts.nodes.map((post: BlogPost) => (
                        <article key={post.slug} className="blog-card">
                            <div className="blog-card-content">
                                <div className="blog-card-header">
                                    <span className="blog-date">{post.date}</span>
                                </div>

                                <h2 className="blog-card-title">{post.title}</h2>
                                <p className="blog-card-excerpt">{post.blogPostMeta.excerpt}</p>

                                <div className="blog-card-footer">
                                    <span className="blog-author">By {post.blogPostMeta.author}</span>
                                    <Link to={`/blog/${post.slug}`} className="btn-text">
                                        Read More →
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default BlogPage;