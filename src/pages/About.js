import React from 'react';

const teamMembers = [
  {
    name: 'Kristofer Ellis-Tatti',
    role: 'Founder & CEO',
    bio: 'With a passion for technology and innovation, Kristofer leads the team with a vision for excellence.',
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Anna Ivanova',
    role: 'Lead Developer',
    bio: 'A skilled developer with expertise in web technologies, Anna ensures the highest quality in our projects.',
    image: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Sergey Petrov',
    role: 'UX/UI Designer',
    bio: 'Sergey crafts intuitive and user-friendly designs that enhance user experiences across our platforms.',
    image: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: 'Ekaterina Smirnova',
    role: 'Digital Marketing Specialist',
    bio: 'With a keen understanding of digital trends, Ekaterina drives our marketing efforts to reach new audiences.',
    image: 'https://i.pravatar.cc/150?img=4',
  },
];

const About = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          About <span className="text-sky-500">Us</span>
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          We are a dedicated team committed to delivering high-quality services that empower businesses and individuals.
        </p>

        <h2 className="text-2xl font-semibold text-center mb-6">Meet Our Team</h2>
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {teamMembers.map(member => (
            <div key={member.name} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-500 mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

