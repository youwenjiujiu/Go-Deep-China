# GoDeep China - Discover Yunnan

A comprehensive travel platform for international tourists to explore Yunnan Province, China's most ethnically diverse region.

## 🌟 Features

### Core Functionality

- **Interactive Yunnan Map** - Explore destinations with an interactive SVG map
- **25 Ethnic Minorities Explorer** - Deep dive into unique cultures, languages, and traditions
- **Theme-based Travel Routes** - Curated itineraries for different interests:
  - Photography Paradise
  - Outdoor Adventure
  - Tea & Coffee Trail
  - Spiritual Journey
  - Tropical Escape
  - Cultural Immersion

### Essential Travel Tools

- **Visa Assistant** ✅ - Step-by-step visa application guidance with country-specific requirements
- **Language Helper** ✅ - Chinese phrases with pinyin, copy/audio features, pronunciation tips
- **Currency Converter** ✅ - Real-time exchange rates, payment method guides, budget planning
- **Weather & Climate** ✅ - Multi-city forecasts with altitude warnings and packing guides
- **Local Guides Directory** ✅ - Verified guides with specialties, languages, and ratings
- **Festival Calendar** ✅ - 120+ annual ethnic festivals with search and filters
- **Photo Gallery** ✅ - Curated images with lightbox viewer and category browsing
- **Transport Planner** - Flight, train, and bus booking integration
- **Offline Maps** - GPS-enabled maps for remote areas
- **Health Guide** - Altitude sickness prevention and medical resources
- **Emergency Resources** - Embassy contacts and 24/7 support

### User Experience

- **AI Trip Planner** ✅ - 5-step wizard for personalized itinerary generation
- **Destination Detail Pages** ✅ - In-depth guides with experiences and accommodations
- **Booking Integration** ✅ - Modal-based booking system with multi-step wizard
- **Search & Filters** ✅ - Advanced filtering by price, difficulty, category, region
- **Review System** ✅ - Community-driven ratings and feedback display
- **Interactive Navigation** ✅ - Dropdown menus, sticky headers, smooth transitions
- **Multi-language Support** - English, Chinese, and more (via i18n) - Coming soon
- **Responsive Design** ✅ - Fully optimized for mobile, tablet, and desktop

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui patterns
- **Icons**: Lucide React
- **Animations**: Framer Motion

### Backend & Database
- **ORM**: Prisma
- **Database**: PostgreSQL
- **API Routes**: Next.js API Routes

### External Integrations
- **Maps**: Mapbox GL JS
- **AI**: OpenAI API (for trip planning)
- **i18n**: next-intl

## 📁 Project Structure

```
godeep-china/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout with header/footer
│   ├── page.tsx                 # Homepage
│   ├── destinations/
│   │   ├── page.tsx             # Destinations listing
│   │   └── [slug]/page.tsx      # Destination details
│   ├── experiences/
│   │   └── page.tsx             # Experiences marketplace
│   ├── culture/
│   │   └── page.tsx             # Ethnic groups explorer
│   ├── festivals/
│   │   └── page.tsx             # Festival calendar
│   ├── guides/
│   │   └── page.tsx             # Local guides directory
│   ├── gallery/
│   │   └── page.tsx             # Photo gallery
│   ├── plan/
│   │   └── page.tsx             # AI trip planner
│   └── tools/
│       ├── visa/page.tsx        # Visa guide
│       ├── weather/page.tsx     # Weather forecast
│       └── language/page.tsx    # Language helper
├── components/
│   ├── ui/                      # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── gallery.tsx          # Gallery with lightbox
│   └── sections/                # Homepage sections
│       ├── header.tsx
│       ├── footer.tsx
│       ├── hero.tsx
│       ├── theme-routes.tsx
│       ├── ethnic-cultures.tsx
│       └── travel-tools.tsx
├── lib/
│   ├── utils.ts                 # Utility functions
│   └── prisma.ts                # Prisma client
├── prisma/
│   ├── schema.prisma            # Database schema
│   └── seed.ts                  # Sample data seeder
└── public/
    └── images/                  # Static assets
```

