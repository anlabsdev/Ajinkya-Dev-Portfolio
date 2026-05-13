# 3D Portfolio - Requirements & Dependencies

## Project Overview

A modern 3D developer portfolio built with React, Three.js, and Vite featuring interactive 3D models, animations, and a responsive design.

## System Requirements

### Node.js & Package Manager

- **Node.js**: v16.0.0 or higher (Currently using v25.2.1 ✓)
- **npm**: v7.0.0 or higher

## Core Dependencies

### React Ecosystem

- **react**: ^18.2.0 - Core React library
- **react-dom**: ^18.2.0 - React DOM rendering
- **react-router-dom**: ^6.17.0 - Client-side routing

### 3D Graphics & Animation

- **three**: ^0.157.0 - 3D graphics library
- **@react-three/fiber**: ^8.18.0 - React renderer for Three.js
- **@react-three/drei**: ^9.122.0 - Useful helpers for react-three-fiber
- **@react-spring/three**: ^9.7.3 - Spring physics-based animations for 3D

### UI & Animation

- **framer-motion**: ^12.17.0 - Production-ready motion library
- **lottie-react**: ^2.4.1 - Lottie animation player
- **react-vertical-timeline-component**: ^3.6.0 - Vertical timeline component
- **styled-components**: ^6.1.18 - CSS-in-JS styling
- **react-icons**: ^5.5.0 - Popular icon library

### Utilities

- **@emailjs/browser**: ^3.11.0 - Email service integration
- **react-error-boundary**: ^6.0.0 - Error boundary component

## Development Dependencies

### Build Tools

- **vite**: ^4.4.5 - Next-generation frontend build tool
- **@vitejs/plugin-react**: ^4.0.3 - Official Vite plugin for React

### Styling

- **tailwindcss**: ^3.3.3 - Utility-first CSS framework
- **autoprefixer**: ^10.4.16 - PostCSS plugin for vendor prefixes
- **postcss**: ^8.4.31 - CSS transformation tool

### Code Quality

- **eslint**: ^8.45.0 - JavaScript linter
- **eslint-plugin-react**: ^7.32.2 - React-specific linting rules
- **eslint-plugin-react-hooks**: ^4.6.0 - React Hooks linting rules
- **eslint-plugin-react-refresh**: ^0.4.3 - React Refresh linting rules

### TypeScript Support

- **@types/react**: ^18.2.15 - TypeScript definitions for React
- **@types/react-dom**: ^18.2.7 - TypeScript definitions for React DOM

## Environment Variables

The project requires a `.env` file with the following variables:

```env
# EmailJS Configuration (for contact form)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Project Structure

```
3d-portfolio/
├── .agent/
│   └── workflows/          # Development workflows
├── dist/                   # Production build output
├── public/                 # Static assets (3D models, images)
├── src/
│   ├── assets/            # Images, icons, media files
│   ├── components/        # React components
│   ├── constants/         # Configuration constants
│   ├── context/           # React context providers
│   ├── hoc/               # Higher-order components
│   ├── hooks/             # Custom React hooks
│   ├── models/            # 3D model components
│   ├── pages/             # Page components
│   ├── styles/            # Global styles
│   ├── utils/             # Utility functions
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global CSS
├── .env                   # Environment variables (gitignored)
├── .eslintrc.cjs          # ESLint configuration
├── .gitignore             # Git ignore rules
├── index.html             # HTML entry point
├── package.json           # Project dependencies
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vercel.json            # Vercel deployment config
└── vite.config.js         # Vite configuration

```

## Available Scripts

- **`npm run dev`** - Start development server (<http://localhost:5173>)
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint to check code quality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Note**: WebGL support is required for 3D graphics rendering.

## Performance Considerations

1. **3D Models**: Optimize model file sizes (use .glb format)
2. **Textures**: Compress textures to reduce load times
3. **Code Splitting**: Vite handles automatic code splitting
4. **Lazy Loading**: Use React.lazy() for route-based code splitting

## Security Notes

- Environment variables are prefixed with `VITE_` to be exposed to client
- Never commit `.env` file to version control
- API keys should be restricted to specific domains in production

## Deployment

The project is configured for Vercel deployment:

- `vercel.json` contains deployment configuration
- Environment variables must be set in Vercel dashboard
- Automatic deployments on git push (when connected to Vercel)

## Known Issues & Warnings

- npm may show peer dependency warnings (generally safe to ignore)
- Some packages may have moderate/high severity vulnerabilities (run `npm audit fix` if needed)
- Three.js may show deprecation warnings in console (update when stable versions available)

## Future Enhancements

- [ ] Add unit tests (Jest + React Testing Library)
- [ ] Implement CI/CD pipeline
- [ ] Add progressive web app (PWA) support
- [ ] Optimize 3D model loading with suspense
- [ ] Add analytics integration
- [ ] Implement dark/light theme toggle
- [ ] Add more interactive 3D elements

## Support & Resources

- [React Documentation](https://react.dev)
- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
