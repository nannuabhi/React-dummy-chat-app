import { useState } from 'react';
import contacts from './data/contacts.js';
import Sidebar from './components/Sidebar.jsx';
import ChatWindow from './components/ChatWindow.jsx';

const CANNED_REPLIES = [
  "Got it, thanks!",
  "Sounds good to me.",
  "Haha, nice one.",
  "Let me get back to you on that.",
  "Totally agree.",
];

function App() {
  const [threads, setThreads] = useState(contacts);
  const [activeId, setActiveId] = useState(contacts[0].id);

  const activeThread = threads.find((t) => t.id === activeId);

  function sendMessage(text) {
    const timestamp = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

    setThreads((prev) =>
      prev.map((t) =>
        t.id !== activeId
          ? t
          : {
              ...t,
              messages: [...t.messages, { id: t.messages.length + 1, from: 'me', text, time: timestamp }],
            }
      )
    );

    const reply = CANNED_REPLIES[Math.floor(Math.random() * CANNED_REPLIES.length)];
    setTimeout(() => {
      setThreads((prev) =>
        prev.map((t) =>
          t.id !== activeId
            ? t
            : {
                ...t,
                messages: [...t.messages, { id: t.messages.length + 2, from: 'them', text: reply, time: timestamp }],
              }
        )
      );
    }, 900);
  }

  return (
    <div className="app">
      <Sidebar threads={threads} activeId={activeId} onSelect={setActiveId} />
      <ChatWindow thread={activeThread} onSend={sendMessage} />
    </div>
  );
}

export default App;
