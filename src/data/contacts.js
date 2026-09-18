const contacts = [
  {
    id: 'ava',
    name: 'Ava Thompson',
    avatarColor: '#6c5ce7',
    messages: [
      { id: 1, from: 'them', text: 'Hey! Are we still on for tomorrow?', time: '9:02 AM' },
      { id: 2, from: 'me', text: 'Yep, 10am works for me.', time: '9:05 AM' },
      { id: 3, from: 'them', text: 'Perfect, see you then!', time: '9:06 AM' },
    ],
  },
  {
    id: 'noah',
    name: 'Noah Patel',
    avatarColor: '#00b894',
    messages: [
      { id: 1, from: 'them', text: 'Did you get a chance to review the PR?', time: 'Yesterday' },
      { id: 2, from: 'me', text: 'Looking now, give me 10 mins.', time: 'Yesterday' },
    ],
  },
  {
    id: 'mia',
    name: 'Mia Chen',
    avatarColor: '#e17055',
    messages: [
      { id: 1, from: 'them', text: 'Lunch today?', time: 'Mon' },
      { id: 2, from: 'me', text: 'Sure, noon?', time: 'Mon' },
      { id: 3, from: 'them', text: 'Works for me 🎉', time: 'Mon' },
    ],
  },
];

export default contacts;
