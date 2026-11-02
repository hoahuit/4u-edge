export interface TourItem {
  id: string;
  title: string;
  subtitle: string;
  destination: string;
  duration: string;
  price: string;
  badge: 'Best Seller' | 'Just Released' | "Today's Deal" | 'Last Minute' | 'Signature';
  image: string;
  inclusions: string[];
  overview: string;
}

export interface MegaSubItem {
  title: string;
  category: string;
  description: string;
  isTemp?: boolean;
}

export interface MegaPillar {
  title: string;
  items: MegaSubItem[];
}

export interface MegaMenu {
  id: string;
  label: string;
  menuNumber: string;
  subtitle: string;
  columns: MegaPillar[];
}

export interface HeroScene {
  id: number;
  label: string;
  kicker: string;
  headline: string;
  subtext: string;
  cardTitle: string;
  cardDesc: string;
  cardPrice: string;
  image: string;
  alt: string;
}

export interface Destination {
  id: string;
  title: string;
  location: string;
  spanClass: string;
  image: string;
  description: string;
  dossier: string;
}

export interface HotNewsItem {
  id: string;
  title: string;
  category: 'Culture & Discovery' | 'Retreat & Wellness' | 'Financial Wisdom';
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  isTemp?: boolean;
}

export interface KollectionItem {
  id: string;
  title: string;
  category: 'New Arrivals' | 'Must-have' | 'Exclusive';
  description: string;
  price: string;
  image: string;
  badge?: string;
  isTemp?: boolean;
}

export interface ModalData {
  title: string;
  category: string;
  description: string;
  inclusions?: string[];
  price?: string;
}
