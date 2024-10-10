import React, { useState } from "react";
import Whatsup from '../../images/whatsapp-fill.png';
import Telegram from '../../images/telegram-fill.png';

const countryCodes = {
  "United States": "+1",
  "United Kingdom": "+44",
  "Canada": "+1",
  "Australia": "+61",
  "Germany": "+49",
  "France": "+33",
  "Italy": "+39",
  "Spain": "+34",
  "Russia": "+7",
  "China": "+86",
  "India": "+91",
  "Japan": "+81",
  "Brazil": "+55",
  "Mexico": "+52",
  "South Africa": "+27",
  "Nigeria": "+234",
  "Egypt": "+20",
  "Turkey": "+90",
  "Saudi Arabia": "+966",
  "United Arab Emirates": "+971",
};

function PhoneNumberInput() {
  const [selectedCountry, setSelectedCountry] = useState("United Kingdom");
  const [phonePlaceholder, setPhonePlaceholder] = useState(countryCodes["United Kingdom"] + " (555) 000-000");

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setPhonePlaceholder(countryCodes[country] + " (555) 000-000");
  };

  return (
    <>
<div className="flex items-center space-x-2"> {/* Добавляем flex и отступы между элементами */}
  <div className="flex items-center space-x-2">
    <img className="w-6 h-6" src={Whatsup} alt="WhatsApp" /> {/* Задаем размеры изображения для единообразия */}
    <img className="w-6 h-6" src={Telegram} alt="Telegram" />
  </div>
  <label className="text-almost-black">Telegram/Whats'up number:</label>
</div>
    <div className="rounded-lg mt-2">
      <div className="relative mt-2 text-gray-500">
        <div className="absolute inset-y-0 left-3 top-6 my-auto h-6 flex items-center border-r pr-2">
          <select
            value={selectedCountry}
            onChange={handleCountryChange}
            className="text-sm outline-none rounded-lg h-full"
          >
            {Object.keys(countryCodes).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        </div>
        <input
          type="tel"
          placeholder={phonePlaceholder}
          className="w-full pl-48 pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 rounded-lg focus:text-sky-800 text-2xl"
          required
        />
    </div>
    </>
  );
}

export default PhoneNumberInput;
