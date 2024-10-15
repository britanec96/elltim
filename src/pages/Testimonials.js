import React from "react";
import { Wrapper } from '../components/wrapper/index';
import Two from '../../src/images/two.png';

const reviewsData = [
  {
    name: "Johnx",
    platform: "Google",
    review:
      "I recently hired Kristofer for my IT project, and I couldn't be happier with the results! His knowledge and expertise in computing technologies are evident in every aspect of his work. He was responsive, professional, and delivered everything on time. I highly recommend his services to anyone looking for reliable IT support!",
    rating: 5,
    img: "https://media.assettype.com/tnm%2Fimport%2Fsites%2Fdefault%2Ffiles%2FVKHarindran_NavrozeContractor_18062021_1200.jpg?w=640&auto=format%2Ccompress&fit=max",
  },
  {
    name: "Jane Smith",
    platform: "Google",
    review:
      "Thank you",
    rating: 5,
    img: "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg",
  },
  {
    name: "Kristoff Pawdlowski",
    platform: "Google",
    review:
      "I had a technical problem, and Daniel helped me right away. He was super friendly and solved the issue quickly.",
    rating: 5,
    img: "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg",
  },

];

const ReviewCard = ({ name, platform, review, rating, img }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center">
        <img src={img} alt={name} className="w-12 h-12 rounded-full mr-4 object-cover" />
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">via {platform}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-700">{review}</p>
      </div>
      <div className="mt-4">
        <div className="flex items-center">
          <span className="text-yellow-500 text-lg">
            {"★".repeat(rating)}
          </span>
        </div>
      </div>
    </div>
  );
};

const ReviewsSection = () => {
  return (
    <div className="bg-gray-200 pb-10">
      <div className="bg-white w-full mb-12">
      <div className="flex xl:flex-row sm:flex-col bg-white w-full text-center items-center justify-center reveal">
    
        <div className="w-full p-5">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600">
        Reviews
        </h1>
        <h2 className="text-3xl font-bold text-almost-black">
        What Are Our Customers Saying?
        </h2>
        <button className="mt-3 border-2 text-sky-600 px-4 py-2 rounded-lg hover:text-almost-white hover:bg-sky-500 transition duration-300">
              Leave a Review
            </button>
        </div>
  
        <div className="relative w-full h-[600px]">
  <img className="w-full h-full object-cover" src={Two}/>
  <div
            className="absolute inset-0 w-full h-full xl:bg-gradient-to-r sm:bg-gradient-to-b from-white/100 to-transparent"
            style={{ zIndex: 5 }}
          />
</div>
      </div>
      </div>

      <Wrapper>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviewsData.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            platform={review.platform}
            review={review.review}
            rating={review.rating}
            img={review.img}
          />
        ))}
      </div>
      </Wrapper>
    </div>
  );
};

export default ReviewsSection;


