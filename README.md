# Samyuktha Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS v4. Designed for optimal performance and ready for Framer Motion animations.

## 🚀 Features

- **Next.js 15** with App Router for optimal performance
- **TypeScript** for type safety and better development experience
- **Tailwind CSS v4** for modern styling with custom design system
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Static Export** ready for GitHub Pages deployment
- **Animation Ready** prepared for Framer Motion integration
- **SEO Optimized** with proper meta tags and structured data
- **Performance Focused** with image optimization and lazy loading
- **Accessibility** compliant with WCAG guidelines

## 🛠️ Tech Stack

- **Framework:** Next.js 15.2.0
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Deployment:** GitHub Pages
- **Animation:** Framer Motion (ready to install)
- **Linting:** ESLint with Prettier
- **Package Manager:** npm

## 📁 Project Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── globals.css     # Global styles and Tailwind config
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable UI components
├── lib/               # Utilities and configurations
│   ├── config.ts      # Site configuration
│   └── utils.ts       # Utility functions
├── types/             # TypeScript type definitions
├── hooks/             # Custom React hooks
└── styles/            # Additional stylesheets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ALIENvsROBOT/samyu_website.git
cd samyu_website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

### Export for Static Deployment

```bash
npm run export
```

## 📱 Multi-Platform Compatibility

The website is optimized for:

- **Mobile phones** (320px - 767px)
- **Tablets** (768px - 1023px)
- **Desktop** (1024px+)

## 🎨 Customization

### Site Configuration

Edit `src/lib/config.ts` to customize:

- Site name and description
- Navigation menu
- Contact information
- Social media links

### Styling

The design system is configured in `src/app/globals.css` with:

- Custom CSS variables for colors
- Responsive breakpoints
- Animation keyframes
- Typography settings

### Adding Framer Motion

1. Install Framer Motion:

```bash
npm install framer-motion
```

2. Import and use animations:

```tsx
import { motion } from 'framer-motion';

export default function Component() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Content
    </motion.div>
  );
}
```

## 🚀 Deployment

### GitHub Pages

The project is configured for automatic deployment to GitHub Pages:

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select "GitHub Actions" as the source
4. The workflow will automatically build and deploy your site

### Custom Domain

To use a custom domain:

1. Add your domain to the repository settings
2. Update the `CNAME` file in the `public` folder
3. Update the `url` in `src/lib/config.ts`

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run export` - Export static files
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking

## 🎯 Performance Optimization

- Static generation for optimal loading speeds
- Image optimization with Next.js Image component
- CSS optimization with Tailwind CSS
- Lazy loading for images and components
- Minimal JavaScript bundle size

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions or support, please contact hello@thesamyuktha.com

---

Built with ❤️ using Next.js and Tailwind CSS