## 🗄️ Database Schema

### Core Models

- **Destination** - Cities, towns, and attractions
- **EthnicGroup** - 25 ethnic minorities with cultural details
- **Experience** - Activities, tours, workshops
- **Festival** - Annual celebrations and events
- **Accommodation** - Hotels, guesthouses, homestays
- **Guide** - Local certified guides
- **Itinerary** - Pre-planned trip routes
- **User** - Traveler accounts
- **Booking** - Reservations and bookings
- **Review** - User feedback and ratings

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (optional for development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/godeep-china.git
cd godeep-china
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

### Database Setup (Optional)

For full functionality with database:

1. Set up environment variables:
```bash
cp .env.example .env
```

2. Edit `.env` and add:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/godeep_china"
```

3. Initialize the database:
```bash
npx prisma generate
npx prisma db push
```

## 📝 Development Roadmap

### Phase 1: Foundation ✅
- [x] Project setup with Next.js 14
- [x] Database schema design
- [x] Homepage with hero, routes, cultures, tools sections
- [x] Destination detail pages
- [x] Responsive header and footer

### Phase 2: Core Pages ✅
- [x] Destinations listing page with filters
- [x] Culture/Ethnic groups explorer
- [x] Experiences marketplace
- [x] AI trip planner (frontend)
- [x] Festival calendar with search
- [x] Local guides directory
- [x] Photo gallery with lightbox
- [x] Visa guide wizard
- [x] Weather forecast tool
- [x] Language helper with phrases

### Phase 3: Content & Data ✅
- [x] Database seed file with sample data
- [x] 5 major destinations (Lijiang, Dali, Shangri-La, Kunming, Xishuangbanna)
- [x] 5 ethnic group profiles (Naxi, Bai, Yi, Dai, Tibetan)
- [x] 3 major festivals (Water Splashing, Torch, March Fair)
- [x] 8 sample experiences
- [x] 8 local guide profiles

### Phase 4: Enhanced Features ✅
- [x] Currency converter tool with real-time rates
- [x] Advanced filtering system for experiences (price range, difficulty)
- [x] Booking modal component with multi-step wizard
- [x] Search functionality for destinations
- [x] Improved navigation with dropdown menus
- [x] Responsive layout improvements
- [x] User authentication (NextAuth.js with Google OAuth)
- [x] User profile page with editable information
- [x] Bookings management page
- [x] Saved items/favorites page
- [x] API routes for destinations, experiences, bookings, reviews
- [x] Prisma database schema with 15+ models
- [x] Interactive map component (Mapbox integration ready)

### Phase 5: Advanced Features (Next)
- [ ] Multi-language support (i18n with next-intl)
- [ ] Real AI trip planner (OpenAI API integration)
- [ ] Interactive Mapbox maps
- [ ] User authentication (NextAuth.js)
- [ ] Backend booking system with calendar
- [ ] Payment integration (Stripe/Alipay)
- [ ] Real-time chat with guides
- [ ] Community forums and reviews
- [ ] Mobile app (React Native)

## 🎨 Design System

### Colors
- Primary: Emerald (#059669) - Represents Yunnan's natural beauty
- Secondary: Blue (#3B82F6) - Mountains and sky
- Accent colors for ethnic groups and themes

### Typography
- Font: Inter (sans-serif)
- Headings: Bold, large sizes for impact
- Body: Readable sizes for content

## 🌍 Internationalization

Planned languages:
- English (primary)
- 简体中文 (Simplified Chinese)
- 日本語 (Japanese)
- 한국어 (Korean)
- Français (French)
- Deutsch (German)
- Español (Spanish)

## 📄 License

This project is licensed under the MIT License.

---

**GoDeep China** - Experience the soul of Yunnan 🏔️
