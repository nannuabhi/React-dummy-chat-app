function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function Sidebar({ threads, activeId, onSelect }) {
  return (
    <aside className="sidebar">
      <h1 className="sidebar-title">Chats</h1>
      <ul className="contact-list">
        {threads.map((thread) => {
          const lastMessage = thread.messages[thread.messages.length - 1];
          return (
            <li
              key={thread.id}
              className={`contact-item ${thread.id === activeId ? 'active' : ''}`}
              onClick={() => onSelect(thread.id)}
            >
              <div className="avatar" style={{ backgroundColor: thread.avatarColor }}>
                {initials(thread.name)}
              </div>
              <div className="contact-info">
                <div className="contact-name">{thread.name}</div>
                <div className="contact-preview">{lastMessage?.text}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
