# Figma AI Prompt: Add Dashboard Features to Existing Design

I have an existing Lumienzo design with onboarding flow and a dashboard shell. Add these new dashboard views using my existing design system, components, and sidebar navigation structure.

---

## ADD TO CREATOR DASHBOARD

### 1. Opportunities View
Create a page for the "Opportunities" sidebar item showing AI-curated brand deals:

**Layout:**
- Header: "Opportunities" title + yellow badge "5 new matches"
- Filter bar with pills: All | Best Match | Highest Pay | Quick Turnaround
- Search input + budget range slider

**Opportunity Cards (3-column grid):**
Each card contains:
- Brand logo (48px circle) + brand name + blue verified checkmark
- Campaign title (bold)
- Budget: "$500 - $2,000"
- Match score: circular progress ring showing percentage (e.g., 92%)
- Platform icons row (Instagram, TikTok, YouTube)
- Deadline with clock icon
- Two buttons: "View Details" (outline) + "Quick Pitch" (yellow fill)

Card hover: lift shadow + yellow left border

---

### 2. Media Kit View
Create a page for media kit generation:

**Split layout (60/40):**

**Left - Live Preview:**
Media kit card showing:
- Creator photo + name + tagline
- Stats row: Followers | Engagement | Avg Views
- Audience demographics mini chart
- Rate card table (Deliverable | Price)
- Past brand logos grid
- "Contact Me" button

**Right - Editor Panel:**
Toggle switches for each section
Rate inputs per deliverable type
Yellow card: "Lumi Rate Suggestion" with AI-recommended rates and "Apply" button

Header buttons: "Copy Link" + "Download PDF"

---

### 3. Settings View (Creator)
Create a settings page with left sidebar tabs:

**Tabs:** Profile | Connected Accounts | Standard Terms | Payments & Tax | Shipping | Notifications | Privacy | Lumi AI | Security

**Connected Accounts tab:**
- "Social Health Score: Good" banner (yellow tint)
- Platform cards: Instagram (green "Healthy"), YouTube (amber "Re-auth in 5 days"), TikTok (gray "Not connected")
- Each has: icon, handle, last sync time, Reconnect/Connect button

**Standard Terms tab:**
- Revision limit slider (0-5) with large number display
- Usage rights markup slider (0-100%) with example calculation
- Turnaround time: 4 button options (3/5/7/14 days)
- Rush fee toggle with amount input
- Exclusivity pricing: 3 columns (30/60/90 days with percentages)

**Lumi AI tab:**
- 3 personality cards side by side:
  - 💼 Professional (formal tone)
  - 😊 Casual (friendly tone)  
  - 🔥 Hype-Man (energetic tone)
- Selected card: black background, white text
- Preview chat bubble below showing example message
- Feature toggles: Auto-negotiate, Deadline reminders, Auto-decline threshold

**Payments & Tax tab:**
- Payout status card (green checkmark or amber warning)
- Payment methods list (PayPal, Bank account)
- Tax document upload area (W9/VAT)
- Payout frequency dropdown

**Shipping tab:**
- Yellow security notice: "Your address is encrypted"
- Address fields with show/hide toggle
- Size info fields (shirt, pants, shoes)

---

## ADD TO BRAND DASHBOARD

### 4. Creator Network View
Create a page for the "Discover Creators" sidebar item:

**Search & Filters:**
- Large search bar: "Find creators..."
- Filter row: Match Score slider | Follower range | Engagement minimum | Categories pills | Verified toggle

**Creator Cards (grid):**
Each card:
- Profile photo (64px, rounded)
- Name + verified badge
- Platform icons with follower counts
- Engagement rate percentage
- Match score ring (colored by percentage)
- Category tags (2-3 pills)
- "View Profile" + "Add to Campaign" buttons

**Tabs above grid:** All Creators | Favorites | Contacted | Shortlisted

---

### 5. Pipeline View
Create a Kanban board for deal management:

**Columns (draggable cards between):**
Applied → Screening → Negotiation → Contracted → Creating → Review → Complete

**Pipeline Cards:**
- Creator avatar + name
- Campaign name (smaller)
- Days in stage badge
- Deal value ($)
- Drag handle icon

Column headers show count and total value

---

### 6. Logistics Hub View
Create a shipment tracking page:

**Shipment Cards:**
- Product thumbnail
- Creator name + campaign
- Status badge: Preparing (yellow) | Shipped (blue) | Delivered (green)
- Tracking number + carrier logo
- Estimated delivery date
- "Track" button

Filter tabs: All | Preparing | In Transit | Delivered

---

### 7. Settings View (Brand)
Create settings with tabs:

**Tabs:** Company Profile | Team & Access | Brand Guidelines | Billing & Budget | Campaign Defaults | Notifications | Integrations | Lumi AI | Security

**Team & Access tab:**
- Invite form: email input + role dropdown + "Send Invite" button
- Team member list: avatar, name, email, role dropdown, Remove button
- Role cards explaining Admin/Editor/Viewer permissions

**Brand Guidelines tab:**
- Color pickers with hex inputs (Primary, Secondary)
- Live preview gradient bar
- Typography dropdown
- Do's and Don'ts text areas
- Brand assets upload grid (Logo Dark, Logo Light, Brand Guide, Product Images)
- Voice tags: clickable pills (Professional, Friendly, Bold, etc.)

**Billing & Budget tab:**
- Current plan card with yellow accent border
- Budget progress bar with remaining amount
- Budget alert toggles
- Payment method card (Visa ending 4242)
- Billing history table with download icons

**Integrations tab:**
- Integration cards grid: Shopify ✓, Slack ✓, HubSpot, Google Analytics, Notion, Zapier
- Connected ones show "Configure", others show "Connect" button
- API key section with reveal button
- Webhook URL input

---

## ADD GLOBAL COMPONENT

### 8. Lumi AI Assistant
Create a floating chat widget:

**Collapsed state:**
- Yellow circle button (56px) bottom-right corner
- Sparkle icon
- Subtle pulse animation

**Expanded state:**
- Chat panel (360px wide, 480px tall)
- Header: "Lumi" + personality badge + minimize button
- Message bubbles (AI has yellow avatar)
- Quick action chips: "Check deadlines" | "Suggest rate" | "Draft reply"
- Input field with send button

Add this component to all dashboard frames (both Creator and Brand)

---

## Design Notes

- Use my existing yellow (#FEFD7F) and black (#18181B) colors
- Match my existing card style (white, rounded-2xl, zinc-200 border)
- Match my existing button styles
- Keep my sidebar navigation exactly as-is
- Add these as new frames that the sidebar items link to
