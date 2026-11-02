import { MegaMenu, HeroScene, Destination, TourItem, HotNewsItem, KollectionItem } from '../types';

export const MEGA_MENUS: MegaMenu[] = [
  {
    id: 'uniquely-4u',
    label: 'Uniquely 4U',
    menuNumber: '',
    subtitle: 'Core Pillars',
    columns: [
      {
        title: 'Better',
        items: [
          {
            title: 'Mentoring Program',
            category: 'Uniquely 4U · Better',
            description: 'Executive 1-on-1 mentoring journeys crafted for founders, next-gen leaders, and hospitality pioneers seeking clarity and elevated mindset.'
          },
          {
            title: 'Expertise in Travel and Tourism',
            category: 'Uniquely 4U · Better',
            description: 'Decades of insider access across private estates, boutique retreats, and cross-border cultural curation.'
          },
          {
            title: 'Becoming a SMART Onwner',
            category: 'Uniquely 4U · Better',
            description: 'Strategic ownership frameworks allowing entrepreneurs to scale sustainable enterprises while enjoying life-enriching travel.'
          }
        ]
      },
      {
        title: 'Healthier',
        items: [
          {
            title: 'Yoga Health Consultancy for Natural Healing',
            category: 'Uniquely 4U · Healthier',
            description: 'Bespoke holistic diagnostics, therapeutic breathwork, and restorative yoga sanctuaries in serene natural landscapes.'
          },
          {
            title: 'Luxury Wellness & Romance Travels',
            category: 'Uniquely 4U · Healthier',
            description: 'Intimate thermal springs, coastal sanctuaries, and private couples retreats designed for deep rejuvenation.'
          }
        ]
      },
      {
        title: 'Richer',
        items: [
          {
            title: 'Event Management',
            category: 'Uniquely 4U · Richer',
            description: 'High-impact international summits, gala retreats, and private milestone celebrations produced with editorial precision.'
          },
          {
            title: 'Business Networking',
            category: 'Uniquely 4U · Richer',
            description: 'Curated peer-to-peer roundtables connecting global investors, family offices, and visionary founders.'
          },
          {
            title: 'Factory visits',
            category: 'Uniquely 4U · Richer',
            description: 'Exclusive behind-the-scenes trade delegations and manufacturing inspections across Vietnam, Europe, and Asia.'
          }
        ]
      }
    ]
  },
  {
    id: 'luxurious-services',
    label: 'Luxurious Services',
    menuNumber: '',
    subtitle: 'Bespoke Offerings',
    columns: [
      {
        title: 'Special Combo',
        items: [
          {
            title: 'Sản phẩm 1 — Mediterranean Yacht & Villa Combo',
            category: 'Luxurious Services · Special Combo',
            description: 'A seamless 9-day combination of private Amalfi cliffside living and custom Riva yacht charter.',
          },
          {
            title: 'Sản phẩm 2 — Alpine Thermal & Helicopter Retreat',
            category: 'Luxurious Services · Special Combo',
            description: 'Private glacier transfers paired with five-star holistic longevity suites in the Dolomites.',
          },
          {
            title: 'Sản phẩm 3 — Executive Retreat & Heritage Golf',
            category: 'Luxurious Services · Special Combo',
            description: 'All-inclusive C-suite hospitality combining championship coastal links and private dining.',
          }
        ]
      },
      {
        title: 'Transportations',
        items: [
          {
            title: 'Yoga Health Consultancy for Natural Healing',
            category: 'Luxurious Services · Transportations (Temp)',
            description: 'Currently assigned as a temporary item under Transportations; ready for future fleet & charter update.',
          },
          {
            title: 'Luxury Wellness & Romance Travels',
            category: 'Luxurious Services · Transportations (Temp)',
            description: 'Currently assigned as a temporary item under Transportations; ready for future chauffeured service update.',
          }
        ]
      },
      {
        title: 'Excursions',
        items: [
          {
            title: 'Event Management',
            category: 'Luxurious Services · Excursions (Temp)',
            description: 'Private destination excursions and gala staging across iconic cultural landmarks.',
          },
          {
            title: 'Business Networking',
            category: 'Luxurious Services · Excursions (Temp)',
            description: 'Executive field excursions combining leisure discovery with high-level networking.',
          },
          {
            title: 'Factory visits',
            category: 'Luxurious Services · Excursions (Temp)',
            description: 'Curated industrial and artisan workshops tours with private interpretation and logistics.',
          }
        ]
      }
    ]
  },
  {
    id: 'hot-news',
    label: 'Hot News',
    menuNumber: '',
    subtitle: 'Editorial Journal',
    columns: [
      {
        title: 'Culture & Discovery',
        items: [
          {
            title: 'Content Blog 1 — Hidden Courtyards of Kyoto & Hue',
            category: 'Hot News · Culture & Discovery',
            description: 'An intimate architectural dialogue between imperial garden sanctuaries and living craft traditions.',
          },
          {
            title: 'Content Blog 2 — Private Vineyard Harvests in Piedmont',
            category: 'Hot News · Culture & Discovery',
            description: 'Following white truffle hunters and third-generation cellar masters through autumn mist.',
          },
          {
            title: 'Content Blog 3 — Navigating the Aegean by Traditional Caique',
            category: 'Hot News · Culture & Discovery',
            description: 'Slow island hopping away from cruise ports into untouched Cycladic coves.',
          }
        ]
      },
      {
        title: 'Retreat & Wellness',
        items: [
          {
            title: 'Content Blog 4 — The Science of Thermal Longevity',
            category: 'Hot News · Retreat & Wellness',
            description: 'How mineral hydrotherapy and circadian nutrition reset executive burnout in 7 days.',
          },
          {
            title: 'Content Blog 5 — Ayurvedic Pranayama for Frequent Flyers',
            category: 'Hot News · Retreat & Wellness',
            description: 'Restoring nervous system equilibrium across long-haul time zones.',
          },
          {
            title: 'Content Blog 6 — Designing Romance in Secluded Sanctuaries',
            category: 'Hot News · Retreat & Wellness',
            description: 'Why privacy and unscripted time remain the ultimate luxury for modern couples.',
          }
        ]
      },
      {
        title: 'Financial Wisdom',
        items: [
          {
            title: 'Content Blog 7 — The SMART Owner Mindset in 2026',
            category: 'Hot News · Financial Wisdom',
            description: 'Transitioning from daily operator to strategic portfolio owner through delegation and mentorship.',
          },
          {
            title: 'Content Blog 8 — Evaluating Cross-Border Supply Chains',
            category: 'Hot News · Financial Wisdom',
            description: 'Key insights gathered from our executive factory visits across Southeast Asia.',
          },
          {
            title: 'Content Blog 9 — Investing in Experiential Hospitality',
            category: 'Hot News · Financial Wisdom',
            description: 'Why wellness real estate and boutique retreats outperform conventional asset classes.',
          }
        ]
      }
    ]
  },
  {
    id: 'kollections-4u',
    label: 'Kollections 4U',
    menuNumber: '',
    subtitle: 'Curated Editions',
    columns: [
      {
        title: 'New Arrivals',
        items: [
          {
            title: 'Item 1 — Botanical Silk Travel Kimono',
            category: 'Kollections 4U · New Arrivals',
            description: 'Hand-loomed mulberry silk resort robe dyed with organic botanical extracts.',
          },
          {
            title: 'Item 2 — Sovereign Leather Passport Folio',
            category: 'Kollections 4U · New Arrivals',
            description: 'Full-grain saddle leather travel organizer embossed with subtle 4U Edge Up detailing.',
          },
          {
            title: 'Item 3 — Himalayan Copper Singing Bowl Set',
            category: 'Kollections 4U · New Arrivals',
            description: 'Hand-hammered acoustic meditation vessel selected by our natural healing consultants.',
          }
        ]
      },
      {
        title: 'Must-have',
        items: [
          {
            title: 'Item 4 — Essential Aromatherapy Flight Kit',
            category: 'Kollections 4U · Must-have',
            description: 'Wildcrafted frankincense, neroli, and altitude hydration elixirs for private aviation.',
          },
          {
            title: 'Item 5 — Natural Cork & Linen Yoga Mat',
            category: 'Kollections 4U · Must-have',
            description: 'Antimicrobial sustainably harvested Portuguese cork mat for retreat practice.',
          },
          {
            title: 'Item 6 — SMART Owner Strategic Journal',
            category: 'Kollections 4U · Must-have',
            description: 'Archival linen-bound quarterly planner structured around our mentoring methodology.',
          }
        ]
      },
      {
        title: 'Exclusive',
        items: [
          {
            title: 'Item 7 — Founders Circle Titanium Card',
            category: 'Kollections 4U · Exclusive',
            description: 'Priority concierge key unlocking private villa upgrades and diplomatic airport fast-track.',
          },
          {
            title: 'Item 8 — Bespoke Trunk by Artisan Atelier',
            category: 'Kollections 4U · Exclusive',
            description: 'Made-to-order cabin luggage crafted to your personal itinerary specifications.',
          },
          {
            title: 'Item 9 — Private Cellar Vintage Reserve',
            category: 'Kollections 4U · Exclusive',
            description: 'Numbered collector bottles reserved exclusively for 4U Edge Up summit patrons.',
          }
        ]
      }
    ]
  },

];

