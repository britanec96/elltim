import React, { useState } from "react";
import { Wrapper } from "../components/wrapper";
import emailjs from "emailjs-com";
import useScrollReveal from "../components/SCROLL-REVEAL/ScrollReveal";

const Order = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [subOptions, setSubOptions] = useState([]);
  const [selectedSubOption, setSelectedSubOption] = useState(null);
  const [nextSubOptions, setNextSubOptions] = useState([]);
  const [selectedNextSubOption, setSelectedNextSubOption] = useState(null);
  const [preferredLanguage, setPreferredLanguage] = useState(""); // Новый параметр
  const [preferredMessenger, setPreferredMessenger] = useState(""); // Новый параметр
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollReveal([
    { selector: ".element-delay-800", delay: 800, options: { distance: "70px", easing: "ease-in-out" } },
    { selector: ".element-delay-1200", delay: 1200, options: { distance: "70px", easing: "ease-in-out" } },
    { selector: ".element-delay-1600", delay: 1600, options: { distance: "70px", easing: "ease-in-out" } },
  ]);

  const services = [
    {
      title: "Website Development",
      icon: "ri-code-s-slash-line",
      description: "Create stunning, responsive websites tailored to your goals.",
      subOptions: [
        { name: "Landing Page", nextSubOptions: ["One-page website", "Multi-section website", "Other"] },
        { name: "E-commerce (Online Shop)", nextSubOptions: ["Shopify", "Custom Platform", "Not sure"] },
        { name: "Portfolio Website", nextSubOptions: ["Photography", "Artworks", "Other"] },
        { name: "Custom Website", nextSubOptions: ["Blog", "Forum", "Other"] },
      ],
    },
    {
      title: "Graphic Design",
      icon: "ri-brush-line",
      description: "Professional designs for logos, banners, and social media content.",
      subOptions: [
        { name: "Logotype", nextSubOptions: ["Minimalist", "3D", "Abstract", "Im not sure"] },
        { name: "Banner", nextSubOptions: ["Web Ads", "Print Materials", "Other"] },
        { name: "Social Media Content", nextSubOptions: ["Posts", "Stories", "Reels", "Other"] },
        { name: "Illustrations", nextSubOptions: ["Digital Art", "Vector Art"] },
      ],
    },
    {
      title: "Software Assistance",
      icon: "ri-tools-line",
      description: "Resolve software issues and optimize your PC for peak performance.",
      subOptions: [
        { name: "PC Optimization", nextSubOptions: ["Speed Boost", "Cleaning",] },
        { name: "Software Installation", nextSubOptions: ["Office Suite", "Editing Software"] },
        { name: "Troubleshooting", nextSubOptions: ["Error Fixing", "Crash Analysis"] },
        { name: "Other", nextSubOptions: ["Other"] },
      ],
    },
    {
      title: "Custom PC Builds",
      icon: "ri-computer-line",
      description: "Get a PC built for your specific gaming, work, or streaming needs.",
      subOptions: [
        { name: "Gaming PC", nextSubOptions: ["High FPS", "RGB Setup"] },
        { name: "Workstation", nextSubOptions: ["Video Editing", "Programming", "For Work"] },
        { name: "Streaming Setup", nextSubOptions: ["Dual PC", "Budget Build"] },
      ],
    },
    {
      title: "Motion Design",
      icon: "ri-movie-line",
      description: "Engaging animations for logos, explainer videos, and intros.",
      subOptions: [
        { name: "Animated Logo", nextSubOptions: ["Looping", "Dynamic"] },
        { name: "Explainer Video", nextSubOptions: ["Whiteboard Animation", "2D Animation"] },
        { name: "Intro Animation", nextSubOptions: ["YouTube Intro", "Corporate"] },
      ],
    },
    {
      title: "AI Solutions",
      icon: "ri-robot-line",
      description: "Innovative AI solutions for automation, chatbots, and data insights.",
      subOptions: [
        { name: "AI Integration", nextSubOptions: ["Website", "CRM"] },
        { name: "Chatbot Development", nextSubOptions: ["E-commerce", "Customer Support"] },
        { name: "Data Analysis", nextSubOptions: ["Big Data", "Insights"] },
      ],
    },
  ];


  const handleServiceClick = (service) => {
    setSelectedService(service.title);
    setSubOptions(service.subOptions);
    setSelectedSubOption(null);
    setNextSubOptions([]);
    setSelectedNextSubOption(null);
  };

  const handleSubOptionClick = (subOption) => {
    setSelectedSubOption(subOption.name);
    setNextSubOptions(subOption.nextSubOptions || []);
    setSelectedNextSubOption(null);
  };

  const handleNextSubOptionClick = (option) => {
    setSelectedNextSubOption(option);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      selectedService,
      selectedSubOption,
      selectedNextSubOption,
      preferredLanguage,
      preferredMessenger,
    };

    emailjs
      .send("service_lxxmm8s", "template_il5cfqr", dataToSend, "Df4zcv3Cqe2LtutdW")
      .then(
        () => {
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", phone: "", comments: "" });
            setSelectedService(null);
            setSubOptions([]);
            setSelectedSubOption(null);
            setNextSubOptions([]);
            setSelectedNextSubOption(null);
            setPreferredLanguage("");
            setPreferredMessenger("");
          }, 3000);
        },
        (error) => {
          console.error(error.text);
        }
      );
  };
  

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
    <Wrapper>
      <div className="flex flex-col items-center justify-center text-center element-delay-800">
        <div className="bg-gray-800 px-10 py-6 rounded-2xl shadow-lg mt-10">
          <h1 className="text-4xl xl:text-5xl font-extrabold leading-tight text-white mb-4">
            Get Free Consultation via Messenger
          </h1>
          <p className="text-lg text-gray-400 mb-6">
            Get personalized services tailored to your needs. Fast, reliable, and affordable.
          </p>
        </div>
      </div>

      <h1 className="text-sky-500 text-5xl font-extrabold text-center my-10 element-delay-1200">
        1. Choose Your Services
      </h1>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 mb-10 element-delay-1600">
        {services.map((service) => (
          <div
            key={service.title}
            onClick={() => handleServiceClick(service)}
            className={`bg-gray-800 rounded-lg shadow-lg p-6 text-center cursor-pointer transition-transform transform hover:scale-105 ${
              selectedService === service.title ? "ring-4 ring-sky-500" : ""
            }`}
          >
            <i className={`${service.icon} text-4xl text-sky-500 mb-4`}></i>
            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-sm text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>

      {subOptions.length > 0 && (
        <div className="mb-10 element-delay-800">
          <h2 className="text-sky-500 text-3xl font-bold text-center mb-6">
            2. Select an Option
          </h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {subOptions.map((option) => (
              <div
                key={option.name}
                onClick={() => handleSubOptionClick(option)}
                className={`bg-gray-800 p-4 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-colors cursor-pointer ${
                  selectedSubOption === option.name ? "bg-sky-500 text-white" : ""
                }`}
              >
                {option.name}
              </div>
            ))}
          </div>
        </div>
      )}

{nextSubOptions.length > 0 && (
  <div className="mb-10 element-delay-800">
    <h2 className="text-sky-500 text-3xl font-bold text-center mb-6">
      3. Select the Next Sub-Option
    </h2>
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {nextSubOptions.map((option) => (
        <div
          key={option}
          onClick={() => handleNextSubOptionClick(option)}
          className={`bg-gray-800 p-4 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-colors cursor-pointer ${
            selectedNextSubOption === option ? "bg-sky-500 text-white" : ""
          }`}
        >
          {option}
        </div>
      ))}
    </div>
  </div>
)}

{selectedNextSubOption && (
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg element-delay-800">
          <h2 className="text-sky-500 text-3xl font-bold mb-6">Complete Your Order</h2>
          <div className="grid gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="bg-gray-700 text-white p-4 rounded-lg outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="bg-gray-700 text-white p-4 rounded-lg outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Your Phone"
              className="bg-gray-700 text-white p-4 rounded-lg outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleInputChange}
              placeholder="Additional Comments"
              className="bg-gray-700 text-white p-4 rounded-lg outline-none focus:ring-2 focus:ring-sky-500"
              rows={4}
            ></textarea>

            <div className="mt-4">
              <h3 className="text-lg text-white font-bold mb-2">Preferred Language:</h3>
              <select
                value={preferredLanguage}
                onChange={(e) => setPreferredLanguage(e.target.value)}
                className="w-full bg-gray-700 text-white p-4 rounded-lg"
                required
              >
                <option value="">Select Language</option>
                <option value="Russian">Russian</option>
                <option value="English">English</option>
              </select>
            </div>

            <div className="mt-4">
              <h3 className="text-lg text-white font-bold mb-2">Preferred Messenger:</h3>
              <select
                value={preferredMessenger}
                onChange={(e) => setPreferredMessenger(e.target.value)}
                className="w-full bg-gray-700 text-white p-4 rounded-lg"
                required
              >
                <option value="">Select Messenger</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Telegram">Telegram</option>
                <option value="Messenger">Messenger</option>
                <option value="Email">Email</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="bg-sky-500 text-white px-6 py-3 rounded-lg font-bold text-xl mt-6 shadow-lg hover:bg-sky-600 transition-transform transform hover:scale-105"
          >
            Submit Order
          </button>
        </form>
      )}

      {isSubmitted && (
        <div className="bg-green-500 text-white p-4 rounded-lg mt-6 text-center">
          Thank you! Your order has been submitted.
        </div>
      )}
    </Wrapper>
  </div>
);
};

export default Order;




