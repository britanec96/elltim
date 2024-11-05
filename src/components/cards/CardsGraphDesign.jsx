import React, { useState } from 'react';
import { Button } from '../button';
import { Wrapper } from '../wrapper';
import useScrollReveal from '../SCROLL-REVEAL/ScrollReveal';

const Card = ({ title, price, description, developmentTime, technologies, image, siteExample }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed((prev) => !prev);
  };

  useScrollReveal([
    { selector: '.element-delay-800', delay: 800, options: { distance: '70px' } },
  ]);

  return (
    <div className="bg-gray-800 text-almost-white rounded-lg p-6 mt-10 mb-10 transition-all duration-300">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className={`mb-4 w-[500px] h-[300px] object-cover cursor-pointer transition-transform duration-300 ${isZoomed ? 'scale-125' : 'scale-100'}`}
        onClick={toggleZoom}
      />
      <h3 className="font-semibold text-2xl mb-2">{title}</h3>
      <p>From <span className="text-md font-bold">{price}</span> in {developmentTime}.</p>
      
      <div className="text-md mt-5">
        <div className="flex items-start gap-2">
          <p><span className="text-sky-500">Description:</span> {description}</p>
        </div>
        <div className="flex items-start gap-2 mt-5">
          <p><span className="text-sky-500">Development time:</span> {developmentTime}</p>
        </div>
        <div className="flex items-start gap-2 mt-5">
          <p><span className="text-sky-500">Technologies:</span> {technologies}</p>
        </div>
      </div>
      
      <Button hasWhiteStyle={true} className="mt-5">
        Order
      </Button>
    </div>
  );
};

const CardListGraphicDesign = () => {
    const cardsData = [
      {
        title: 'Logo Design',
        price: '50 GBP',
        developmentTime: '2-5 days',
        description: 'Custom logo design that reflects your brand identity and values.',
        technologies: 'AI Tools ,Adobe Illustrator, Adobe Photoshop, branding principles.',
        image: 'https://mindrepublic.ru/wp-content/uploads/2023/01/trendy-logotipov-2023-igrivye-karakuli.jpg.webp',
      },
      {
        title: 'Banner Design',
        price: '30 GBP',
        developmentTime: '1-3 days',
        description: 'Eye-catching banner designs for online marketing or social media.',
        technologies: 'AI Tools, Adobe Photoshop, Adobe Illustrator, web design principles.',
        image: 'https://img.freepik.com/free-vector/photographic-spring-sale-banner_23-2148064491.jpg?semt=ais_hybrid',
      },
      {
        title: 'Social Media Graphics',
        price: '30 GBP',
        developmentTime: '1-7 days',
        description: 'Custom graphics for social media platforms, including posts and cover images.',
        technologies: 'Adobe Photoshop, Canva,Ai Tools, branding strategies.',
        image: 'https://webpromoexperts.net/images/uploads/blogs/17-glavnyh-trendov-v-bannernoy-reklame-2020-2021/th_sQCjfxg.png',
      },
      {
        title: 'Website Image Preparation',
        price: '60 GBP',
        developmentTime: '2-4 days',
        description: 'Optimizing and preparing images for use on websites to ensure fast loading times.',
        technologies: 'Adobe Photoshop, image optimization tools.',
        image: 'https://www.wordstream.com/wp-content/uploads/2022/02/how-to-write-a-case-study-shopify.png',
      },
      {
        title: 'Infographic Design (soon)',
        price: '??? GBP',
        developmentTime: '??? weeks',
        description: 'Creating informative and visually appealing infographics to convey complex information.',
        technologies: 'Adobe Illustrator, data visualization techniques.',
        image: 'https://cdn-images-1.medium.com/max/1600/0*0BMIdSR7_12F-kb-',
      },
      {
        title: 'Business Card Design',
        price: '80 GBP',
        developmentTime: '3-5 days',
        description: 'Designing professional business cards that leave a lasting impression.',
        technologies: 'Adobe Photoshop, printing specifications.',
        image: 'https://assets.designhill.com/resize_img.php?atyp=page_file&pth=ft_ca_sl2||154||block3_image_img&flp=1549880421-7990206105c614c654f3d04-59522958.png',
      },
    ];

  return (
    <Wrapper>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 element-delay-800">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
    </Wrapper>
  );
};

export default CardListGraphicDesign;
