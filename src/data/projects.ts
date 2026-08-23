export interface Project {
  id: string;
  title: string;
  category: 'Music' | 'Fashion' | 'Commercial' | 'Documentary';
  client: string;
  year: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'DARK SUNRISE',
    category: 'Fashion',
    client: 'BALENCIAGA CONCEPT',
    year: '2026',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-a-black-outfit-41312-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800'
  },
  {
    id: '2',
    title: 'ECHOES OF MEXICO',
    category: 'Documentary',
    client: 'INDEPENDENT',
    year: '2025',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800'
  },
  {
    id: '3',
    title: 'NOCTURNAL MOVEMENT',
    category: 'Music',
    client: 'SOHN',
    year: '2026',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-dancer-performing-in-a-dark-room-41315-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=800'
  },
  {
    id: '4',
    title: 'ARCHITECTURAL GRAVITY',
    category: 'Commercial',
    client: 'HYATT HOTEL CDMX',
    year: '2025',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-city-buildings-at-night-1191-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800'
  }
];