# 🚀 StockSense AI - Website

The official website for StockSense AI - The AI COO for E-commerce.

## 📋 About

StockSense AI is a vertical AI agent designed to help e-commerce sellers manage inventory intelligently. It eliminates the daily stress of stock management by predicting demand, preventing stockouts, and reducing overstock.

## 🛠 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: JavaScript/JSX
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/aidevelepor9-hue/stocksense-ai.git
cd stocksense-ai

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## 📁 Project Structure

```
stocksense-ai/
├── src/
│   ├── pages/
│   │   ├── _app.jsx          # App wrapper
│   │   └── index.jsx         # Home page
│   ├── components/
│   │   ├── Header.jsx        # Navigation
│   │   ├── Footer.jsx        # Footer
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── Problem.jsx
│   │       ├── Features.jsx
│   │       ├── Roadmap.jsx
│   │       ├── Pricing.jsx
│   │       ├── Signup.jsx
│   │       └── Contact.jsx
│   └── styles/
│       └── globals.css       # Global styles
├── public/                   # Static files
├── tailwind.config.js        # Tailwind config
├── next.config.js            # Next.js config
└── package.json
```

## 📄 Pages & Sections

- **Hero**: Main landing with CTA
- **Problem**: Challenges e-commerce sellers face
- **Features**: 6 core features with icons
- **Roadmap**: 3-phase product roadmap
- **Pricing**: 3 pricing tiers
- **Signup**: Early access email capture
- **Contact**: Contact form

## 🎨 Design Features

- ✅ Modern & Professional design
- ✅ Fully Responsive (mobile-first)
- ✅ Smooth animations & transitions
- ✅ Accessible components
- ✅ SEO optimized
- ✅ Fast performance

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

- **Netlify**: `vercel build` then deploy `out/` folder
- **Docker**: Create a Dockerfile and containerize
- **Self-hosted**: Run `npm run build && npm start`

## 📝 Customization

### Update Content

Edit the section files in `src/components/sections/` to modify content:
- Change pricing
- Update features
- Modify roadmap
- Update contact info

### Update Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: '#1f2937',
  secondary: '#3b82f6',
  accent: '#10b981',
}
```

### Update Email Handling

Replace the form submission logic in:
- `src/components/sections/Signup.jsx`
- `src/components/sections/Contact.jsx`

Connect to your email service (Sendgrid, Mailchimp, etc.)

## 🔗 Links

- **Website**: (Your domain)
- **GitHub**: https://github.com/aidevelepor9-hue/stocksense-ai
- **Email**: hello@stocksense.ai

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

## 📜 License

MIT License - See LICENSE file for details

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ by the StockSense AI team**