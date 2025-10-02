# Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring smooth animations, elegant design, and a professional presentation of work and skills.

## 🚀 Live Demo

[View Live Website](https://your-portfolio-url.com) *(Update with your actual deployment URL)*

## ✨ Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and glass-morphism effects
- **Smooth Animations**: Framer Motion powered animations for engaging user experience
- **Responsive Layout**: Fully responsive design that works on all device sizes
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Contact Form**: Built-in contact form for potential clients and collaborators
- **Social Links**: Integration with GitHub, LinkedIn, LeetCode, Facebook, and email
- **Project Showcase**: Featured projects section with live links
- **Performance Optimized**: Built with Next.js for optimal performance and SEO

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives with shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Development**: ESLint, Prettier for code quality

## 📦 Dependencies

### Core Dependencies
- `next`: React framework for production
- `react`: UI library
- `react-dom`: DOM bindings for React
- `typescript`: Type safety and development experience

### UI & Styling
- `tailwindcss`: Utility-first CSS framework
- `@tailwindcss/forms`: Form styling utilities
- `@tailwindcss/typography`: Typography plugin
- `framer-motion`: Animation library
- `lucide-react`: Icon library

### UI Components
- `@radix-ui/react-slot`: Low-level UI primitives
- `shadcn-ui`: Re-usable component library
- `class-variance-authority`: Component variant management
- `clsx`: Conditional className utility
- `tailwind-merge`: Tailwind class merging utility

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Customization

### Personal Information
Update the following in `src/app/page.tsx`:
- Name and title in the hero section
- Bio and description
- Contact information
- Social media links

### Projects
Modify the projects array in the projects section:
```typescript
{
  title: 'Your Project Name',
  description: 'Project description',
  link: 'https://your-project-url.com',
  delay: 0.2, // Animation delay
}
```

### Styling
- Modify colors in `tailwind.config.ts`
- Update global styles in `src/app/globals.css`
- Customize component styles in individual component files

## 📱 Sections

### Hero Section
- Introduction with animated text
- Call-to-action buttons
- Background patterns and gradients

### Projects Section
- Featured project showcase
- Project cards with hover effects
- External links to live projects

### Contact Section
- Contact form with validation
- Professional contact information
- Social media integration

### Footer
- Social links
- Copyright information
- Additional contact methods

## 🌟 Features in Detail

### Animations
- Page load animations with staggered reveals
- Scroll-triggered animations using Intersection Observer
- Hover effects and micro-interactions
- Smooth page transitions

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions
- Optimized for all screen sizes

### Performance
- Next.js optimization features
- Image optimization
- Code splitting
- Static generation where possible

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: Connect GitHub repo and deploy
- **Railway**: Deploy with railway.app
- **Custom Server**: Build with `npm run build` and serve with `npm run start`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Abrar Rahman**
- Email: [abrarrahman80@gmail.com](mailto:abrarrahman80@gmail.com)
- LinkedIn: [Abrar Rahman](https://www.linkedin.com/in/abrar-rahman-7a97b825b/)
- GitHub: [EbrerRamen](https://github.com/EbrerRamen)
- LeetCode: [abrar_rayman](https://leetcode.com/u/abrar_rayman/)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Lucide](https://lucide.dev/) for the icon library

---

⭐ **Star this repository if you found it helpful!**
