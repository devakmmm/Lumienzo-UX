# Lumienzo Platform - Complete Figma Design Prompt

## Project Overview
Design a modern influencer marketing platform called "Lumienzo" that connects brands directly with creators, eliminating agency fees. The platform features a comprehensive onboarding flow and two distinct dashboard experiences (Brand and Creator).

---

## Brand Identity & Design System

### Color Palette
- **Primary Yellow**: `#FEFD7F` (Bright, energetic yellow - used for CTAs, highlights, and key UI elements)
- **Primary Black**: `#18181B` (Deep charcoal - used for text, active states, and primary backgrounds)
- **Neutral Grays**: Zinc scale (50-900) for backgrounds, borders, and secondary text
- **Accent Colors**: 
  - Emerald (success states, positive metrics)
  - Rose/Red (alerts, urgent actions)
  - Amber (warnings, pending states)
  - Blue (information, in-transit states)
  - Purple (creative states, scripting)

### Typography
- **Font Family**: Modern sans-serif (Inter or similar)
- **Headings**: Bold, tracking-tight
- **Body**: Regular weight, comfortable line-height
- **Labels**: Bold, uppercase with letter-spacing for emphasis
- **Sizes**: Responsive scale from mobile (text-sm) to desktop (text-4xl for hero headings)

### Design Principles
- **Rounded Corners**: Extensive use of rounded-xl (12px) and rounded-2xl (16px) for cards and buttons
- **Shadows**: Subtle shadow-sm for cards, shadow-lg for elevated elements, shadow-2xl for hero sections
- **Spacing**: Generous padding (p-4 to p-8), consistent gap spacing (gap-3 to gap-8)
- **Borders**: 2px borders for emphasis, 1px for subtle separation
- **Animations**: Smooth transitions, hover effects, and entrance animations (fade, slide, scale)

---

## ONBOARDING FLOW

### Layout Structure
**Desktop**: Split-screen layout (40% left pane for benefits, 60% right pane for content)
**Mobile**: Stacked layout with sticky benefit banner at top

### Step 1: Persona Selection
**Layout**: Centered content, max-width 2xl container

**Elements**:
- Large heading: "How will you use Lumienzo?" (text-3xl to text-4xl, bold)
- Subheading: "Choose the profile that fits your goals." (text-zinc-500)
- Two persona cards in grid (1 column mobile, 2 columns desktop):
  - **Creator Card**: Icon (Users), Title "I'm a Creator", Description "I want to collaborate with top brands"
  - **Brand Card**: Icon (Building2), Title "I'm a Brand", Description "I want to find perfect influencers"
