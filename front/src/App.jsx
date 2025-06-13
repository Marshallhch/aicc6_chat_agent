import { useState } from 'react';
import './App.css';
import ChatIcon from './components/ChatIcon';

const App = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  return (
    <div className={`container ${showChatbot ? 'show-chatbot' : ''}`}>
      <button id="cb-toggler" onClick={() => setShowChatbot((prev) => !prev)}>
        <span className="material-symbols-rounded">Mode_comment</span>
        <span className="material-symbols-rounded">close</span>
      </button>

      <div className="cb-popup">
        <div className="cb-header">
          <div className="header-info">
            <ChatIcon />
          </div>
        </div>
        <div className="cb-body"></div>
        <div className="cb-footer"></div>
      </div>
    </div>
  );
};

export default App;
