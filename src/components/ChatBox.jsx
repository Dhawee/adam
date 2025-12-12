import React, { useState, useRef, useEffect } from 'react';

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, fromUser: true }]);
    setInput('');
    // Simulated reply
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: 'Hello! How can I help you today?', fromUser: false }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-green-700 transition-colors"
      >
        💬
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="mt-2 w-80 bg-white border rounded-xl shadow-xl flex flex-col overflow-hidden">
          <div className="bg-green-600 text-white p-3 font-semibold">Chat with me</div>
          <div className="flex-1 p-3 h-60 overflow-y-auto flex flex-col">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`my-1 p-2 rounded-lg max-w-[75%] ${
                  m.fromUser ? 'bg-green-100 self-end' : 'bg-gray-100 self-start'
                }`}
              >
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex border-t p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 border rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
