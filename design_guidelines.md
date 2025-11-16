# Sethu Properties Website Design Guidelines

## Design Approach
**Reference-Based with Professional Foundation**: Drawing from industry leaders like Zillow and Redfin while maintaining a trust-focused, approachable aesthetic that resonates with both local and NRI clients. The design emphasizes clarity, credibility, and warmth.

## Brand Colors (From Logo)
- Primary Blue: #2B5273
- Accent Orange: #FF6633
- Supporting neutrals and whites for balance

## Typography System

**Font Families**:
- Headings: Inter (700, 600 weights)
- Body: Inter (400, 500 weights)

**Hierarchy**:
- Hero Headlines: text-5xl to text-6xl, font-bold
- Section Headers: text-3xl to text-4xl, font-semibold
- Subheadings: text-xl to text-2xl, font-semibold
- Body Text: text-base to text-lg
- Captions/Meta: text-sm

## Layout & Spacing

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, m-8, gap-12)

**Containers**:
- Full-width sections: w-full with inner max-w-7xl mx-auto px-6
- Content sections: max-w-6xl mx-auto
- Reading content: max-w-4xl

**Section Padding**: 
- Desktop: py-20 to py-24
- Mobile: py-12 to py-16

## Page-Specific Layouts

### Homepage
1. **Hero Section** (80vh):
   - Large hero image showing South Tamil Nadu properties/landscapes with subtle overlay
   - Centered headline: "Your Trusted Property Partner in South Tamil Nadu"
   - Subheadline about NRI and local services
   - Two CTAs: "Get Free Consultation" (primary) + "Explore Services" (secondary)
   - Trust badge: "Trusted by 500+ Property Owners Worldwide"

2. **Value Propositions** (3 columns on desktop):
   - Cards highlighting "Deep Local Knowledge", "NRI-Friendly", "Tech-Enabled"
   - Icon + headline + 2-line description per card

3. **Services Overview** (2-column grid):
   - 6 service cards with icons, titles, brief descriptions, "Learn More" links

4. **How It Works** (Timeline/Steps):
   - Horizontal numbered steps (1-6) showing process flow
   - Step number, title, brief description

5. **Service Areas Map Section**:
   - Visual map or grid showing Madurai, Karaikudi, Ramanathapuram, Paramakudi, Rajapalayam
   - Each area with quick stats or highlights

6. **Social Proof/Trust**:
   - 2-3 testimonial cards with client photos, quotes, location
   - Statistics: "500+ Properties Managed", "98% Client Satisfaction", "15+ Years Combined Experience"

7. **CTA Section**:
   - "Ready to Get Started?" with contact form preview or calendar booking

### About Page
- Hero with company photo/team image
- Story section: 2-column (text + supporting image)
- Vision/Mission: Side-by-side cards
- Core Values: 5-card grid with icons
- Why Choose Us: Feature list with checkmarks

### Services Page
- Hero: Service overview
- 5 detailed service sections, each with:
  - Service icon/illustration
  - Service name as h2
  - Description paragraph
  - Bulleted key features list
  - CTA button
- Alternating left/right image layouts per service

### How It Works Page
- Hero: Process overview
- 6-step detailed walkthrough with expanded descriptions
- Visual progress indicator
- Technology features section showcasing digital tools

### Service Areas Page
- Hero with South Tamil Nadu map
- 5 area cards (grid) with:
  - Area photo
  - Area name
  - Key highlights (3-4 bullets)
  - "View Properties" CTA

### Contact Page
- 2-column layout:
  - Left: Contact form (Name, Email, Phone, Property Type, Service Interest, Message)
  - Right: Contact info, office hours, WhatsApp link, email
- Below: Map or service areas reminder

## Component Library

**Navigation**:
- Sticky header with logo left, menu center/right
- Desktop: horizontal menu with dropdowns for Services
- Mobile: hamburger menu
- CTA button in header: "Free Consultation"

**Buttons**:
- Primary: Blue background, white text, rounded-lg, px-6 py-3
- Secondary: Orange border, orange text, transparent bg
- On images: Blurred background (backdrop-blur-md), white text

**Cards**:
- White background, subtle shadow, rounded-xl
- Hover: slight lift (translate-y effect)
- Padding: p-6 to p-8
- Gap between card content: gap-4

**Forms**:
- Input fields: border, rounded-lg, px-4 py-3
- Labels above inputs
- Focus states with blue border
- Submit button: primary button style

**Icons**:
- Use Heroicons via CDN
- Size: w-6 h-6 for inline, w-12 h-12 for feature cards

**Footer**:
- 4-column grid (mobile: stack)
- Columns: About, Services, Service Areas, Contact
- Newsletter signup form
- Social media links
- Copyright and legal links

## Images

**Hero Image**: 
Panoramic view of South Tamil Nadu real estate - modern apartments or residential development with greenery, professional photography style, warm natural lighting. Image should convey trust and aspiration.

**About Page Image**: 
Professional team photo or handshake/consultation scene showing personal connection and trust.

**Service Page Images** (5 images):
1. Property Management: Well-maintained residential property exterior
2. Real Estate Sales: Happy family in front of new home
3. Rental/Leasing: Modern apartment interior
4. Investment Advisory: Professional consultation scene or graph/growth imagery
5. Valuation: Property inspection or assessment scene

**Service Areas**: 
5 location-specific images showing landmarks or residential areas from each city.

**Testimonials**: 
3 diverse client photos (local and NRI clients) - professional headshots.

## Animations
Minimal and purposeful:
- Fade-in on scroll for sections (subtle)
- Card hover effects (slight lift)
- Button hover states (scale slightly)
- No complex scroll-triggered animations