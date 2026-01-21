# Lumienzo Dashboard - Sigma Build Prompt

## Project Vision
Build an influencer marketing platform that eliminates agency fees by directly connecting brands with verified creators through AI-powered matching, automated workflows, and transparent collaboration—saving 20% on every campaign.

---

## Tech Stack
- **Framework**: React 18+ with Vite
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State**: React useState/useEffect (keep it simple)
- **Utilities**: clsx + tailwind-merge for className management

---

## Design System

### Colors
```js
const YELLOW = '#FEFD7F'  // Primary - CTAs, highlights, active states
const BLACK = '#18181B'   // Primary - text, dark backgrounds
// Zinc scale (50-900) for grays
// Emerald for success, Rose for errors, Amber for warnings, Blue for info, Purple for creative
```

### Typography
- Font: System sans-serif stack
- Headings: Bold, tracking-tight
- Body: Regular weight
- Labels: Bold, uppercase, tracking-wider

### Spacing & Radius
- Padding: p-4 (mobile) to p-8 (desktop)
- Border radius: rounded-xl (12px), rounded-2xl (16px), rounded-3xl (24px)
- Shadows: shadow-sm, shadow-lg, shadow-2xl

---

## Architecture

### App Entry (App.jsx)
```
├── Onboarding (if !isOnboarded)
│   └── OnboardingFlow component
│   └── Dev skip buttons (bottom center)
└── Dashboard (if isOnboarded)
    ├── CreatorDashboard (if userType === 'creator')
    └── BrandDashboard (if userType === 'brand')
```

### Brand Dashboard Structure
```
BrandDashboard.jsx
├── Sidebar (fixed 256px, white bg)
│   ├── Logo
│   ├── Navigation items (7 views)
│   └── "New Campaign" CTA button
├── Mobile Menu (slide-out drawer)
├── Header (search, notifications, profile)
├── Main Content (renders based on selectedView)
│   ├── CommandCenter (home)
│   ├── CampaignWall
│   ├── VettingEngine
│   ├── PipelineView
│   ├── LogisticsHub
│   └── CreatorNetwork
└── LumiAssistant (floating, bottom-right)
```

### Creator Dashboard Structure
```
CreatorDashboard.jsx
├── Sidebar (fixed 256px, zinc-50 bg)
│   ├── Logo
│   ├── Navigation items (6 views)
│   └── Pro Plan upsell card
├── Mobile Menu (slide-out drawer)
├── Header (search, notifications, profile)
├── Main Content (renders based on selectedView)
│   ├── DashboardHome (home)
│   ├── Opportunities
│   └── MediaKit
├── Mobile Bottom Nav (4 icons)
└── LumiAssistant (floating, bottom-right)
```

---

## Components to Build

### 1. OnboardingFlow.jsx
**Purpose**: Multi-step onboarding with persona selection and data collection

**Layout**: Split-screen (40% benefits / 60% content) on desktop, stacked on mobile

**Steps**:
- Step 1: Persona selection (Creator vs Brand)
- Creator path: Connect socials → Portfolio builder → Profile setup → Payment preference → Terms → Welcome
- Brand path: Brand identity → Team access → Brand DNA → Anti-fraud settings → Workflow builder → Welcome

**Key Features**:
- Animated benefit text with FlipWords component
- Progress dots at bottom of left pane
- Yellow CTA buttons with arrow icons
- Security notice boxes with shield icon
- Form validation before proceeding

---

### 2. CommandCenter (Brand Home)
**Purpose**: Overview dashboard with key metrics and actions

**Sections**:
- **Savings Ticker**: Yellow card, animated counter showing agency fees saved
- **Campaign Pulse**: 3-column grid of campaign cards with progress circles
- **Pipeline Overview**: 5 colored stage cards with counts
- **Urgent Actions**: List of action items needing attention with approve/review buttons

---

### 3. CampaignWall.jsx
**Purpose**: Visual content management across campaigns

**Features**:
- View toggle (Campaign/Creator view)
- Campaign selector tabs (horizontal scroll)
- Stats grid (4 cards: reach, engagement, content pieces, creators)
- Creator rows with content grids (aspect-[9/16] cards)
- Status badges (Live/Draft/Review), type badges (Organic/Boosted)
- Hover overlays with stats