export const HERO_SCENES: HeroScene[] = [
  {
    id: 0,
    label: '01. Dolomiti & Alpine Valley',
    kicker: '4U Edge Up · Bespoke Travel, Wellness & Executive Lifestyle',
    headline: 'Crafted Journeys for a Better, Healthier, and Richer Life.',
    subtext: 'From private alpine sanctuaries and natural healing yoga retreats to executive mentoring and international business delegations — experience the world with rare intention.',
    cardTitle: 'Lake Como, Dolomites & Private Thermal Sanctuary',
    cardDesc: '9 Days · Private Villa & Helicopter Transfers · Includes Yoga Health Consultancy & Executive Dining.',
    cardPrice: 'From $6,850 / guest',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2200&q=90',
    alt: 'Cinematic mountain lake and golden sunset reflection'
  },
  {
    id: 1,
    label: '02. Patagonia & Coastal Sanctuary',
    kicker: '4U Edge Up · Untouched Nature & Deep Restoration',
    headline: 'Serene Horizons for Renewal, Mindfulness & Clarity.',
    subtext: 'Untamed fjords, private catamaran expeditions, and tailored holistic healing programs crafted to reconnect mind, body, and purposeful leadership.',
    cardTitle: 'Patagonia Fjord & Coastal Wellness Expedition',
    cardDesc: '11 Days · Private Expedition Vessel · Ayurvedic Guidance & Wild Nature Immersion.',
    cardPrice: 'From $8,400 / guest',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=90',
    alt: 'Pristine coastal waters and expansive golden horizon'
  },
  {
    id: 2,
    label: '03. Kyoto Arashiyama Zen Retreat',
    kicker: '4U Edge Up · Imperial Heritage & Restorative Living',
    headline: 'Centuries of Heritage, Intimate Kaiseki & Inner Peace.',
    subtext: 'Private ryokan sanctuaries, silent bamboo forest meditations, and master-led tea and yoga rituals in historic Japanese cultural capitals.',
    cardTitle: 'Kyoto & Hakone Thermal Spring Pilgrimage',
    cardDesc: '8 Days · Centuries-Old Ryokan · Master Herbal Diagnostics & Private Tea Ceremonies.',
    cardPrice: 'From $7,200 / guest',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=2200&q=90',
    alt: 'Historic pagoda and mist-covered autumn foliage in Kyoto'
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'dest-1',
    title: 'Swiss Alps & Engadin Valley',
    location: 'Engadin, Switzerland',
    category: 'NATURE & LONGEVITY',
    duration: '8 Days · 7 Nights',
    price: 'From $5,800',
    tagline: 'High-Altitude Cellular Rejuvenation',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1800&q=85',
    description: 'Crystalline alpine lakes, high-altitude medical longevity retreats, panoramic glacier rail journeys, and private family-office forums.',
    dossier: 'Alpine purity, holistic cellular rejuvenation, and discreet wealth & leadership summits among Swiss glaciers.'
  },
  {
    id: 'dest-2',
    title: 'Dolomites & Lake Como',
    location: 'Lombardy & South Tyrol, Italy',
    category: 'ROMANCE & SANCTUARY',
    duration: '9 Days · 8 Nights',
    price: 'From $6,400',
    tagline: 'Historic Palazzos & Mountain Onsens',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=85',
    description: 'Terraced cliffside lemon groves, private Riva motor-yacht charters along Como, and secluded thermal spas beneath sheer limestone peaks.',
    dossier: 'Private lakeside villas, Michelin-starred gastronomy, and bespoke helicopter charters tailored for couples and sovereign individuals.'
  },
  {
    id: 'dest-3',
    title: 'Kyoto & Hakone Thermal Ryokans',
    location: 'Kansai & Kanto, Japan',
    category: 'CULTURE & HEALING',
    duration: '7 Days · 6 Nights',
    price: 'From $6,900',
    tagline: 'Centuries of Zen & Private Hot Springs',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1800&q=85',
    description: 'Ancient cedar forest onsens, private temple tea ceremonies with grandmasters, and bespoke diagnostic yoga consultations.',
    dossier: 'Combine centuries-old kaiseki hospitality with restorative breathwork and private cultural sanctuary access.'
  },
  {
    id: 'dest-4',
    title: 'Santorini & Cycladic Archipelagos',
    location: 'Aegean Sea, Greece',
    category: 'BEACH & ESCAPE',
    duration: '7 Days · 6 Nights',
    price: 'From $5,200',
    tagline: 'Caldera Horizons & Private Catamaran Charters',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1800&q=85',
    description: 'Sculpted caldera villas, golden hour catamaran cruises across azure Aegean waters, and restorative cliffside sound meditations.',
    dossier: 'Sunset caldera sanctuaries, volcanic mineral therapies, and private chef dinners under Mediterranean stars.'
  },
  {
    id: 'dest-5',
    title: 'Ha Long Bay & Da Nang Private Bay',
    location: 'Gulf of Tonkin & Central Coast, Vietnam',
    category: 'COASTAL SERENITY',
    duration: '6 Days · 5 Nights',
    price: 'From $3,900',
    tagline: 'Emerald Karsts & Oceanfront Healing Villas',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1800&q=85',
    description: 'Secluded oceanfront wellness villas, private yacht moorings in emerald karsts, and high-impact C-suite networking roundtables.',
    dossier: 'Our signature synthesis of five-star coastal wellness retreats and high-level international trade & investment delegations.'
  },
  {
    id: 'dest-6',
    title: 'Ubud & Uluwatu Cliff Sanctuaries',
    location: 'Bali, Indonesia',
    category: 'ADVENTURE & WELLNESS',
    duration: '8 Days · 7 Nights',
    price: 'From $4,400',
    tagline: 'Sacred Water Temples & Jungle Canopy Estates',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1800&q=85',
    description: 'Lush Ayung river gorge hideaways, Balinese water purification rituals, and breathtaking sunset yoga over Southern ocean cliffs.',
    dossier: 'Deep holistic detoxification, traditional ayurvedic consults, and private villa sanctuaries secluded in pristine rain forests.'
  },
  {
    id: 'dest-7',
    title: 'Positano & Capri Faraglioni',
    location: 'Amalfi Coast, Italy',
    category: 'COASTAL HERITAGE',
    duration: '8 Days · 7 Nights',
    price: 'From $6,100',
    tagline: 'Cliffside Palazzos & Chartered Riva Yachts',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1800&q=85',
    description: 'Private cliffside villas overlooking the Tyrrhenian Sea, Michelin sea-to-table gastronomy, and chartered yacht excursions to Blue Grotto.',
    dossier: 'Mediterranean sun therapy, private lemon orchard yoga, and sovereign diplomatic privacy.'
  },
  {
    id: 'dest-8',
    title: 'Zermatt & Matterhorn Glacier',
    location: 'Valais, Switzerland',
    category: 'ALPINE EXPEDITIONS',
    duration: '7 Days · 6 Nights',
    price: 'From $5,900',
    tagline: 'Glacier Sanctuaries & Private Heli-Skiing',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=85',
    description: 'Unobstructed views of the iconic Matterhorn, private ski chalets with cedar saunas, and holistic altitude conditioning.',
    dossier: 'Discreet alpine chalets with dedicated private chefs, helicopter glacier transfers, and private longevity consultations.'
  },
  {
    id: 'dest-9',
    title: 'Reykjavik & Blue Lagoon',
    location: 'Southern Peninsula, Iceland',
    category: 'GEOTHERMAL HEALING',
    duration: '6 Days · 5 Nights',
    price: 'From $4,900',
    tagline: 'Aurora Borealis & Silica Thermal Springs',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1800&q=85',
    description: 'Private silica thermal lagoons, Aurora Borealis observation from glass geodesic domes, and volcanic basalt detox treatments.',
    dossier: 'Deep geothermal water healing, Arctic vitality rituals, and discreet secluded lodge stays under northern skies.'
  },
  {
    id: 'dest-10',
    title: 'Phuket & Phang Nga Bay',
    location: 'Andaman Sea, Thailand',
    category: 'TROPICAL LONGEVITY',
    duration: '8 Days · 7 Nights',
    price: 'From $4,100',
    tagline: 'Emerald Sea-Cave Yachting & Herbal Sanctuaries',
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1800&q=85',
    description: 'Private pool villas perched over turquoise Andaman waters, traditional Thai herb medicine retreats, and limestone sea-cave kayaking.',
    dossier: 'Holistic herbal detoxification, sunrise meditation over Phang Nga karsts, and private luxury catamaran charters.'
  },
  {
    id: 'dest-11',
    title: 'Queenstown & Milford Sound',
    location: 'Otago & Fiordland, New Zealand',
    category: 'WILDERNESS RETREATS',
    duration: '9 Days · 8 Nights',
    price: 'From $5,400',
    tagline: 'Fiordland Glaciers & Eco-Lodge Sanctuaries',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1800&q=85',
    description: 'Ancient fjord waterfalls, heli-hiking over Southern Alps glaciers, and secluded luxury eco-lodges with master cellar tastings.',
    dossier: 'Pristine southern wilderness immersion, pure oxygen vitality walks, and high-level founder reflection retreats.'
  }
];

