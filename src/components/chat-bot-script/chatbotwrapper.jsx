import React, { useState } from "react";
import ChatBot from "./chatbot";

const ChatBotWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Кнопка открытия/закрытия */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="p-3 rounded-full shadow-lg bg-sky-500 text-white hover:scale-105 transition-transform duration-300"
        >
          💬
        </button>
      )}

      {/* Окно чат-бота */}
      {isOpen && <ChatBot isOpen={isOpen} onClose={toggleChat} />}
    </div>
  );
};

export default ChatBotWrapper;