---

### 4. VettingEngine.jsx
**Purpose**: AI-powered creator analysis and fraud detection

**Features**:
- **Handle Scanner**: Yellow card with input, "Analyze" button, loading state
- **Profile Summary**: Avatar, name, handle, follower/post/engagement stats
- **Dial Metrics**: 3 circular progress indicators (Compatibility, Authenticity, Boost Detection)
- **Red/Green Flags**: Two-column layout with warning/success messages
- **Audience Deep Dive**: Geography bars, age distribution, demographics
- **Actions**: "Send Campaign Pitch" and "Export Report" buttons

---

### 5. PipelineView.jsx
**Purpose**: Kanban-style workflow tracking

**Features**:
- 5 columns: Negotiating, Product Shipped, Scripting, Review, Live
- Column headers with icons and counts
- Creator cards with avatar, name, campaign, deal size
- Column-specific content (tracking numbers, script status, approve buttons, live stats)
- Lumi Bot Activity Feed at bottom

---

### 6. LogisticsHub.jsx
**Purpose**: Physical product and shipment tracking

**Features**:
- Inventory stats (5 cards: Total Units, In Wild, Delivered, Pending, Value)
- Search and filter bar
- Shipments table (desktop) / card view (mobile)
- Status badges with icons (Pending, In Transit, Delivered, Awaiting Verification)
- Verification queue for creators who need to confirm receipt

---

### 7. CreatorNetwork.jsx
**Purpose**: Creator discovery and shortlisting for brands

**Features**:
- View toggle (Discover/Shortlist)
- Search bar with category filter pills
- AI Match Banner explaining scoring
- Creator cards with:
  - Gradient header with match score badge
  - Save/bookmark button
  - Avatar, name, handle, verified badge
  - Stats (followers, engagement)
  - Category tags, location
  - "Quick Pitch" and "View" buttons
- Creator detail modal with full stats and "Send Campaign Pitch" action

---

### 8. Opportunities.jsx (Creator)
**Purpose**: AI-curated brand partnership opportunities

**Features**:
- AI Match Banner with weekly score
- Tabs: AI Matches, Browse All, Saved
- Search and filter
- Category pills
- Opportunity cards with:
  - Brand logo, campaign name, featured badge
  - Match score
  - Description, budget range, deadline, applicant count
  - Category tags
  - Save and Apply buttons
- Opportunity detail modal with deliverables list

---

### 9. MediaKit.jsx (Creator)
**Purpose**: Professional portfolio and rate management

**Features**:
- Tabs: Preview, Customize, Rate Calculator
- **Preview**: Full media kit with header, bio, stats, platforms, demographics, past brands
- **Customize**: Toggle switches for each section
- **Rate Calculator**:
  - AI suggestion banner
  - Deliverable checkboxes with prices
  - Summary with total, market average, and difference
- Share options: Copy link, Email, Download PDF

---

### 10. LumiAssistant.jsx
**Purpose**: Floating AI chat assistant

**Features**:
- Floating yellow button (bottom-right) with pulse animation
- Expandable chat panel (380x560px)
- Message bubbles (user right-aligned dark, assistant left-aligned light)
- Quick action buttons (Create brief, Find creators, Show analytics, Send reminders)
- Typing indicator animation
- Input field with send button

---

## Integration Points

### State Management
```jsx
// App.jsx
const [isOnboarded, setIsOnboarded] = useState(false)
const [userType, setUserType] = useState('brand') // 'creator' or 'brand'

// Dashboard components
const [selectedView, setSelectedView] = useState('home')
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
```

### Navigation Pattern
```jsx
<NavItem 
  icon={<IconComponent size={20} />}
  label="Label"
  active={selectedView === 'viewName'}
  onClick={() => setSelectedView('viewName')}
  badge={3} // optional notification count
/>
```

### View Rendering
```jsx
<AnimatePresence mode="wait">
  {selectedView === 'home' && <HomeComponent />}
  {selectedView === 'other' && <OtherComponent />}
</AnimatePresence>
```

