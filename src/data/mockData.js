// Fictional sample data for public concept demonstration of STAR Love Journal.
// ZERO personal data, ZERO private databases, ZERO credentials.

export const coupleInfo = {
  partner1: {
    name: 'Julian Cole',
    nickname: 'Jules',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    color: '#38bdf8'
  },
  partner2: {
    name: 'Maya Lin',
    nickname: 'May',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    color: '#f43f5e'
  },
  metDate: '2023-10-24',
  anniversaryDate: '2026-10-24T00:00:00',
  anniversaryTitle: '3rd Year Milestone Anniversary',
  daysTogetherEstimate: 1085,
  statusMessage: 'Building our little constellation together ✨',
  locationTag: 'San Francisco, CA'
};

export const mockMemories = [
  {
    id: 'mem-1',
    title: 'Sunset Over Pacific Ridge',
    category: 'Adventures',
    date: 'September 18, 2026',
    image: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=1200&q=80',
    location: 'Pacific Ridge Trail',
    caption: 'We made it to the summit just as the horizon melted into peach and rose gold. We shared a single oversized jacket against the ocean wind.',
    likes: 24,
    tag: 'Golden Hour'
  },
  {
    id: 'mem-2',
    title: 'Our Rainy Coffee Sanctuary',
    category: 'Cozy Moments',
    date: 'August 30, 2026',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80',
    location: 'Little Willow Café',
    caption: 'Rain drumming against the stained glass windows. Two warm cardamom lattes, a notebook, and three hours of dreaming up future travels.',
    likes: 31,
    tag: 'Rainy Days'
  },
  {
    id: 'mem-3',
    title: 'Stargazing at Pine Valley',
    category: 'Adventures',
    date: 'July 14, 2026',
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
    location: 'Pine Valley Lookout',
    caption: 'Pitch black sky, shooting stars every few minutes, and a thermos of cinnamon cocoa. Still the best midnight drive we have ever taken.',
    likes: 48,
    tag: 'Stargazing'
  },
  {
    id: 'mem-4',
    title: 'Flour Fights & Homemade Pasta',
    category: 'Cozy Moments',
    date: 'June 02, 2026',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
    location: 'Kitchen Studio',
    caption: 'Attempted fresh tagliatelle from scratch. Somehow flour ended up everywhere, but the garlic butter sauce turned out extraordinary.',
    likes: 19,
    tag: 'Home Sweet Home'
  },
  {
    id: 'mem-5',
    title: 'First Coastal Highway Roadtrip',
    category: 'Milestones',
    date: 'April 11, 2026',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    location: 'Highway 1 Coastal Route',
    caption: 'Windows down, salty Pacific mist in the air, singing nostalgic indie tracks at the top of our lungs with no destination in mind.',
    likes: 37,
    tag: 'Milestone'
  },
  {
    id: 'mem-6',
    title: 'The Antique Record Shop Run',
    category: 'Cozy Moments',
    date: 'March 22, 2026',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
    location: 'Vintage Sound Archives',
    caption: 'Discovered an original 1974 vinyl with handwritten margin notes. Listening to the gentle vinyl crackle became our Sunday morning ritual.',
    likes: 29,
    tag: 'Sunday Rituals'
  }
];

export const mockVoiceNotes = [
  {
    id: 'vn-1',
    title: 'Morning walk in the park',
    speaker: 'Julian',
    duration: 28,
    durationStr: '0:28',
    date: 'Today, 8:15 AM',
    tag: 'Morning Calm',
    preview: 'Hey May, the morning air is so crisp today! Picked up your favorite roast beans on my way back.',
    waveform: [20, 45, 65, 30, 80, 95, 60, 40, 75, 85, 50, 70, 90, 65, 35, 60, 80, 55, 30, 20]
  },
  {
    id: 'vn-2',
    title: 'Listen to this sudden thunderstorm',
    speaker: 'Maya',
    duration: 42,
    durationStr: '0:42',
    date: 'Yesterday, 6:40 PM',
    tag: 'Rainy Vibes',
    preview: 'Listen to how loud the rain is! The whole street smells like fresh rain. Stay warm on the drive back!',
    waveform: [35, 60, 40, 85, 70, 90, 100, 80, 60, 75, 55, 90, 65, 45, 80, 70, 50, 40, 30, 15]
  },
  {
    id: 'vn-3',
    title: 'Happy 1,000 Days milestone reflection',
    speaker: 'Julian',
    duration: 64,
    durationStr: '1:04',
    date: 'July 14, 2026',
    tag: 'Milestone',
    preview: 'Still hard to believe we have shared a thousand days. You will always be my favorite adventure.',
    waveform: [25, 40, 55, 70, 85, 60, 75, 90, 65, 80, 95, 70, 60, 85, 75, 50, 65, 45, 35, 20]
  },
  {
    id: 'vn-4',
    title: 'Acoustic melody idea',
    speaker: 'Maya',
    duration: 35,
    durationStr: '0:35',
    date: 'June 28, 2026',
    tag: 'Music Note',
    preview: 'Stumbled on this sweet acoustic progression while practicing earlier. Saving it here so we remember it.',
    waveform: [40, 70, 85, 60, 45, 75, 90, 65, 80, 95, 70, 60, 80, 65, 50, 70, 60, 40, 25, 15]
  }
];

export const mockLoveLetters = [
  {
    id: 'ltr-1',
    title: 'Open When You Need A Smile 😊',
    sender: 'Julian',
    recipient: 'Maya',
    date: 'October 2026',
    preview: 'Remember that afternoon when our umbrella inverted in the sudden downpour...',
    content: `Dearest May,

Whenever the week feels heavy or the noise outside gets too loud, I want you to take a slow breath and remember our little sanctuary.

Remember when our umbrella turned inside-out on 5th Street and we ended up soaking wet, just standing under the café awning laughing until our stomachs hurt? That is my favorite thing about us — we turn every unexpected storm into a sweet memory.

Thank you for being the gentlest, bravest heart I know. You are deeply loved, today and every day after.

— Forever, Jules`
  },
  {
    id: 'ltr-2',
    title: 'A Letter for Our 1,000th Day ✨',
    sender: 'Maya',
    recipient: 'Julian',
    date: 'July 2026',
    preview: 'A thousand days of quiet morning coffees, silly inside jokes, and shared horizons...',
    content: `Dear Jules,

A thousand days ago, I had no idea how much bigger and warmer my world was about to become. You taught me how to notice the tiny wonders — how the golden hour filters through the balcony plants, how every long drive needs a good playlist, and how patience is an art.

Thank you for choosing me every single day. Here is to the next 10,000 days of discovering quiet trails, burning the toast, and watching the stars come out.

— Love always, May`
  },
  {
    id: 'ltr-3',
    title: 'Little Things I Cherish About You 💌',
    sender: 'Julian',
    recipient: 'Maya',
    date: 'May 2026',
    preview: 'A quiet list of four little habits that make my heart skip a beat every time...',
    content: `1. The way your eyes crinkle when you are trying not to laugh at a bad pun.
2. How you always leave the last warm bite of the croissant for me.
3. The handwritten notes you tuck into my travel books before a flight.
4. How you listen not just to hear, but to truly understand.

Just a reminder that you are cherished in all the big ways and all the quiet, unnoticed moments in between.

— Jules`
  }
];

export const mockDailyQuote = {
  quote: "In all the universe, across every constellation, my favorite place will always be right beside you.",
  author: "Star Love Journal — Daily Prompt #384"
};