- Card design: Large rounded-2xl/rounded-3xl cards with:
  - Icon in colored container (p-3 to p-4, rounded-xl)
  - Selected state: Black background (#18181B) with white text, yellow icon background
  - Unselected: White background, zinc-200 border, hover effect
  - Hover: Scale 1.02, border darkens

**Left Pane (Desktop)**:
- Lumienzo logo (top-left)
- Large benefit section with:
  - Icon (8x8 size)
  - Title: "Direct Connections" (text-4xl, bold, black)
  - Animated text: "Build [better/faster/smarter/direct] partnerships" (flip animation)
  - Description paragraph
- Progress indicators at bottom (6 dots, active one is wider and black)

**Navigation**: Yellow CTA button appears after selection: "Get Started" with arrow icon

---

### CREATOR ONBOARDING PATH

#### Step 2: Connect Social Platforms
**Content**:
- Heading: "Connect your socials" (text-3xl to text-4xl)
- Subheading: "We use this to verify your reach and build your profile."
- Three platform buttons (full-width, rounded-xl to rounded-2xl):
  - **Instagram**: Pink icon, "Connect" label, checkmark when selected
  - **TikTok**: Black icon
  - **YouTube**: Red icon
- Selected state: Black background, white text, yellow checkmark, yellow glow (box-shadow)
- Security notice box: Yellow tinted background (#FEFD7F with 30% opacity), border, shield icon, security message

**Left Pane**: Benefit "Secure & Private" with shield icon

#### Step 3: Portfolio Builder
**Content**:
- Heading: "Build your portfolio"
- Subheading: "Choose up to 16 posts that showcase your best work."
- Counter: "Selected: X/16" (bold)
- Grid of post thumbnails (4 columns mobile, 5 columns desktop):
  - Aspect-square cards
  - Gradient backgrounds (pink-rose, purple-indigo, blue-cyan, emerald-green, amber-orange)
  - Selected: Black ring-4, overlay with yellow checkmark circle
  - Hover: Scale 1.05

**Left Pane**: Benefit "Showcase Your Best" with sparkles icon

#### Step 4: Profile Setup
**Content**:
- Heading: "Tell us about yourself"
- Subheading: "Help brands understand your unique style."
- **Bio textarea**: Large rounded-2xl input, 4 rows, focus ring with yellow tint
- **Content Categories**: Flex-wrap chips (10 options: Fashion, Tech, Fitness, Beauty, Food, Travel, Gaming, Lifestyle, Business, Education)
  - Selected: Black background, yellow text
  - Unselected: Zinc-100 background, zinc-600 text
- **Content Vibe**: Same chip design (8 options: Cinematic, Lo-Fi/Raw, High-Energy, Minimal/Clean, Informative, Humorous, Inspirational, Documentary)

**Left Pane**: Benefit "AI-Powered Matching" with target icon

#### Step 5: Payment Preference
**Content**:
- Heading: "Payment preference"
- Subheading: "How do you prefer to be compensated?"
- Three option cards (grid, 1 column mobile, 3 columns desktop):
  - **Cash Only**: DollarSign icon, yellow background when selected
  - **Barter Only**: Grid3x3 icon
  - **Mix of Both**: TrendingUp icon
- Card design: Rounded-2xl, border-2, selected has black background with white text

**Left Pane**: Benefit "Instant Payments" with dollar icon

#### Step 6: Terms & Conditions
**Content**:
- Heading: "Terms & Conditions"
- Scrollable terms box: Zinc-50 background, border-2, rounded-2xl, h-64, overflow-y-auto
- Checkbox button: Large rounded-2xl card with:
  - Custom checkbox (w-6 h-6, rounded-lg, black when checked with yellow checkmark)
  - Bold text: "I accept the Terms and Conditions"

**Left Pane**: Benefit "Fair & Transparent" with file icon

#### Step 7: Welcome Screen
**Content**: Centered, animated entrance
- Large Lumienzo logo (scale animation)
- Heading: "Welcome to Lumienzo! 👋" (text-5xl, bold)
- Subheading with persona-specific message
- Info card: Zinc-50 background, border-2, rounded-2xl, checklist with checkmarks
- Final CTA: "Go to Dashboard" button

---

### BRAND ONBOARDING PATH

#### Step 2: Brand Identity
**Content**:
- Heading: "Brand identity"
- Two-column form (1 column mobile):
  - Brand Name input
  - Industry dropdown (10 options: D2C Beauty, SaaS, FMCG, Tech, Fashion, Fitness, Food & Beverage, E-commerce, Finance, Travel)
- **Agency Tax Calculator Card**: Large rounded-3xl, gradient black background (zinc-900 to zinc-800), white text
  - DollarSign icon and heading
  - Slider input for monthly spend ($1K to $100K)
  - Large display: "$X,XXX" (text-3xl to text-5xl)
  - Savings calculation: "Agency Commission Saved (20%): $X,XXX" in yellow
  - Yellow progress bar on slider

**Left Pane**: Benefit "Zero Commission" with trending icon

#### Step 3: Team Access
**Content**:
- Heading: "Invite your team"
- Input row: Email input + Role dropdown (Admin, Editor, Viewer) + Add button (black with yellow text)
- Team member list: Cards with email and role badge (yellow background)
- Skip note: Italic, zinc-500 text

**Left Pane**: Benefit "Team Collaboration" with user-plus icon

#### Step 4: Brand DNA
**Content**:
- Heading: "Define your brand vibe"
- Subheading: "Connect your social accounts so our AI can analyze your aesthetic."
- Two platform buttons (Instagram, TikTok) - same design as creator step 2
- **AI Analysis Result Card** (appears after connection):
  - Yellow tinted background, border, sparkles icon
  - Bold heading: "AI Analysis Complete"
  - Analysis text with highlighted keywords

**Left Pane**: Benefit "AI Brand Matching" with palette icon

#### Step 5: Anti-Fraud Shield
**Content**:
- Heading: "Anti-Fraud Shield"
- Two slider cards (white background, border-2, rounded-2xl):
  - **Minimum Audience Authenticity**: Slider (50-100%), large percentage display, description text
  - **Minimum Organic Reach**: Slider (30-100%), same design
- Info box: Yellow tinted, shield icon, explanation text

**Left Pane**: Benefit "Fraud Protection" with shield icon

#### Step 6: Workflow Builder
**Content**:
- Heading: "Build your workflow"
- Grid of workflow step buttons (2 columns mobile, 4 columns desktop):
  - 8 options: Ideation, Brief, Script, Content Creation, Review, Revisions, Final Approval, Promotion
  - Selected: Black background, white text
  - Unselected: White background, zinc-200 border
- **Workflow Preview Card**: Zinc-50 background, shows selected steps as yellow badges with arrows between

**Left Pane**: Benefit "Automated Workflows" with settings icon

#### Step 7: Welcome Screen
Same as creator, with brand-specific messaging

---

## BRAND DASHBOARD

### Layout Structure
- **Sidebar** (Desktop): Fixed 256px width, white background, border-r
- **Main Content**: Flexible width, zinc-50 background
- **Header**: Fixed height (64px mobile, 80px desktop), white background, border-b

### Sidebar Navigation
**Elements**:
- Lumienzo logo (top, xl size, padding)
- Navigation items (space-y-1):
  - **Command Center** (LayoutGrid icon) - Active state: Black background, white text, shadow-lg
  - **Campaign Wall** (FileText icon) - Badge: Red circle with count
  - **Vetting Engine** (Shield icon)
  - **Pipeline** (BarChart3 icon)
  - **Logistics Hub** (Package icon)
  - **Creator Network** (Users icon)
  - **Settings** (Sliders icon)
- **New Campaign Button**: Full-width, yellow background, black text, shadow-lg, plus icon

**Mobile**: Hamburger menu, slide-out drawer with same navigation

### Header
**Left Section**:
- Mobile: Hamburger + logo
- Desktop: Search bar (zinc-50 background, rounded-xl, search icon left, placeholder text)

**Right Section**:
- Notification bell (red dot indicator)
- User profile: Avatar circle + name/role text (hidden on small mobile)

**Mobile Search**: Separate bar below header

### Command Center View

#### Savings Ticker Card
- Large rounded-2xl/rounded-3xl card, yellow background (#FEFD7F)
- Decorative blur circle (top-right)
- Content:
  - DollarSign icon + "Agency Commissions Saved" label (uppercase, tracking-wider)
  - Large animated number: "$XX,XXX" (text-3xl to text-5xl, bold)
  - Subtext: "Based on standard 20% agency fees"
- Shadow-2xl

#### Campaign Pulse Section
- Heading: "Campaign Pulse" with "View All" link
- Grid of campaign cards (1 column mobile, 2 columns tablet, 3 columns desktop):
  - White background, border, rounded-2xl, shadow-sm
  - **Status badge**: Yellow tinted, "Active" label
  - **Campaign name**: Bold, text-lg
  - **Progress circle**: SVG circle (36px radius), colored stroke based on progress
    - Green: ≥75%, Amber: ≥50%, Gray: <50%
    - Percentage in center
  - **Stats**: Creators count, Spent amount
  - **Budget bar**: Full-width, yellow fill, shows spent/budget ratio
  - Hover: Lift effect (y: -4)

#### Pipeline Overview Section
- White card, border, rounded-2xl
- Heading: "Active Pipeline"
- Grid of stage cards (2 columns mobile, 3 columns tablet, 5 columns desktop):
  - Colored backgrounds (amber, blue, purple, orange, emerald)
  - Large count number (text-2xl to text-3xl)
  - Stage name (uppercase, tracking-wider, text-xs)

#### Urgent Actions Section
- Heading with pulsing red dot + "Urgent Actions" + "Powered by Lumi AI"
- List of action cards:
  - White background, border, rounded-xl
  - Icon container (w-10 h-10, zinc-50 background)
  - Creator name (bold)
  - Action description
  - Campaign name
  - Cost badge (if applicable)
  - Action button (yellow background, "Approve" or "Review")

---

### Campaign Wall View

**Header**:
- Title: "Campaign Wall"
- View toggle: Two buttons (Campaign View / Creator View) in white container
- Filter button with dropdown icon

**Campaign Selector**:
- Horizontal scrollable tabs
- Selected: Black background, white text, shadow-lg
- Unselected: White background, border

**Aggregated Stats**:
- Grid of 4 stat cards (2 columns mobile, 4 columns desktop)
- White background, border, rounded-xl/rounded-2xl
- Title (zinc-500, text-sm)
- Large value (text-2xl to text-3xl, bold)
- Change indicator (emerald-600, if positive)

**Content Grid**:
- Creator rows (white cards, border, rounded-xl/rounded-2xl)
- Creator header: Avatar, name, handle, content count
- Content grid: 2 columns mobile, 3 tablet, 4 desktop
  - **Content cards**: Aspect-[9/16] (vertical), rounded-xl
    - Gradient thumbnail background
    - Play icon overlay (center, white/80)
    - Status badges (top-left): Live (green), Draft (yellow), Review (amber)
    - Type badge: Organic (green) or Boosted (blue)
    - Platform badge (top-right): White circle with letter
    - Hover: Lift + scale, shows stats overlay (views, engagement)
  - **Add More button**: Dashed border, plus icon, "Request More" text

---

### Vetting Engine View

**Handle Scanner Card**:
- Large yellow card (rounded-2xl/rounded-3xl), shadow-2xl
- Decorative blur circle
- Shield icon + "Handle Scanner" heading
- Description text
- Input field: White background, rounded-xl, search icon left
- "Analyze" button: Black background, white text, sparkles icon when scanning

**Scan Results** (appears after scan):

**Profile Summary Card**:
- White card, border, rounded-2xl
- Avatar circle (gradient background, large, 80px)
- Name and handle
- Stats grid: Followers (K format), Posts, Engagement (%)

**The Dial Metrics** (3 cards, grid):
- Colored backgrounds (emerald, blue, amber)
- Circular progress dial (SVG, 70px radius)
- Score display (large, text-3xl to text-4xl)
- Description text
- Rating badge: "Excellent/Good/Fair/Poor"

**Red Flags & Green Flags** (2 columns):
- **Red Flags**: Rose/amber tinted cards, XCircle icons, warning messages
- **Green Flags**: Emerald tinted cards, CheckCircle icons, positive messages

**Audience Deep Dive Card**:
- White card, border, rounded-2xl
- Two columns:
  - **Geography**: Globe icon, location bars with percentages (yellow fill)
  - **Demographics**: Users icon, age distribution bars (yellow), gender breakdown

**Action Buttons**:
- Primary: "Send Campaign Pitch" (yellow background)
- Secondary: "Export Report" (white, border)

---

### Pipeline View

**Header**:
- Title: "Automated Pipeline"
- Total active count badge

**Pipeline Board** (Horizontal scroll):
- 5 columns (Negotiating, Product Shipped, Scripting, Review, Live)
- Each column: Fixed width (288px mobile, 320px desktop)

**Column Header**:
- Colored background card (amber, blue, purple, orange, emerald)
- Icon + title
- Count badge (white/50 background)

**Creator Cards** (within columns):
- White background, border, rounded-xl, shadow-sm
- Creator info: Avatar, name, campaign
- Deal size: "$X,XXX" (bold)
- Column-specific content:
  - **Negotiating**: Days in stage, Lumi status badge
  - **Shipped**: Tracking number, ETA badge
  - **Scripting**: Script status, next action
  - **Review**: Review status, revisions count, Approve/Request Edit buttons
  - **Live**: Platform, views, engagement, Organic/Boosted badge
- Hover: Lift + scale

**Lumi Bot Activity Feed**:
- White card, border, rounded-2xl
- Yellow icon container + "Lumi Bot Activity" heading
- Activity items: Yellow dot + creator name + action + timestamp
- Zinc-50 background for each item

---

### Logistics Hub View

**Header**:
- Title: "Logistics & Barter Hub"
- "New Shipment" button (yellow)

**Inventory Overview**:
- Grid of 5 stat cards (2 columns mobile, 3 tablet, 5 desktop)
- Colored backgrounds (zinc, blue, green, amber, purple)
- Icon, large number, label (uppercase)

**Filters**:
- Search bar (full-width mobile, flex-1 desktop)
- Status filter buttons (horizontal scroll on mobile)

**Shipments Table** (Desktop):
- White card, border, rounded-xl/rounded-2xl
- Table with columns: Creator, Product, Tracking, Status, Timeline, Actions
- Status badges: Colored backgrounds with icons
- Timeline: Shipped/ETA/Delivered dates

**Mobile Card View**:
- Stacked cards with same information
- Full-width, padding, border-b

**Verification Queue** (if applicable):
- Amber tinted card, border-2, rounded-2xl
- Alert icon + heading
- Grid of verification cards (3 columns)
  - Creator avatar, name, product
  - Camera icon + reminder text
  - "Send Reminder via Lumi" button (amber background)

---

## CREATOR DASHBOARD

### Layout Structure
- **Sidebar** (Desktop): 256px width, zinc-50 background (different from brand)
- **Main Content**: Flexible, zinc-50 background
- **Header**: Same structure as brand dashboard
- **Mobile Bottom Nav**: Fixed bottom bar with 4 icons

### Sidebar Navigation
- Same logo placement
- Navigation: Dashboard (active), Portfolio, Wallet, Analytics, Settings
- **Pro Plan Card** (bottom):
  - White background, border, rounded-2xl
  - Yellow icon container with Zap icon
  - "Pro Plan" label (uppercase)
  - Description text
  - "Upgrade Now" button (black background)

### Dashboard View

**Stats Grid** (3 columns):
- White cards, border, rounded-xl/rounded-2xl
- Title (zinc-500, text-xs to text-sm)
- Large value (text-xl to text-2xl, bold)
- Change badge (emerald or rose, rounded-lg)

**Urgent Actions Section**:
- Heading: "Urgent Actions" + "View All"
- Action cards:
  - White background, border, rounded-xl
  - Icon container (zinc-50)
  - Title (bold)
  - Subtitle (zinc-500)
  - Priority badge (colored background)

**Active Projects Section**:
- Heading: "Active Projects"
- White card, border, rounded-xl/rounded-2xl
- Project rows (divide-y):
  - Brand initial circle (black background, white text)
  - Project title + brand name
  - Progress bar (yellow fill)
  - Status badge (colored: Funded=emerald, Scripting=zinc, Review=amber)
  - More options icon

**Right Column** (Desktop, 380px width):

**Wallet Card**:
- Black background (zinc-900), rounded-2xl/rounded-3xl, shadow-2xl
- Credit card icon (top-right, white/10 background)
- "Available Balance" label
- Large amount: "$X,XXX.XX" (text-3xl to text-4xl)
- Details: Pending in escrow (amber), Last payout date
- "Cash Out to Bank" button (yellow background)

**Lumi Health Check Card**:
- White background, border, rounded-xl/rounded-2xl
- Heading + "Healthy" badge (emerald)
- Circular progress dial (82%, green stroke)
- Description text with trend
- **Lumi AI Tip box**: Yellow tinted background, Zap icon, italic text

**Audience Geography Card**:
- White background, border, rounded-xl/rounded-2xl
- Heading: "Audience Geography"
- Location bars: Country name + percentage + progress bar (black fill)
- "View Full Analytics" button (border, full-width)

**Mobile Bottom Nav**:
- Fixed bottom, white/80 background, backdrop-blur, border-t
- 4 icons: Home, Tasks, Wallet, Profile
- Active: Black text, Inactive: Zinc-400

---

## Component Specifications

### Buttons
- **Primary**: Yellow background (#FEFD7F), black text, rounded-xl, bold, shadow-lg, hover scale 1.02
- **Secondary**: White background, border-2, black text, rounded-xl, hover border darkens
- **Tertiary**: Text only, zinc-500, hover black
- **Icon Buttons**: Square, padding, rounded-lg

### Cards
- **Standard**: White background, border (1-2px), rounded-xl/rounded-2xl, shadow-sm, padding (p-4 to p-8)
- **Elevated**: shadow-lg or shadow-xl
- **Colored**: Tinted backgrounds (10-50% opacity) with matching borders

### Inputs
- **Text/Email**: White background, border-2 (zinc-200), rounded-2xl, padding (px-5 py-4), focus ring (yellow tint)
- **Textarea**: Same as input, resize-none, 4+ rows
- **Select**: Same as input, dropdown arrow
- **Slider**: Custom styled, colored track, rounded-full

### Badges
- **Status**: Colored background, rounded-full, small text, bold, uppercase
- **Count**: Red circle (rose-500), white text, small
- **Info**: Tinted background, border, rounded-lg, icon + text

### Icons
- **Size**: 16px (small), 20px (default), 24px (medium), 32px+ (large)
- **Style**: Lucide-style, outlined, consistent stroke width
- **Color**: Inherit from parent or explicit (zinc-400 to zinc-900)

### Animations
- **Entrance**: Fade + slide (opacity 0→1, y: 10→0)
- **Hover**: Scale (1.02), lift (y: -2 to -4), shadow increase
- **Transitions**: 0.3s ease for most, 0.5s for complex
- **Loading**: Rotate animation for spinners

---

## Responsive Breakpoints

- **Mobile**: < 640px (sm)
  - Single column layouts
  - Stacked navigation
  - Full-width buttons
  - Smaller text sizes
  - Bottom navigation bar

- **Tablet**: 640px - 1024px (md)
  - 2-column grids
  - Sidebar visible
  - Medium text sizes

- **Desktop**: > 1024px (lg)
  - Multi-column grids (3-5 columns)
  - Full sidebar
  - Larger text and spacing
  - Hover states active

---

## Additional Design Notes

1. **Accessibility**: Ensure sufficient color contrast, focus states visible, keyboard navigation support
2. **Loading States**: Skeleton screens or spinners for async content
3. **Empty States**: Friendly messaging with illustrations or icons
4. **Error States**: Clear error messages with retry options
5. **Success States**: Confirmation animations or toasts
6. **Micro-interactions**: Button press feedback, card hover effects, smooth transitions
7. **Data Visualization**: Progress bars, circular dials, stat cards with clear hierarchy
8. **Modal/Dialog**: Overlay with backdrop, centered card, close button
9. **Tooltips**: Small popovers on hover for additional context
10. **Scroll Behavior**: Smooth scrolling, sticky headers where appropriate

---

## Implementation Checklist for Figma

- [ ] Create design system with color palette, typography, spacing tokens
- [ ] Build component library (buttons, cards, inputs, badges, icons)
- [ ] Design onboarding flow screens (all 7 steps for both paths)
- [ ] Design brand dashboard (Command Center, Campaign Wall, Vetting Engine, Pipeline, Logistics)
- [ ] Design creator dashboard (main view with all sections)
- [ ] Create mobile variants for all screens
- [ ] Add interaction prototypes (hover states, transitions, navigation)
- [ ] Document design decisions and component usage
- [ ] Export assets and prepare for handoff

---

**End of Prompt**
