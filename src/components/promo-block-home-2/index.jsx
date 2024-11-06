import React from 'react';
import { Button } from '../button';

const FeaturesSection = () => {
  return (
    <div className="bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Feature Boxes */}
          <FeatureCard
            title="Software & Computer Assistance"
            description="Having trouble with your software or hardware? We troubleshoot, repair, and optimize all types of devices to keep you running smoothly, whether it's a small fix or an in-depth repair."
            icon="💻"
            button="Chat"
          />
          <FeatureCard
            title="Website Development"
            description="From basic sites to more complex setups, we offer website design and development services that bring your vision online. Fully responsive, user-friendly, and optimized for success. Any budget"
            icon="🛸"
            button="Explore"
          />
          <FeatureCard
            title="Graphic Design"
            description="From logos and branding to social media content and website graphics, we create visuals that make your business stand out. Affordable, professional, and tailored to your needs."
            icon="🃏"
            button="Explore"
          />
          <FeatureCard
            title="Custom PC Builds"
            description="Need a new computer built just for you? We design and assemble custom PCs that meet your exact specifications, whether for gaming, work, or personal use. Much cheaper then on the market."
            icon="🧌"
            button="Explore"
          />
        </div>

        {/* Client Logos Section */}
        <div className="border-t border-gray-700 pt-8">
          <h2 className="text-center text-lg font-semibold mb-4">Our Clients</h2>
          <div className="flex justify-center gap-6">
            {/* Client Logos - Replace 'Logoipsum' text with actual images */}
            <ClientLogo />
            <ClientLogo />
            <ClientLogo />
            <ClientLogo />
            <ClientLogo />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description, icon, button }) => (
  <div className="bg-gray-800 p-6 my-12 rounded-lg shadow-lg text-center text-almost-white transition-transform duration-300 ease-in-out hover:scale-105">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-300">{description}</p>
    <Button hasWhiteStyle={true}>
              {button}
            </Button>
  </div>
);

const ClientLogo = () => (
  <div className="text-gray-400 text-xl">Logoipsum</div> 
  // Replace this div with an <img> tag for actual logos
);

export default FeaturesSection;
