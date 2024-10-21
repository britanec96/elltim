import React, { useState, useEffect } from "react";
import { Button } from "../button";
import WebDevBack from '../../images/logo-no-background.svg'; 

function ContactFormModal({ toggleModal }) {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Замените на реальные значения
  const telegramBotToken = 'YOUR_TELEGRAM_BOT_TOKEN'; 
  const telegramChatId = 'YOUR_CHAT_ID'; 

  // Закрытие модального окна при нажатии Escape
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        console.log("Closing modal via Escape key");
        toggleModal();
      }
    };
    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [toggleModal]);

  // Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);

    try {
      const telegramMessage = `Сообщение: ${message}`;

      await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: telegramMessage
        })
      });

      console.log("Message sent");
      toggleModal(); // Закрытие модального окна после отправки
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
<div className="fixed inset-0 flex z-50">
      {/* Фон модального окна */}
      <div
        className="absolute inset-0 bg-gray-800 opacity-60"
        onClick={() => {
          console.log("Closing modal via background click");
          toggleModal();
        }}
      ></div>

      {/* Контент модального окна */}
      <div className="bg-almost-white w-full md:w-2/3 h-full p-6 shadow-lg z-10 flex flex-col justify-center items-center md:items-start md:text-left text-center">
        <img className="w-56 mb-12" src={WebDevBack} alt="Background" />
        <h2 className="text-8xl font-bold text-sky-500 mb-4">
          Tell us what you <span className="text-almost-black">need</span> done.
        </h2>
        <p className="flex mb-5 text-lg font-fira">
          Will guide you to create the perfect brief. The more detail the better. Don't be shy
        </p>

        {/* Форма */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col">
          <div className="mb-4 flex-grow">
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-40 px-4 py-2 border-2 border-sky-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none" // Добавьте resize-none, чтобы убрать возможность изменения размера
              placeholder="Enter a few bullet points or a full description."
            ></textarea>
          </div>

          {/* Ссылки на соцсети */}
          <h1 className="flex text-xl font-fira text-sky-800 items-center justify-center">Other:</h1>
          <div className="flex justify-center space-x-6 mb-6 text-sky-500 text-3xl">
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700 transition-colors duration-200">
              <i className="ri-whatsapp-fill"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700 transition-colors duration-200">
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700 transition-colors duration-200">
              <i className="ri-instagram-fill"></i>
            </a>
          </div>

          <div className="flex justify-between gap-10 mt-auto">
            <Button
              hasRedStyle={true}
              type="button"
              onClick={() => {
                console.log("Closing modal via button");
                toggleModal();
              }}
              className=""
            >
              Close
            </Button>

            <Button
              hasBlueStyle={true}
              type="submit"
              className={`${isSubmitting ? 'opacity-50' : 'flex-grow'}`}
              disabled={isSubmitting}
            > 
              {isSubmitting ? 'Sending...' : 'Send'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default React.memo(ContactFormModal);





