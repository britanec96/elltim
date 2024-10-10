import React from 'react';


const services = [
  {
    id: 1,
    image: 'https://media.bitcot.com/wp-content/uploads/2023/06/best-web-development-languages-1536x864.webp',
    title: 'Web Development',
    price: 'From 135£',
    description: 'Custom websites tailored to your business needs, fully responsive and optimized for performance.',
  },
  {
    id: 2,
    image: 'https://matchadesign.com/wp-content/uploads/2023/10/How-to-Set-Yourself-Apart-Series-Graphic-Designer.svg',
    title: 'Graphic Design',
    price: 'From 20£',
    description: 'Graphic design services tailored to your brand’s identity, delivering visually striking and professional designs. Fully customized and optimized for both print and digital platforms.',
  },
  {
    id: 3,
    image: 'https://fenzodigital.com/wp-content/webp-express/webp-images/uploads/2022/07/shutterstock_1746234983.jpg.webp',
    title: 'Content Creation',
    price: 'From 35£',
    description: 'Content creation services designed to engage your audience, with high-quality, tailored content across various platforms. Optimized for both SEO and user experience to drive results',
  },
  {
    id: 4,
    image:'https://i3media-live.storage.googleapis.com/upload/img_cache/file-1179-f8c5d8f841ead2e96055424a735dff68.jpg',
    title: 'Digital Marketing',
    price: 'From 50£',
    description: 'Effective digital marketing solutions to help you reach your target audience and grow your online presence.',
  },
  {
    id: 5,
    image:'https://www.aihr.com/wp-content/uploads/insubordination-cover.png',
    title: 'IT Services',
    price: 'From 10£',
    description: 'Comprehensive IT services tailored to support and enhance your business operations. From troubleshooting to system optimization, ensuring your technology runs smoothly and efficiently.',
  },
  {
    id: 6,
    image:'https://media.licdn.com/dms/image/v2/D5612AQGisoB-JOMVTw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1678184113655?e=1733961600&v=beta&t=EjHoxus_uGO2Wga6Emv6pC6HlAQufPWlkUxyJYwpl_M',
    title: 'Motion Graphics & Animations',
    price: 'From 50£',
    description: 'Dynamic motion graphics and animations crafted to elevate your brand’s message. Engaging visuals designed for marketing, storytelling, and enhancing user experience across various platforms.',
  },
  {
    id: 7,
    image:'https://www.slashgear.com/img/gallery/the-best-parts-to-build-a-good-pc-on-a-budget/l-intro-1679181512.jpg',
    title: 'PC Building Service',
    price: 'From 0£',
    description: 'Custom PC building services tailored to your specifications, ensuring optimal performance and compatibility. Whether for gaming, graphic design, or everyday use, we create systems that meet your needs.',
  },
  {
    id: 8,
    image:'https://www.scad.edu/sites/default/files/styles/swarm16x9_768/public/Academics/Motion%20media%20design/student-work-motion-media-design-blown-away.jpg?itok=1qzAKjaO&timestamp=1631290597',
    title: 'Other',
    price: 'From 10£',
    description: 'Additional services tailored to meet diverse client needs. From troubleshooting and maintenance to specialized IT solutions, we ensure comprehensive support for all your technological requirements.',
  },
];

const Pricing = () => {
  return (
    <div className="bg-gray-200 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Price <span className="text-sky-500">List</span>
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          Affordable and transparent pricing for our services. Choose the plan that best fits your needs.
        </p>
        <div className="grid gap-8 xl:grid-cols-2 md:grid-cols-1 text-center">
          {services.map(service => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
  {service.image && (
    <img
      src={service.image}
      alt={service.title}
      className="w-[700px] mx-auto object-cover h-[200px] mb-4 rounded-lg" // добавлен класс mx-auto для центрирования
    />
  )}
  <h2 className="text-2xl font-semibold mb-4 bg-sky-500 rounded-lg p-2 text-center text-almost-white">{service.title}</h2>
  <p className="text-3xl font-bold text-sky-500 mb-4">{service.price}</p>
  <p className="text-gray-600 mb-4">{service.description}</p>
  <button
    className="w-56 h-16 border-2 text-sky-600 p-3 rounded-lg font-medium text-xl hover:text-almost-white hover:bg-sky-500 transition-colors duration-200"
    onClick={() => alert(`You selected ${service.title}`)} // Действие по клику
  >
    Details & Order
  </button>
</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;

