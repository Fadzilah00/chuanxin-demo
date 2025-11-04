# Chuanxin Website

A modern, responsive website for Chuanxin - China's QQLink, built with Nuxt.js and Vue 3.

## Features

- **Modern Design**: Clean, responsive design with Tailwind CSS
- **Vue 3**: Built with the latest Vue.js framework
- **Nuxt.js**: Full-stack Vue framework with automatic routing
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Meta tags and structured data for search engines

## Pages

- **Home**: Hero section with logo, tagline, and feature highlights
- **About Us**: Company information, mission, and values
- **Contact**: Contact form and company information

## Components

- **Button**: Reusable button component with variants
- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Company links and social media

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Generate Static Site

```bash
npm run generate
```

## Project Structure

```
├── assets/
│   └── css/
│       └── main.css          # Global styles and Tailwind imports
├── components/
│   ├── Button.vue            # Reusable button component
│   ├── Footer.vue            # Footer component
│   └── Navbar.vue            # Navigation component
├── layouts/
│   └── default.vue           # Default layout
├── pages/
│   ├── index.vue             # Home page
│   ├── about.vue             # About page
│   └── contact.vue           # Contact page
├── nuxt.config.js            # Nuxt configuration
├── package.json              # Dependencies and scripts
└── tailwind.config.js        # Tailwind CSS configuration
```

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the design by:

1. Modifying the `tailwind.config.js` file
2. Adding custom styles in `assets/css/main.css`
3. Using Tailwind utility classes in components

### Content

To update the content:

1. **Logo and Branding**: Update the "Chuanxin" text in components and pages
2. **Company Information**: Modify the About page content
3. **Contact Information**: Update contact details in the Contact page
4. **App URL**: Change the app URL in the Button component's `openApp` function

### Adding New Pages

1. Create a new `.vue` file in the `pages/` directory
2. The routing will be automatic based on the file name
3. Use the default layout or create a custom layout

## Deployment

This project can be deployed to various platforms:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Deploy from Git or drag and drop
- **AWS Amplify**: Connect repository and deploy
- **Traditional hosting**: Build the project and upload the `dist/` folder

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.
