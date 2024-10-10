import React, { useEffect, useState } from "react";
import PhoneNumberInput from "../phone-number-input";

function OrderFormModal({ toggleModal }) {
  // Состояние формы
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  // Закрытие модального окна при нажатии "Escape"
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        toggleModal();
      }
    };
    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [toggleModal]);

  // Обработчик изменений формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();

    // Простая валидация
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Если есть ошибки, не отправляем форму
    }

    // Здесь вы можете обработать данные формы
    console.log("Form submitted:", formData);

    // Закрытие модального окна после отправки формы
    toggleModal();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      {/* Фон модального окна */}
      <div
        className="absolute inset-0 bg-gray-800 opacity-50"
        onClick={toggleModal} // Закрытие при клике вне формы
      ></div>

      {/* Контент модального окна */}
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg z-10 mx-4 sm:mx-6 lg:mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Don't Put off Problems for Later</h2>
        
        {/* Форма */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your name.."
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <PhoneNumberInput value={formData.phone} onChange={handleChange} />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type something.."
              rows="4"
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>

          <div className="mb-5">
            <p className="text-sm">
              <span className="font-bold text-xl">*Your Privacy Matters to Us</span><br />
              We do not use your personal information for unsolicited calls or advertising, and we do not share or distribute your data to third parties. Your privacy and trust are our top priorities.
            </p>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="bg-red-500 text-almost-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 mr-2"
              onClick={toggleModal}
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-sky-500 text-almost-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
            >
              Sent
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Используем React.memo для предотвращения лишних перерисовок
export default React.memo(OrderFormModal);

