# Matt Hicks Portfolio - DigitalFish

A stunning, modern portfolio website showcasing **Matt Hicks** and **DigitalFish** with immersive animations and cutting-edge design. Built with Next.js 15, TypeScript, and crafted from Figma designs using MCP integration.

## 🎯 Project Vision

This portfolio represents a unique dual-brand approach where Matt Hicks showcases both his freelance design business (DigitalFish) and personal creative work. The site is designed to:

- Attract high-quality clients for design services
- Showcase creative process and project case studies  
- Demonstrate expertise in Figma, UI/UX, and modern web technologies
- Provide seamless contact and collaboration opportunities

## 🚀 Live Site

- **Production**: https://matt-hicks-portfolio.vercel.app/ ✨
- **GitHub**: https://github.com/MattGHicks/matt-hicks-portfolio
- **Development**: http://localhost:3000

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.0 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom glassmorphism effects
- **Animations**: Framer Motion with scroll-triggered interactions
- **Icons**: Lucide React icon library
- **Fonts**: Google Fonts (Anybody variable, PT Sans)
- **Development**: ESLint, Prettier, TypeScript strict mode
- **Design Integration**: MCP Figma server for design-to-code workflows

## 🎨 Brand Identity

### DigitalFish (Business Brand)
- **Colors**: Cyan (#00D4FF) + Blue (#0066CC)
- **Focus**: Professional design services, client work
- **Services**: Brand identity, UI/UX, websites, Figma services

### Matt Hicks (Personal Brand)  
- **Colors**: Orange (#FF6B35) + Navy (#2C3E50)
- **Focus**: Personal projects, creative exploration, thought leadership
- **Skills**: Figma mastery, design systems, creative direction

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with Google Fonts
│   ├── page.tsx        # Main landing page
│   └── globals.css     # Global styles and Tailwind
├── components/
│   ├── layout/
│   │   └── figma-navigation.tsx  # Glass nav with Matt Hicks branding
│   └── sections/
│       ├── animated-hero.tsx     # Hero with word animations
│       ├── about-section.tsx     # Dual-brand storytelling
│       ├── features-section.tsx  # Services with icons
│       ├── portfolio-section.tsx # Project showcase
│       ├── unique-approach-section.tsx # Timeline animations
│       ├── testimonials-section.tsx    # 3-item carousel
│       ├── contact-section.tsx   # Form with validation
│       └── footer.tsx           # Animated footer
└── tailwind.config.ts   # Tailwind configuration
```

## 🎯 Current Features

✅ **Complete Landing Page**
- **Glass Navigation**: Transparent navigation with Matt Hicks branding and glassmorphism effects
- **Animated Hero Section**: Stunning word-by-word animations, floating images, interactive buttons
- **About Section**: Dual-brand storytelling with hover effects and scroll animations
- **Features Section**: Four key services with proper icons and animated interactions
- **Portfolio Section**: Project showcase with real examples and hover effects
- **Unique Approach**: Timeline section with staggered animations and gradient icons
- **Testimonials Carousel**: Functional 3-item carousel with client reviews and ratings
- **Contact Form**: Complete form with validation, animations, and glass effects
- **Animated Footer**: "Crazy animation" for Matt Hicks text with letter-by-letter effects
- **Responsive Design**: Mobile-first approach with full responsive breakpoints
- **Performance Optimized**: No hydration mismatches, smooth 60fps animations

## 🔄 Development Workflow

### Figma-to-Code Integration
This project is optimized for AI-powered design-to-code workflows:

1. **Design in Figma** using Relume component patterns
2. **MCP Figma Integration** (Primary workflow):
   - Direct Figma access via Claude Code MCP server
   - Real-time design analysis and component extraction
   - Seamless design-to-React component conversion
3. **Alternative AI tools**:
   - Builder.io Visual Copilot
   - Figma Make
   - Anima
4. **Refine and customize** generated code
5. **Deploy** with modern CI/CD

### MCP Figma Setup

**Prerequisites:**
- Figma MCP server running locally
- Claude Code configured with MCP integration

**This Project's MCP Workflow:**
1. **Design Phase**: Complete landing page designed in Figma
2. **Section-by-Section Build**: Due to MCP response size limits, built incrementally:
   - Navigation with glass effects and Matt Hicks branding
   - Hero section with stunning word-by-word animations
   - About, Features, Portfolio, Approach sections with scroll animations
   - Testimonials carousel with 3-item layout
   - Contact form with validation and glass styling
   - Footer with "crazy animation" for Matt Hicks text
3. **Content Enhancement**: Replaced placeholder content with relevant Matt Hicks/DigitalFish content
4. **Icon Integration**: Used Lucide React icons instead of placeholder images
5. **Performance Fixes**: Eliminated hydration mismatches by removing Math.random() usage

**Key MCP Commands Used:**
- `mcp__figma-dev-mode-mcp-server__get_code` - Extract component code from Figma
- `mcp__figma-dev-mode-mcp-server__get_image` - Generate section images for reference
- `mcp__figma-dev-mode-mcp-server__get_variable_defs` - Extract design tokens

### Troubleshooting MCP Connection

**Common Issues:**
- **403 Access Error**: MCP server endpoint incorrect
  - Solution: Update to `http://127.0.0.1:3845/sse`
  - Restart Claude Code after configuration change

- **No MCP Tools Available**: Server not connected
  - Verify MCP server is running on port 3845
  - Check Claude Code MCP settings
  - Look for `mcp__figma_*` tools in available functions

- **Design Access Failed**: File permissions
  - Ensure Figma file has appropriate sharing settings
  - Verify MCP server has Figma API access

### Development Commands

```bash
# Start development
npm run dev

# Build production
npm run build

# Format code  
npx prettier --write .

# Lint code
npm run lint
```

## 🎨 Design Philosophy

**Modern Minimalism**: Clean layouts with purposeful animations
**Dual-Brand Harmony**: Seamless integration of business and personal identity
**Performance First**: Optimized for speed and accessibility
**Mobile Excellence**: Mobile-first responsive design

## 📞 Contact & Collaboration

This portfolio showcases Matt's availability for:
- UI/UX design projects
- Brand identity development  
- Figma design systems
- Creative consultation
- Web design and development

## 📈 Roadmap

### Phase 1: Complete Landing Page ✅ **COMPLETE!**
- [x] **MCP Figma Integration**: Direct design-to-code from Figma files
- [x] **Glass Navigation**: Transparent nav with Matt Hicks branding
- [x] **Animated Hero**: Word-by-word animations, floating elements
- [x] **About Section**: Dual-brand storytelling with animations
- [x] **Features Section**: Services showcase with proper icons
- [x] **Portfolio Section**: Project examples with hover effects
- [x] **Unique Approach**: Timeline with staggered entrance animations
- [x] **Testimonials Carousel**: 3-item functional carousel with reviews
- [x] **Contact Form**: Complete form with validation and glass styling
- [x] **Animated Footer**: "Crazy animation" for Matt Hicks text
- [x] **Hydration Fix**: All random elements replaced with deterministic arrays
- [x] **Production Deployment**: Live on Vercel with custom domain
- [x] **Performance Optimization**: 60fps animations, no layout shifts

### Phase 2: Enhanced Functionality
- [ ] Form submission handling and email integration
- [ ] Case study detail pages for portfolio projects
- [ ] Blog section for design insights and tutorials
- [ ] Client testimonial management system

### Phase 3: Advanced Features
- [ ] CMS integration for content updates
- [ ] Advanced animations and micro-interactions
- [ ] Performance monitoring and analytics
- [ ] A/B testing for conversion optimization

### Phase 4: Business Growth
- [ ] SEO optimization and schema markup
- [ ] Lead generation and CRM integration
- [ ] Social media integration
- [ ] Client portal for project management

---

**Built with passion by Matt Hicks | DigitalFish** 🐠