### Mobile Responsiveness
- Use `hidden md:flex` / `md:hidden` for desktop/mobile visibility
- Use `flex-col md:flex-row` for stacking
- Use responsive text sizes: `text-sm md:text-base`
- Use responsive padding: `p-4 md:p-8`
- Use responsive grids: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

---

## Animation Patterns

### Page Transitions
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
>
```

### Card Hover
```jsx
<motion.div
  whileHover={{ y: -4, scale: 1.02 }}
  className="hover:shadow-xl transition-all"
>
```

### Button Press
```jsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
```

### Staggered List
```jsx
{items.map((item, index) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
  />
))}
```

---

## File Structure
```
src/
├── App.jsx
├── main.jsx
├── index.css
├── components/
│   ├── OnboardingFlow.jsx
│   ├── BrandDashboard.jsx
│   ├── CreatorDashboard.jsx
│   ├── CampaignWall.jsx
│   ├── VettingEngine.jsx
│   ├── PipelineView.jsx
│   ├── LogisticsHub.jsx
│   ├── CreatorNetwork.jsx
│   ├── Opportunities.jsx
│   ├── MediaKit.jsx
│   ├── LumiAssistant.jsx
│   ├── LumienzoLogo.jsx
│   ├── PitchModal.jsx
│   └── ui/
│       ├── FlipWords.jsx
│       └── NoiseBackground.jsx
└── utils/
    └── cn.js
```

---

## Mock Data Patterns

### Creator
```js
{
  id: 1,
  name: 'Sarah Martinez',
  handle: '@sarahstyle',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
  followers: 245000,
  engagement: 8.2,
  location: 'Los Angeles, CA',
  categories: ['Fashion', 'Lifestyle'],
  platforms: ['instagram', 'tiktok'],
  matchScore: 94,
  verified: true
}
```

### Campaign
```js
{
  id: 1,
  name: 'Summer Collection Launch',
  progress: 75,
  creators: 12,
  budget: 45000,
  spent: 33750,
  status: 'active'
}
```

### Opportunity
```js
{
  id: 1,
  brand: 'Nike',
  brandLogo: 'N',
  campaign: 'Summer Running Collection',
  description: '...',
  budget: { min: 2000, max: 5000 },
  deadline: '2026-02-15',
  categories: ['Fitness', 'Lifestyle'],
  deliverables: ['1 Instagram Reel', '2 Stories'],
  matchScore: 94,
  applicants: 45
}
```

---

## Key Interactions

1. **Onboarding completion** → Sets userType and isOnboarded → Renders appropriate dashboard
2. **Sidebar navigation** → Updates selectedView state → AnimatePresence swaps content
3. **Mobile menu** → Toggle mobileMenuOpen → Slide-out drawer with backdrop
4. **Lumi Assistant** → Toggle isOpen → Chat panel with message state
5. **Creator cards** → Click to open modal → Full profile with actions
6. **Save/Bookmark** → Toggle saved state in local array
7. **Scan handle** → Set loading state → Simulate API → Show results

---

## Build Order

1. Set up project with Vite + React + Tailwind
2. Create design tokens and utility functions (cn.js)
3. Build LumienzoLogo component
4. Build OnboardingFlow with all steps
5. Build BrandDashboard shell (sidebar, header, routing)
6. Build CommandCenter (home view)
7. Build remaining brand views (CampaignWall, VettingEngine, PipelineView, LogisticsHub, CreatorNetwork)
8. Build CreatorDashboard shell
9. Build creator views (DashboardHome, Opportunities, MediaKit)
10. Build LumiAssistant
11. Add dev skip buttons
12. Test all navigation and interactions
13. Responsive testing

---

## Success Criteria

- [ ] Smooth onboarding flow with both paths working
- [ ] Brand dashboard with all 6 sidebar views functional
- [ ] Creator dashboard with all 3 main views functional
- [ ] Lumi Assistant opens/closes and shows mock responses
- [ ] All animations smooth (60fps)
- [ ] Fully responsive (mobile, tablet, desktop)
- [ ] Consistent design system throughout
- [ ] No console errors
- [ ] Fast initial load (<3s)
