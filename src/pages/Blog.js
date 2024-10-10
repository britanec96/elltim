import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost';

// Example blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Software Development',
    preview: 'Artificial Intelligence is shaping the future of software development, making code smarter and systems more efficient.',
    content: 'In this post, we will explore how AI is transforming software development...',
    image: 'https://via.placeholder.com/400',
    likes: 0
  },
  {
    id: 2,
    title: 'Top 10 Programming Languages to Learn in 2024',
    preview: 'Want to stay ahead in tech? Here are the top programming languages you should consider learning in 2024...',
    content: 'The programming landscape is constantly evolving. In this post, we’ll go over the top languages...',
    image: 'https://via.placeholder.com/400',
    likes: 0
  },
  {
    id: 3,
    title: 'Blockchain Beyond Cryptocurrency',
    preview: 'Blockchain technology has more to offer than just cryptocurrencies. Discover how it’s being used in other industries...',
    content: 'Blockchain is a decentralized technology that’s evolving far beyond its origins in cryptocurrency...',
    image: 'https://via.placeholder.com/400',
    likes: 0
  },
  {
    id: 4,
    title: '5G: What It Means for the Future of Tech',
    preview: '5G is already revolutionizing the tech world, but what’s next? How will it impact industries from IoT to mobile gaming...',
    content: 'The rollout of 5G is one of the most anticipated technological advancements...',
    image: 'https://via.placeholder.com/400',
    likes: 0
  },
  {
    id: 5,
    title: 'Cybersecurity Trends to Watch in 2024',
    preview: 'Cybersecurity is more important than ever. Here are the trends that will dominate the industry in 2024...',
    content: 'In today’s digital landscape, staying ahead of cybersecurity threats is critical...',
    image: 'https://via.placeholder.com/400',
    likes: 0
  },
  {
    id: 6,
    title: 'Quantum Computing: Breaking the Limits',
    preview: 'Quantum computing promises to break the limits of classical computers. Learn what this means for the future...',
    content: 'Quantum computers use the principles of quantum mechanics to solve problems...',
    image: 'https://via.placeholder.com/400',
    likes: 0
  },
  {
    id: 7,
    title: 'Cloud Computing in 2024: Trends to Watch',
    preview: 'Cloud computing is evolving rapidly. Explore the key trends that will define cloud technologies in 2024...',
    content: 'Cloud computing has become an essential part of business and personal tech...',
    image: 'https://via.placeholder.com/400',
    likes: 0
  },
  {
    id: 8,
    title: 'The Role of Big Data in Business Decision Making',
    preview: 'Big data is playing a crucial role in business decision making. Discover how companies are leveraging it for success...',
    content: 'Big data is not just about volume; it’s about extracting insights from vast amounts of information...',
    image: 'https://via.placeholder.com/400',
    likes: 0
  },
  {
    id: 9,
    title: 'Augmented Reality: How It’s Changing UX',
    preview: 'Augmented Reality (AR) is transforming user experiences across industries. Find out how...',
    content: 'AR overlays digital content onto the real world, providing new ways for users to interact...',
    image: 'https://via.placeholder.com/400',
    likes: 0
  },
  {
    id: 10,
    title: 'Machine Learning in Healthcare: Opportunities and Challenges',
    preview: 'Machine learning is revolutionizing healthcare, but there are still challenges to overcome...',
    content: 'Healthcare is one of the industries where machine learning is making a significant impact...',
    image: 'https://via.placeholder.com/400',
    likes: 0
  },
];

const Blog = () => {
  const [posts, setPosts] = useState(blogPosts);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    // Загрузка лайков из localStorage при монтировании
    const storedLikes = JSON.parse(localStorage.getItem('likedPosts')) || {};
    setPosts((prevPosts) =>
      prevPosts.map((post) => ({
        ...post,
        liked: storedLikes[post.id] || false,
      }))
    );
  }, []);

  const handleLike = (postId) => {
    // Проверка, был ли пост уже лайкнут
    const storedLikes = JSON.parse(localStorage.getItem('likedPosts')) || {};
    if (storedLikes[postId]) return; // Если пост уже лайкнут, ничего не делаем

    // Увеличиваем количество лайков
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        const newLikes = post.likes + 1;
        storedLikes[postId] = true; // Запоминаем, что пользователь лайкнул пост
        localStorage.setItem('likedPosts', JSON.stringify(storedLikes)); // Сохраняем в localStorage
        return { ...post, likes: newLikes, liked: true };
      }
      return post;
    });
    
    setPosts(updatedPosts); // Обновляем состояние
  };

  if (selectedPost) {
    return <BlogPost post={selectedPost} onBack={() => setSelectedPost(null)} onLike={handleLike} />;
  }

  return (
    <div className="bg-gray-200 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Our <span className="text-sky-500">Blog</span>
        </h1>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img className="w-full h-48 object-cover rounded-lg mb-4" src={post.image} alt={post.title} />
              <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.preview}</p>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-56 h-16 mt-2 border-2 text-sky-600 p-3 rounded-lg font-medium text-xl hover:text-almost-white hover:bg-sky-500 transition-colors duration-200"
                >
                  Read More
                </button>
                <div className="flex items-center">
                  <button onClick={() => handleLike(post.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <span className="ml-2 text-lg text-gray-600">{post.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
