
# Apartments Sweet Dreams

A modern, responsive web application for Apartments Sweet Dreams in Osijek, Croatia. Built with React, Vite, and Tailwind CSS, featuring optimized images, lazy-loaded sections, and an intuitive contact form.

## ✨ Features

- **Responsive Design** – Mobile-first layout with adaptive navigation
- **Hero Section** – Dynamic hero with responsive title placement
- **Apartment Showcases** – Interactive image galleries with smooth transitions
- **Contact Form** – EmailJS integration with validation and success/error states
- **Optimized Performance** – WebP images, lazy loading, and efficient bundling
- **Smooth Interactions** – Lightweight CSS transitions
- **SEO Ready** – Meta tags, structured data, and semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-app
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Fill in your EmailJS credentials in `.env`:
```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

5. Start development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |

## 🏗️ Tech Stack

- **React 18** – UI library
- **Vite 6** – Build tool and dev server
- **Tailwind CSS 4** – Utility-first styling
- **CSS Transitions** – Lightweight interactions
- **EmailJS** – Contact form backend
- **TypeScript** – Type safety
- **Lucide React** – Icon library

## 📁 Project Structure

```
my-app/
├── src/
│   ├── assets/images-optimized/ # Optimized WebP images
│   ├── components/        # Reusable React components
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Main App component
│   └── styles/           # Global CSS and theme
├── public/               # Static assets (robots.txt, sitemap, etc.)
├── .env.example          # Environment template
└── vite.config.ts        # Vite configuration
```

## 🌐 Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist/` folder to your hosting service (Vercel, Netlify, etc.)

3. Set environment variables in your hosting dashboard:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`

## 📝 Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_EMAILJS_PUBLIC_KEY` | Public key from EmailJS dashboard |
| `VITE_EMAILJS_SERVICE_ID` | Email service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | Email template ID |

## 🖼️ Image Optimization

All apartment and hero images are converted to WebP format for optimal performance:
- Hero image: ~78 KB
- Gallery images: ~5–74 KB each (plus thumbnails)
- Contact background: ~105 KB

Original PNG/JPG sources are not needed at runtime.

## 🔗 Links

- **Instagram**: [@sweet_dreams_osijek](https://www.instagram.com/sweet_dreams_osijek/)
- **Email**: apartmani.sdos@gmail.com
- **Website**: [sweetdreamsosijek.eu](https://sweetdreamsosijek.eu/)

## 📄 Credits

Built by **frontvisionx** for Apartments Sweet Dreams.

## License

Private project for Apartments Sweet Dreams.
  