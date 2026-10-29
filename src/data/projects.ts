export interface Project {
  id: string;
  title: string;
  category: 'Music' | 'Fashion' | 'Commercial' | 'Documentary' | 'Architecture' | 'Real Estate';
  client: string;
  year: string;
  vimeoUrl: string;     // Aquí pones el link completo de Vimeo (ej: 'https://vimeo.com/123456789' o solo el ID)
  thumbnailUrl: string; // Aquí pones la ruta de tu imagen (ej: '/images/work/mi-foto.jpg' o una URL)
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'VIVE ELIT RESIDENCE',
    category: 'Commercial',
    client: 'VIVE ELIT INMOBILIARIA',
    year: '2026',
    vimeoUrl: 'https://vimeo.com/1239687920', // Tu enlace de Vimeo
    thumbnailUrl: '/images/work/vive-elit-thumb.jpg', // Tu imagen miniatura elegida
  },
  {
    id: '2',
    title: 'DARK SUNRISE',
    category: 'Fashion',
    client: 'BALENCIAGA CONCEPT',
    year: '2026',
    vimeoUrl: 'https://vimeo.com/76979871',
    thumbnailUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800', // O una URL externa de ejemplo
  },
  // Agrega más proyectos aquí...
];