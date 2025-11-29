# Ztake Payments - Design Guidelines

## Design Approach
**Apple-Inspired Liquid Glass Aesthetic** - A premium fintech platform combining Razorpay/Stripe functionality with iPhone's liquid glass visual language. Minimal, fluid, premium, and immersive throughout.

## Core Visual Language

### Liquid Glass UI System
- **Frosted Glass Cards**: All content cards use soft frosted-glass effect with backdrop blur
- **Depth & Layering**: Create visual hierarchy through transparency and layered translucent panels floating over softly blurred gradients
- **Glow Effects**: Gentle white glow edges on cards, subtle reflection highlights on interactive elements
- **Floating Elements**: Components appear as floating translucent glass panes with elevated depth

### Color Palette
**Light Mode**:
- Base: White, silvers, light greys
- Accents: Blue/indigo (#3B82F6 or #2563EB)
- Glass overlays with 70-85% opacity

**Dark Mode**:
- Base: Deep charcoal/black glass backgrounds
- Text: Glowing white with neon indigo highlights
- Enhanced glass effects with deeper blur

### Typography
- **Font Stack**: Apple system fonts (-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial)
- **Hierarchy**: Bold headlines with generous letter spacing, clean body text with optimal line height
- **Sizes**: Large, impactful headings; comfortable reading sizes for body content

### Layout & Spacing
- **Border Radius**: 2xl rounded corners throughout (large, soft curves)
- **Padding**: Generous padding on all components - spacious, breathable layouts
- **Spacing Units**: Consistent use of 4, 8, 16, 24, 32 for vertical rhythm
- **Containers**: Max-width 7xl for full-width sections, 6xl for content, prose for text-heavy areas

### Button Design
- **Primary CTAs**: Pill-shaped buttons with glass background and blur effect when on images
- **Hover States**: Subtle scale (1.02) and glow intensification
- **On Images**: Blurred button backgrounds, no additional hover/active interactions

## Animation Strategy

### Micro-Interactions
- **Springy Animations**: Use spring physics for button presses and card interactions
- **Hover Effects**: Glass morphing effects - subtle brightness/blur changes
- **Transitions**: Smooth 200-300ms opacity and scale transitions

### Scroll Animations
- **Hero Parallax**: Multi-layer parallax effect in hero section
- **Fade Reveals**: Section content fades in smoothly as user scrolls
- **Minimal Motion**: Respect reduced motion preferences, avoid excessive animation

## Page Structure

### Homepage
- **Hero Section**: Full-viewport animated glass hero with tagline "Empowering Modern Businesses to Get Paid — Instantly"
- **Floating Metrics**: Glass cards displaying 10K+ merchants, ₹500Cr+ processed, 99.9% uptime
- **Feature Grid**: 4 primary glass cards (Payment Gateway, Banking, Subscriptions, APIs)
- **Testimonials**: 3-column carousel with frosted testimonial cards including customer photos
- **CTA Section**: Dual CTAs - "Create Account" (primary) + "View Demo" (secondary)

### Navigation
- **Desktop**: Floating nav bar with backdrop blur, glass reflection on scroll
- **Mobile**: iOS-style bottom navigation (Dashboard, Payments, Invoices, Support)
- **Logo Placement**: Left-aligned with navigation menu

### Payment Solutions Pages
- **Interactive Demos**: Glass panels showing payment flow mockups
- **Feature Tabs**: Tabbed interfaces for Card, UPI, Wallet options
- **Code Snippets**: Dark glass terminal-style code blocks
- **Visual Builders**: Drag-and-drop mockups within frosted panels

### Developer Hub
- **API Explorer**: Dark glass terminal aesthetic with syntax highlighting
- **SDK Cards**: Language icons (cURL, Java, Python, PHP, Node) in glass grid
- **Documentation**: Sidebar navigation on frosted panel, clean readable content area

### Pricing
- **3-Tier Cards**: Starter, Growth, Enterprise in glass pricing cards
- **Hover Effects**: Lift and glow on hover with subtle reflections
- **Feature Lists**: Check-marked features in clean lists
- **Enterprise Modal**: Glass modal for custom pricing inquiry

### Dashboard Mockup
- **Showcase Only**: Non-functional design preview
- **Glass Sidebar**: Blur-glass navigation sidebar
- **Charts**: Translucent chart overlays on gradient backgrounds
- **Transaction Feed**: Glass card feed with shimmer loading effects

## Responsive Design

### Breakpoints
- **Mobile**: Single column, bottom navigation, stacked cards
- **Tablet**: 2-column grids where appropriate
- **Desktop**: Multi-column layouts (3-4 columns for features)

### Mobile Optimization
- **iOS-First**: Optimized for iPhone 13-15 dimensions
- **Touch Targets**: Minimum 44x44px for all interactive elements
- **Bottom Nav**: Fixed bottom navigation bar with blur background

## Images

### Hero Image
- **Large Hero Background**: Soft gradient mesh or abstract liquid glass visualization behind hero text
- **Placement**: Full-width hero section occupying 80-90vh

### Product Screenshots
- **Payment Mockups**: Floating device mockups showing checkout interfaces
- **Dashboard Preview**: Glass-framed dashboard screenshot
- **Integration Logos**: Partner/platform logos in glass containers

### Decorative Elements
- **Abstract Shapes**: Subtle gradient orbs and flowing shapes in backgrounds
- **No Stock Photos**: Avoid generic stock imagery; use custom illustrations or high-quality product shots only

## Accessibility
- **Contrast**: Maintain 4.5:1 minimum contrast ratio
- **Reduced Motion**: Provide static alternatives for all animations
- **ARIA Labels**: Proper semantic structure throughout
- **Focus States**: Visible, high-contrast focus indicators

## Component Patterns
- **GlassCard**: Reusable frosted card component for all content blocks
- **PillButton**: Standard pill-shaped CTA button
- **MetricDisplay**: Large number with label in glass container
- **TestimonialCard**: Quote with customer photo and attribution
- **FeatureIcon**: Icon in glass circle with title and description
- **CodeBlock**: Dark terminal-style code display with copy button