export const FEATURED_TOURS: TourItem[] = [
  {
    id: 'tour-3',
    title: 'Vietnam Coastal Healing Villas & Executive Trade Hub',
    subtitle: 'Wellness Retreat & C-Suite Factory Delegation',
    destination: 'Da Nang, Hoi An & Ho Chi Minh City',
    duration: '10 Days / 9 Nights',
    price: '$5,950',
    badge: "Today's Deal",
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1600&q=85',
    inclusions: ['Beachfront Pool Villa', 'B2B Trade Delegations', 'VIP Factory Access', 'Custom Herbal Detox'],
    overview: 'The definitive blend of rejuvenating coastal sanctuary living and privileged peer-level networking across dynamic Southeast Asian manufacturing centers.'
  },
  {
    id: 'tour-4',
    title: 'Swiss Alpine Cellular Wellness & Wealth Leadership Forum',
    subtitle: 'Longevity Sabbatical & Family Office Retreat',
    destination: 'St. Moritz & Zurich, Switzerland',
    duration: '7 Days / 6 Nights',
    price: '$9,400',
    badge: 'Last Minute',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1600&q=85',
    inclusions: ['Medical Wellness Suite', 'Glacier Express Luxury Class', 'Private Investor Roundtable', 'Therapeutic Spa Regime'],
    overview: 'Regenerative cellular medicine meets high-level executive strategic mentoring in the crystalline alpine air of the Engadin Valley.'
  },
  {
    id: 'tour-5',
    title: 'Ravello Cliffside Palazzo & Riva Motor Yacht Charter',
    subtitle: 'Mediterranean Romance & Coastal Indulgence',
    destination: 'Amalfi Coast & Capri, Italy',
    duration: '9 Days / 8 Nights',
    price: '$8,100',
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=85',
    inclusions: ['Private 48ft Riva Yacht', 'Historic Cliff Villa', 'Sunset Opera Concert', 'Private Sommelier Pairings'],
    overview: 'Bask in timeless Mediterranean romance with exclusive access to private coastal grottos, terraced lemon groves, and curated evening salons.'
  },
  {
    id: 'tour-6',
    title: 'Bhutan Himalayan Mindfulness & Gross National Happiness',
    subtitle: 'Sacred Valley Pilgrimage & Mindful Leadership',
    destination: 'Paro, Thimphu & Punakha, Bhutan',
    duration: '8 Days / 7 Nights',
    price: '$6,400',
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85',
    inclusions: ['Six Senses Lodges', 'Tigers Nest Private Ascent', 'Monastic Blessing Ceremony', 'Forest Breathing Sessions'],
    overview: 'Ascend into the legendary kingdom of Thunder Dragon for deeply restorative yogic meditation and philosophical dialogue on holistic living.'
  }
];

