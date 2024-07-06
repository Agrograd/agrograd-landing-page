import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "./BlogSection";
import SocialIcons from "./SocialIcons";
import ShareButton from "./ShareButton";

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find((p) => p.id === parseInt(id));

    if (!post) return <div>Post not found</div>;

    return (
        <div className="bg-green-50 min-h-screen rounded-xl py-5">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-green-800 mb-4">{post.title}</h1>
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
                <ShareButton/>
                <Link to="/" className="mt-4 text-xl w-full inline-block text-green-600 hover:text-green-800 font-medium">
                    Back to Blog 
                </Link>
            
            </div>
            <SocialIcons />
        </div>
    );
};

export default BlogPost;

