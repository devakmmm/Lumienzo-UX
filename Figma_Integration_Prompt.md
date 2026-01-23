# Figma AI Prompt: Dashboard Integration for Lumienzo

## Context
I have an existing Lumienzo onboarding flow and dashboard shell. I need to design the complete dashboard views that connect to my existing sidebar navigation without breaking the current design system.

## Existing Design System (DO NOT CHANGE)
- **Primary Yellow**: `#FEFD7F`
- **Primary Black**: `#18181B`
- **Background**: `zinc-50` (#FAFAFA)
- **Cards**: White with `border-zinc-200`, rounded-2xl
- **Active nav item**: Black bg with yellow icon
- **Fonts**: System defaults, bold headings
- **Sidebar**: 256px wide, white, sticky
- **Navbar**: 73px height with yellow "L" logo

---

## CREATOR DASHBOARD VIEWS

### 1. Dashboard (Home) — `currentView: 'dashboard'`
**Command Center with 4 sections:**

**A) Stats Row (top)**
4 cards in a row:
- Total Earnings ($12,450 with +12% green badge)
- Active Campaigns (3 with circular progress)
- Pending Offers (5 with yellow pulse dot)
- Engagement Rate (4.8% with sparkline)

**B) Active Deals Grid**
Cards showing: Brand logo | Campaign name | Deadline | Status pill (In Progress/Review/Approved) | Progress bar

**C) Urgent Actions**
Yellow-tinted alert cards:
- "Contract expires in 24h" → Review button
- "Content due tomorrow" → Upload button
- "Payment ready to claim" → Claim button

**D) AI Recommendations**
"Lumi suggests..." card with 2-3 brand opportunity cards showing match % score

---

### 2. Opportunities — `currentView: 'opportunities'`
**AI-curated brand deals with smart filtering**

**Header:** "Opportunities" + "5 new matches" yellow badge

**Filter Bar:**
Pills: All | Best Match | Highest Pay | Quick Turnaround
Search input | Budget range slider

**Opportunity Cards (grid):**
Each card shows:
- Brand logo + name + verified badge
- Campaign title
- Budget range ($500-$2,000)
- Match score (92% with filled ring)
- Deliverables icons (📸 Instagram, 🎬 TikTok)
- Deadline
- "View Details" + "Quick Pitch" buttons

**Card hover state:** Subtle lift shadow + yellow border accent

---

### 3. Media Kit — `currentView: 'mediakit'`
**One-page portfolio generator**

**Header:** "Media Kit" + "Share Link" button + "Download PDF" button

**Preview Panel (left 60%):**
Live preview of media kit showing:
- Profile photo + name + tagline
- Social stats row (followers, engagement, avg views)
- Audience demographics (pie chart)
- Rate card table
- Past collaborations grid (brand logos)
- Contact button

**Editor Panel (right 40%):**
Sections to toggle on/off:
- ✓ Show engagement rates
- ✓ Show audience demographics
- ✓ Show past brands
- Rate card editor (per deliverable)

**AI Feature:** "Lumi Rate Suggestion" — shows recommended rates based on your metrics with "Apply Suggestions" button

---

### 4. Wallet/Earnings — `currentView: 'earnings'`
**Financial hub**

**Balance Card (prominent):**
- Available: $2,450.00
- Pending: $1,200.00
- "Withdraw" yellow button

**Earnings Chart:**
Line graph showing last 6 months

**Transaction List:**
Each row: Date | Brand | Campaign | Amount | Status (Paid/Pending/Processing)

**Payout Settings:**
Connected accounts with status indicators

---

### 5. Analytics — `currentView: 'analytics'`
**Performance metrics**

**Time Period Selector:** 7D | 30D | 90D | All Time

**Metric Cards:**
- Profile Views (trend arrow)
- Application Success Rate
- Average Deal Value
- Response Time

**Charts:**
- Earnings over time (area chart)
- Top performing content types (bar chart)
- Audience growth (line chart)

---

### 6. Settings — `currentView: 'settings'`
**Comprehensive creator settings**

**Left Tabs (vertical):**
Profile | Connected Accounts | Standard Terms | Payments & Tax | Shipping | Notifications | Privacy | Lumi AI | Security

**Profile Tab:**
- Avatar upload
- Display name, bio, category
- Website, timezone

**Connected Accounts Tab:**
Social health dashboard showing:
- Platform cards (Instagram ✓, YouTube ⚠️ re-auth in 5 days, TikTok ✗)
- Last sync time
- "Reconnect" buttons

**Standard Terms Tab:**
- Revision limit slider (0-5)
- Usage rights markup slider (0-100%)
- Turnaround time buttons (3/5/7/14 days)
- Rush fee toggle + amount
- Exclusivity pricing table

**Payments & Tax Tab:**
- Payout readiness status (green checkmark or amber warning)
- Payment methods list
- W9/GST/VAT upload section
- Payout frequency selector

**Shipping Tab:**
- Encrypted address (show/hide toggle)
- Preferences toggles
- Size info fields

**Lumi AI Tab:**
**Personality picker with 3 cards:**
- 💼 Professional: "Your deadline is approaching"
- 😊 Casual: "Hey! Don't forget that deadline"
- 🔥 Hype-Man: "LET'S GO! Time to crush it!"

