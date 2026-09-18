import { useEffect, useRef, useState } from 'react';

function ChatWindow({ thread, onSend }) {
  const [draft, setDraft] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [thread?.messages.length]);

  if (!thread) {
    return <main className="chat-window empty">Select a conversation</main>;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    onSend(text);
    setDraft('');
  }

  return (
    <main className="chat-window">
      <header className="chat-header">{thread.name}</header>

      <div className="messages" ref={scrollRef}>
        {thread.messages.map((msg) => (
          <div key={msg.id} className={`bubble ${msg.from === 'me' ? 'mine' : 'theirs'}`}>
            <span className="bubble-text">{msg.text}</span>
            <span className="bubble-time">{msg.time}</span>
          </div>
        ))}
      </div>

      <form className="composer" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a message..."
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}

export default ChatWindow;
