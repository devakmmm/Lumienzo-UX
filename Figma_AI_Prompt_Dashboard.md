# Lumienzo Dashboard - Figma Design Prompt

## Brand Identity
**Colors**: Yellow `#FEFD7F` (CTAs/highlights), Black `#18181B` (text/active), Zinc grays, Emerald (success), Rose (urgent), Amber (warning), Blue (info), Purple (creative)
**Typography**: Modern sans-serif, bold headings, responsive sizing
**Design**: Rounded-xl/rounded-2xl, shadows, smooth animations, generous spacing

---

## BRAND DASHBOARD

### Layout
**Desktop**: Fixed sidebar (256px) + flexible main content, zinc-50 bg
**Mobile**: Hamburger menu, slide-out drawer, bottom actions
**Header**: 64-80px, white bg, search bar (left), notifications + avatar (right)

### Sidebar Navigation
Logo top. Nav items: Command Center, Campaign Wall, Vetting Engine, Pipeline, Logistics Hub, Creator Network, Settings. Active=black bg/white text/shadow-lg. Badge support (rose circle). "New Campaign" yellow CTA button at bottom.

---

## 1. COMMAND CENTER (Home)

**Savings Ticker**: Large yellow card (#FEFD7F), rounded-2xl/rounded-3xl, shadow-2xl. Decorative blur circle. DollarSign icon + "Agency Commissions Saved" label. Animated counter "$XX,XXX" (text-3xl to text-5xl). Subtext "Based on standard 20% agency fees".

**Campaign Pulse**: Grid (1-3 cols). Campaign cards: white bg, border, rounded-2xl. Status badge (yellow tinted "Active"). Campaign name (bold). SVG progress circle (green ≥75%, amber ≥50%, gray <50%). Stats: Creators count, Spent amount. Budget bar (yellow fill).

**Pipeline Overview**: White card. Grid of 5 stage cards (amber/blue/purple/orange/emerald tinted). Large count, stage name (uppercase).

**Urgent Actions**: Red pulsing dot + "Lumi AI Powered". Action cards: Icon container, creator name (bold), action description, campaign name, cost badge, yellow "Approve/Review" button.

**🆕 Lumi AI Assistant**: Floating yellow circle (bottom-right), Zap icon. Expands to chat panel. AI suggestions, quick actions, natural language campaign creation.

---

## 2. CAMPAIGN WALL

**Header**: Title + View toggle (Campaign/Creator/Calendar) + Filter button.
**Campaign Tabs**: Horizontal scroll, selected=black/white, unselected=white/border.
**Stats Grid**: 4 cards (Total Reach, Avg Engagement, Content Pieces, Active Creators).

**Content Grid**: Creator rows (white card, rounded-2xl). Creator header: Avatar, name, handle, content count. Content cards: Aspect-[9/16] (vertical), gradient thumbnails, play icon overlay. Badges: Status (Live=green, Draft=yellow, Review=amber), Type (Organic=green, Boosted=blue), Platform (white circle with letter). Hover: Stats overlay (views, engagement). "Request More" dashed button.

**🆕 Content Calendar View**: Toggle to calendar. Month/week view. Content cards on dates. Drag-drop scheduling. Color-coded by campaign/creator.

---

## 3. VETTING ENGINE

**Handle Scanner**: Large yellow card, rounded-2xl/rounded-3xl, shadow-2xl. Shield icon + "Handle Scanner" heading. Input field (white, rounded-xl, search icon). "Analyze" button (black). Loading: Sparkles icon spinning + "Scanning...".

**Profile Summary**: White card. Large avatar circle (gradient bg). Name, handle. Stats grid: Followers (K format), Posts, Engagement %.

**The Dial Metrics** (3 cards): Colored backgrounds (emerald/blue/amber). Circular SVG progress dial (70px radius). Score (text-3xl to text-4xl), "/100", rating badge (Excellent/Good/Fair/Poor).
- Compatibility Score (emerald)
- Audience Authenticity (blue)  
- Boost Detection (amber, inverse)

**Red Flags & Green Flags**: Two columns. Red: Rose/amber cards, XCircle icons, warning messages. Green: Emerald cards, CheckCircle icons, positive messages.

**Audience Deep Dive**: White card. Geography (Globe icon, location bars with yellow fill). Demographics (Users icon, age distribution bars, gender breakdown).

**🆕 Brand Safety Scanner**: New section. Scans creator's past content for sensitive topics. Categories: Politics, Controversy, Explicit, Competitor mentions. Risk score dial. Flagged posts grid with thumbnails.

**Actions**: "Send Campaign Pitch" (yellow), "Export Report" (white/border), "Add to Watchlist" (ghost).

---

## 4. PIPELINE VIEW

**Header**: Title + Total active count badge.
**Pipeline Board**: 5 columns (horizontal scroll). Fixed width (288-320px each).
- Negotiating (amber)
- Product Shipped (blue)
- Scripting (purple)
- Review (orange)
- Live (emerald)

**Column Header**: Colored bg card, icon + title, count badge (white/50 bg).

**Creator Cards**: White card, border, rounded-xl. Avatar, name, campaign. Deal size "$X,XXX" (bold). Column-specific content:
- Negotiating: Days in stage, Lumi status badge
- Shipped: Tracking number (mono font), ETA badge
- Scripting: Script status, next action
- Review: Status, revision count, Approve/Request Edit buttons (yellow/zinc)
- Live: Platform, views, engagement %, Organic/Boosted badge

**Lumi Bot Activity Feed**: White card. Yellow icon container + heading. Activity items: Yellow dot, creator name, action, timestamp. Zinc-50 bg each item.

**🆕 Smart Automation Panel**: Collapsible right panel. Set triggers: "If revision >3, auto-approve with note", "If ETA passed, send Lumi reminder". Toggle switches, condition builders.

---

## 5. LOGISTICS HUB

**Header**: Title + "New Shipment" button (yellow).
**Inventory Stats**: 5 cards grid (zinc/blue/green/amber/purple). Icon, large value, label. Total Units, In the Wild, Delivered, Pending, Total Value.

**Filters**: Search bar + status filter buttons (All, Pending, In Transit, Awaiting Verification, Delivered). Selected=black/white.

**Shipments Table** (Desktop): White card, rounded-2xl. Columns: Creator (avatar+name+location), Product, Tracking (mono font + carrier badge), Status (colored badge with icon), Timeline (shipped/ETA/delivered dates), Actions (Track button).

**Mobile Card View**: Stacked cards with same info.

**Verification Queue**: Amber tinted card, AlertCircle icon, heading. Grid of verification cards: Creator info, Camera icon + "Needs barcode scan/unboxing video", "Send Reminder via Lumi" button (amber).

**🆕 Returns & Issues**: New tab. Track returns, damage reports. Issue cards with photo uploads. Resolution status timeline.

---

## 6. CREATOR NETWORK (NEW - Full Feature)

**Header**: Title + "Invite Creator" button + Advanced filters.

**🆕 Discovery Feed**: TikTok-style vertical scroll. Creator cards: Large avatar, name, handle, follower count, engagement %, top categories. "View Profile" + "Quick Pitch" buttons. Swipe gestures: Right=Shortlist, Left=Pass.

**Shortlist View**: Saved creators grid. Drag-drop into campaigns. Bulk actions: Message, Export, Add to campaign.

**Invite System**: Send platform invites. Track pending invites. Referral bonuses.

**Creator Search**: Advanced filters: Followers range, engagement %, location, categories, vibe, platform, audience demographics, past brand collaborations.

**🆕 Competitor Intel**: See which creators competitors are working with. "Creators also working with [Brand]" insights. Overlap analysis.

---

## 7. SETTINGS

**Tabs**: Profile, Team, Billing, Integrations, Notifications, Brand Guidelines.

**Profile**: Brand info form, logo upload, industry, website.
**Team**: Member list with roles, invite form, permission matrix.
**Billing**: Plan card, usage stats, payment methods, invoices table.
**Integrations**: Connect Shopify, Slack, Google Analytics, Meta Ads. Connected status badges.
**Notifications**: Toggle grid for email/push/in-app alerts.
**🆕 Brand Guidelines**: Upload brand assets, color palette, tone of voice. AI uses these for creator briefs.

---

## CREATOR DASHBOARD

### Sidebar
Logo. Nav: Dashboard, Opportunities, Portfolio, Wallet, Analytics, Media Kit, Settings. Pro Plan upsell card at bottom (yellow icon, upgrade button).

### 1. DASHBOARD (Home)
**Stats Grid**: 3 cards (Total Earnings, Active Campaigns, Total Reach) with change badges.
**Urgent Actions**: Priority cards with deadlines.
**Active Projects**: Table with brand initial, project title, status badge, progress bar.
**Right Column**: Wallet card (black bg, balance, pending escrow, cash out button). Lumi Health Check (progress dial, engagement tips). Audience Geography bars.

### 🆕 2. OPPORTUNITIES (NEW)
**Brand Matches**: AI-curated brand opportunities. Match score dial. Brand card: Logo, name, campaign brief, budget range, deadline. "View Details" + "Send Pitch" buttons.
**Open Briefs**: Public campaigns accepting applications. Filter by category, budget, deadline.
**Saved**: Bookmarked opportunities.

### 3. PORTFOLIO
**Portfolio Grid**: Uploaded content cards. Drag-reorder. Platform badges. Stats overlay on hover.
**Add Content**: Upload or import from connected socials.
**Visibility Toggle**: Public/Private per piece.

### 4. WALLET
**Balance Card**: Large balance, pending, last payout date.
**Transactions**: Table with date, brand, campaign, amount, status.
**Payment Methods**: Connected bank/PayPal. Add new.
**🆕 Tax Dashboard**: YTD earnings, estimated tax, export for accountant.

### 5. ANALYTICS
**Overview**: Followers, engagement, reach trends (line charts).
**Platform Breakdown**: Per-platform stats.
**Audience Insights**: Demographics, geography, active hours.
**Content Performance**: Top performing posts, engagement breakdown.

### 🆕 6. MEDIA KIT (NEW)
**Auto-Generated Kit**: Professional PDF/link. Stats pulled live.
**Customize**: Choose metrics, add testimonials, brand logos.
**Share**: Copy link, download PDF, email directly.
**🆕 Rate Calculator**: AI-suggested rates based on metrics, category, deliverable type. Comparison to market rates.

### 7. SETTINGS
Profile, Notifications, Connected Accounts, Payment, Privacy.

---

## Global Components

**Floating Lumi AI**: Yellow circle (bottom-right corner), Zap icon. Tap to expand chat. Natural language: "Create a pitch for Nike", "What's my best performing content?", "Remind Sarah about script".

**Notifications Panel**: Slide-out from bell icon. Grouped by type. Mark read, clear all.

**Command Palette** (⌘K): Quick search/actions modal. Search campaigns, creators, navigate anywhere.

**Toast Notifications**: Bottom-right stack. Success (green), error (red), info (blue), warning (amber).

---

## Mobile Adaptations
- Bottom nav bar: 4-5 icons (Home, Campaigns/Opportunities, Wallet, Profile)
- Cards: Full-width, reduced padding
- Tables: Card view on mobile
- Sidebar: Hamburger → slide-out drawer
- Lumi AI: Smaller floating button, full-screen chat
