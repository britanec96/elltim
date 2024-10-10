import React from 'react';

const testimonials = [
  {
    name: 'Emily Johnson',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDimGw2L45vH56Wow6hT_E3lYgKpvYX5CYYg&s',
    rating: 5,
    review: 'I am truly impressed with their professionalism and attention to detail. They exceeded my expectations in every way!'
  },
  {
    name: 'Michael Carter',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROCQTH0qz09qF_n6sq1Kub0YcoKDX24O6-rqZJfltEdcQq4D2iaRGaZq9g4GmkDHJOHaM&usqp=CAU',
    rating: 4,
    review: 'Great service overall. The project took a bit longer than expected, but the quality made it worth the wait.'
  },
  {
    name: 'Sophie Williams',
    avatar: 'https://static.wixstatic.com/media/580bcb_f23583c9af864a43b0f0b212e1acd6e3~mv2_d_2000_1333_s_2.jpg/v1/fill/w_640,h_1198,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/580bcb_f23583c9af864a43b0f0b212e1acd6e3~mv2_d_2000_1333_s_2.jpg',
    rating: 5,
    review: 'I couldn’t be happier with the results! Everything was handled with such care, and the final product is amazing.'
  }
];


const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((star, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < rating ? 'yellow' : 'none'}
          stroke="currentColor"
          className="w-5 h-5 text-yellow-500"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27l6.18 3.73-1.64-7.03 5.46-4.73-7.19-.61L12 2 9.19 8.63l-7.19.61 5.46 4.73-1.64 7.03L12 17.27z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ name, avatar, rating, review }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <img className="w-16 h-16 rounded-full mx-auto mb-4" src={avatar} alt={name} />
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <StarRating rating={rating} />
    <p className="mt-4 text-gray-600">{review}</p>
  </div>
);

const Testimonials = () => (
  <div className="bg-gray-200 py-12">
    <div className="container mx-auto px-4">
    <h1 className="text-4xl font-bold text-center mb-8">
    What Our <span className="text-sky-500">Clients Says</span></h1>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            avatar={testimonial.avatar}
            rating={testimonial.rating}
            review={testimonial.review}
          />
        ))}
        <div className='flex justify-center items-center'>
        <button className="relative flex justify-start items-center w-48 h-16 mt-2 ml-4 border-2 text-sky-600 p-3 rounded-lg font-medium text-xl hover:text-almost-white hover:bg-sky-500 transition-colors duration-200">
          More reviews <i class="ri-arrow-right-line absolute right-4"></i>
        </button>

        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-5 text-center mt-10">
        <button className="w-56 h-16 mt-2 ml-4 border-2 text-sky-600 p-3 rounded-lg font-medium text-xl hover:text-almost-white hover:bg-sky-500 transition-colors duration-200">
          Leave a Review
        </button>
      </div>
    </div>
  </div>
);

export default Testimonials;


