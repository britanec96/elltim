import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="bg-gradient-to-b from-purple-900 to-purple-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Feature Boxes */}
          <FeatureCard
            title="Customized Solutions"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."
            icon="🤖" // Example placeholder icon, replace with actual icons as needed
          />
          <FeatureCard
            title="ROI-Driven Approach"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."
            icon="📈"
          />
          <FeatureCard
            title="Creative Solution"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."
            icon="✂️"
          />
          <FeatureCard
            title="Expert Team"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."
            icon="🧩"
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

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-purple-700 p-6 rounded-lg shadow-lg text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-300">{description}</p>
  </div>
);

const ClientLogo = () => (
  <div className="text-gray-400 text-xl">Logoipsum</div> 
  // Replace this div with an <img> tag for actual logos
);

export default FeaturesSection;
