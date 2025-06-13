import React, { useRef } from 'react';

const ChatForm = ({ generateChatResponse }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userMessage = inputRef.current.value.trim(); // 입력 앞뒤 공백 제거

    if (!userMessage) return;
    inputRef.current.value = '';

    // 교통사고 처리 절차를 알려주세요

    generateChatResponse([{ role: 'user', text: userMessage }]);

    console.log(userMessage);
  };
  return (
    <form className="chat-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="메시지를 입력해 주세요..."
        className="message-input"
        ref={inputRef}
        required
      />
      <button className="material-symbols-rounded">arrow_upward</button>
    </form>
  );
};

export default ChatForm;
