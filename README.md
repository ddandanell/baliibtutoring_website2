# Bali IB Tutoring Website

A modern, SEO-optimized website for IB tutoring services in Bali, built with React, Vite, and React Router.

## 🚀 Features

- **Fast & Modern**: Built with Vite for lightning-fast development and optimized production builds
- **SEO Optimized**: Meta tags and structured data for better search engine visibility
- **Responsive Design**: Mobile-first approach that works on all devices
- **SPA Routing**: Client-side routing with React Router for seamless navigation

## 📦 Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **React Helmet Async** - SEO meta tag management

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🌐 Deployment to Vercel

This project is optimized for deployment on Vercel:

1. **Connect your GitHub repository** to Vercel
2. **Configure build settings** (auto-detected from `vercel.json`):
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Framework Preset: `vite`

3. **Environment Variables**: If you need to add environment variables in the future:
   - Copy `.env.example` to `.env.local`
   - Add your environment variables in the Vercel dashboard

### Automatic Deployment

Once connected, Vercel will automatically deploy:
- **Production**: Every push to the `main` branch
- **Preview**: Every pull request

## 📁 Project Structure

```
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # Reusable React components
│   │   ├── layout/      # Layout components (Header, Footer)
│   │   └── ui/          # UI components (Hero, SEO, etc.)
│   ├── pages/           # Page components
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── dist/                # Production build output
├── .npmrc              # npm configuration (peer deps)
├── vercel.json         # Vercel configuration
└── vite.config.js      # Vite configuration
```

## 🔧 Configuration Files

- **vercel.json**: SPA routing configuration for Vercel
- **vite.config.js**: Production optimization settings
- **.npmrc**: Handles React 19 peer dependency compatibility
- **.gitignore**: Excludes node_modules, dist, and env files

## 📝 Development Guidelines

- **Linting**: Run `npm run lint` before committing
- **Build Check**: Run `npm run build` to verify production build
- **Code Style**: Follow existing patterns in the codebase

## 🔐 Environment Variables

See `.env.example` for available environment variable options. Currently, the site doesn't require any environment variables to run.

## 📄 License

Private - All rights reserved

## 🤝 Support

For questions or support, contact: hello@baliibtutoring.com