export const HOT_NEWS_ARTICLES: HotNewsItem[] = [
  {
    id: 'news-1',
    title: 'Content Blog 1 — Hidden Courtyards of Kyoto & Hue',
    category: 'Culture & Discovery',
    excerpt: 'An intimate architectural dialogue between imperial garden sanctuaries and living craft traditions.',
    readTime: '6 min read',
    date: 'Nov 2026',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'news-2',
    title: 'Content Blog 2 — Private Vineyard Harvests in Piedmont',
    category: 'Culture & Discovery',
    excerpt: 'Following white truffle hunters and third-generation cellar masters through autumn mist.',
    readTime: '8 min read',
    date: 'Oct 2026',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'news-3',
    title: 'Content Blog 4 — The Science of Thermal Longevity',
    category: 'Retreat & Wellness',
    excerpt: 'How mineral hydrotherapy and circadian nutrition reset executive burnout in 7 days.',
    readTime: '7 min read',
    date: 'Nov 2026',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'news-4',
    title: 'Content Blog 5 — Ayurvedic Pranayama for Frequent Flyers',
    category: 'Retreat & Wellness',
    excerpt: 'Restoring nervous system equilibrium across long-haul time zones with clinical breathwork.',
    readTime: '5 min read',
    date: 'Oct 2026',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'news-5',
    title: 'Content Blog 7 — The SMART Owner Mindset in 2026',
    category: 'Financial Wisdom',
    excerpt: 'Transitioning from daily operator to strategic portfolio owner through delegation and mentorship.',
    readTime: '9 min read',
    date: 'Nov 2026',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'news-6',
    title: 'Content Blog 8 — Evaluating Cross-Border Supply Chains',
    category: 'Financial Wisdom',
    excerpt: 'Key insights gathered from our executive factory visits across Southeast Asia.',
    readTime: '10 min read',
    date: 'Sep 2026',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
  }
];

