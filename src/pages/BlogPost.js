import React from 'react';

const BlogPost = ({ post, onBack, onLike }) => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <button
          onClick={onBack}
          className="w-56 h-16 mt-2 mb-6 border-2 text-sky-600 p-3 rounded-lg font-medium text-xl hover:text-almost-white hover:bg-sky-500 transition-colors duration-200"
        >
          Back to Blog
        </button>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4">
            {post.title.split(' ').map((word, i) => 
              i === 1 ? <span key={i} className="text-sky-500">{word}</span> : ` ${word}`
            )}
          </h1>
          <img className="w-full h-64 object-cover rounded-lg mb-6" src={post.image} alt={post.title} />
          <p className="text-lg text-gray-700 mb-6">{post.content}</p>

          <div className="flex items-center">
            <button onClick={() => onLike(post.id)} className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-lg text-gray-600">{post.likes}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;