Preview chat bubble showing selected style
Feature toggles: Auto-negotiate, Deadline reminders, Auto-decline low offers

---

## BRAND DASHBOARD VIEWS

### 1. Command Center — `currentView: 'dashboard'`
**Brand HQ overview**

**Stats Row:**
- Active Campaigns (5)
- Creators In Pipeline (23)
- Content Pending Review (8)
- Monthly Spend ($12,450 / $20,000 budget bar)

**Campaign Performance Grid:**
Cards showing: Campaign name | Progress ring | Creators count | Content delivered | ROI estimate

**Urgent Actions:**
- "3 contracts awaiting signature"
- "5 content pieces need approval"
- "2 payments due this week"

**AI Insights:**
"Lumi noticed..." card with optimization suggestions

---

### 2. Discover Creators / Creator Network — `currentView: 'discover'`
**Smart creator search**

**Search Bar:** "Find creators by name, niche, or audience..."

**AI Filters:**
- Match Score threshold slider
- Follower range
- Engagement rate minimum
- Categories (multi-select pills)
- Location
- Verified only toggle

**Creator Cards (grid):**
- Profile photo + name + verified badge
- Platform icons with follower counts
- Engagement rate
- Match score ring (85%)
- Categories tags
- "View Profile" + "Add to Campaign" buttons

**Saved Lists:**
Tabs for custom lists (Favorites, Contacted, Shortlisted)

---

### 3. Campaigns — `currentView: 'campaigns'`
**Campaign management wall**

**Header:** "+ New Campaign" yellow button

**View Toggle:** Grid | Kanban | List

**Campaign Cards:**
- Campaign image/thumbnail
- Title + status badge (Draft/Active/Completed)
- Date range
- Creator count
- Budget used/total
- Quick actions menu

**Kanban View:**
Columns: Planning → Outreach → In Progress → Review → Complete

---

### 4. Pipeline — `currentView: 'pipeline'`
**Creator deal flow**

**Kanban Board:**
Columns: Applied | Screening | Negotiation | Contracted | Creating | Review | Complete

**Creator Cards in pipeline:**
- Avatar + name
- Campaign name
- Stage timer (days in stage)
- Value ($)
- Drag handle

**Side Panel (on card click):**
Full creator details, chat history, contract status

---

### 5. Logistics Hub — `currentView: 'logistics'`
**Product shipment tracking**

**Shipment Cards:**
- Product image
- Creator name + campaign
- Shipping status (Preparing/Shipped/Delivered)
- Tracking number + carrier
- Estimated delivery date

**Map View (optional):**
Pins showing shipment locations

---

### 6. Settings — `currentView: 'settings'`
**Brand workspace settings**

**Left Tabs:**
Company Profile | Team & Access | Brand Guidelines | Billing & Budget | Campaign Defaults | Notifications | Integrations | Lumi AI | Security

**Company Profile:**
- Logo upload
- Company name, website, description
- Industry, company size
- Social profiles

**Team & Access:**
- Invite member form (email + role dropdown)
- Team member list with role badges
- Role permissions explanation

**Brand Guidelines:**
- Color pickers (primary, secondary) with live preview
- Typography selector
- Do's and Don'ts text areas
- Brand assets upload grid
- Voice/tone tags (Professional, Friendly, Bold, etc.)

**Billing & Budget:**
- Current plan card (Growth Plan - $499/mo)
- Budget usage bar
- Budget alerts toggles
- Payment method card
- Billing history table

**Integrations:**
- Grid of integration cards (Shopify ✓, Slack ✓, HubSpot, Google Analytics, Notion, Zapier)
- API key reveal section
- Webhook URL input

---

## GLOBAL COMPONENT: Lumi AI Assistant

**Floating button (bottom-right):**
Yellow circular button with sparkle icon, subtle pulse animation

**Expanded Chat Panel:**
- Header: "Lumi" + personality badge + minimize button
- Chat messages with avatar
- Quick action chips: "Check my deadlines", "Suggest rate", "Draft reply"
- Input field with send button

**Available on all dashboard views for both personas**

---

## Design Requirements

1. **Keep existing** navbar, sidebar, and color scheme exactly as-is
2. **Cards:** White background, zinc-200 border, rounded-2xl, subtle shadow on hover
3. **Buttons:** Primary = Yellow bg + black text, Secondary = black bg + white text
4. **Status indicators:** Green (success), Yellow (warning), Red (urgent)
5. **Badges:** Yellow bg with black text for counts
6. **Empty states:** Friendly illustration + helpful copy + CTA
7. **Loading states:** Skeleton loaders matching card shapes
8. **Mobile:** Bottom navigation bar with 5 key items, collapsible sidebar

---

## Frame Organization

Create these Figma frames:
```
📁 Lumienzo Dashboard
├── 🎨 Design System (existing)
├── 📱 Creator Dashboard
│   ├── Home
│   ├── Opportunities
│   ├── Media Kit
│   ├── Earnings
│   ├── Analytics
│   └── Settings (all tabs)
├── 🏢 Brand Dashboard
│   ├── Command Center
│   ├── Creator Network
│   ├── Campaigns
│   ├── Pipeline
│   ├── Logistics Hub
│   └── Settings (all tabs)
└── 🤖 Lumi Assistant (component)
```

---

## Character Count: ~4,950