export const KOLLECTIONS_ITEMS: KollectionItem[] = [
  {
    id: 'kol-1',
    title: 'Item 1 — Botanical Silk Travel Kimono',
    category: 'New Arrivals',
    description: 'Hand-loomed mulberry silk resort robe dyed with organic botanical extracts.',
    price: '$480',
    badge: 'Limited Run',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'kol-2',
    title: 'Item 2 — Sovereign Leather Passport Folio',
    category: 'New Arrivals',
    description: 'Full-grain saddle leather travel organizer embossed with subtle 4U Edge Up detailing.',
    price: '$320',
    badge: 'New Edition',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'kol-3',
    title: 'Item 4 — Essential Aromatherapy Flight Kit',
    category: 'Must-have',
    description: 'Wildcrafted frankincense, neroli, and altitude hydration elixirs for private aviation.',
    price: '$260',
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'kol-4',
    title: 'Item 5 — Natural Cork & Linen Yoga Mat',
    category: 'Must-have',
    description: 'Antimicrobial sustainably harvested Portuguese cork mat for retreat practice.',
    price: '$190',
    badge: 'Eco Luxe',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'kol-5',
    title: 'Item 7 — Founders Circle Titanium Card',
    category: 'Exclusive',
    description: 'Priority concierge key unlocking private villa upgrades and diplomatic airport fast-track.',
    price: 'Invitation Only',
    badge: 'Patron',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'kol-6',
    title: 'Item 8 — Bespoke Trunk by Artisan Atelier',
    category: 'Exclusive',
    description: 'Made-to-order cabin luggage crafted to your personal itinerary specifications.',
    price: '$3,800',
    badge: 'Custom Made',
    image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=800&q=80',
  }
];
