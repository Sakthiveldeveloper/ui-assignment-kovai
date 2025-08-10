# AI Chat Pro - AI-Powered Customer Service Platform

A modern, responsive website for an AI company specializing in intelligent customer service solutions. Built with React, TypeScript, and Ant Design, featuring a comprehensive responsive design system.

## 🚀 Features

### Core Functionality
- **Landing Page**: Professional company introduction with hero section, features, pricing, and contact information
- **Dashboard**: User statistics and service overview with interactive components
- **AI Chat Interface**: Simulated AI chat service with real-time messaging
- **Responsive Design**: Fully responsive across all device sizes (mobile, tablet, desktop)

### Responsive Design System
- **Mobile-First Approach**: Optimized for mobile devices with progressive enhancement
- **Breakpoint System**: Smart breakpoints at 480px, 576px, 768px, 992px, 1200px, and 1600px
- **Dynamic Styling**: Automatic adaptation of spacing, typography, and component sizes
- **Custom Hooks**: `useResponsive` hook for easy responsive state management
- **Utility Functions**: Centralized responsive utilities for consistent design

### UI Components
- **Modern Design**: Clean, professional interface with gradient backgrounds
- **Interactive Elements**: Hoverable cards, animated buttons, and smooth transitions
- **Typography Scale**: Responsive font sizes that adapt to screen dimensions
- **Grid System**: Flexible layout system using Ant Design's Row/Col components

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **UI Library**: Ant Design (antd)
- **Styling**: CSS-in-JS with responsive utilities
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Package Manager**: npm
- **Development Server**: Vite Dev Server

## 📱 Responsive Breakpoints

| Device | Breakpoint | Description |
|--------|------------|-------------|
| Mobile | ≤ 768px | Small screens, optimized for touch |
| Tablet | 769px - 992px | Medium screens, hybrid interaction |
| Desktop | > 992px | Large screens, full feature set |

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd ui-assessment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Run type checking
npm run type-check
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── hooks/              # Custom React hooks
│   └── useResponsive.ts # Responsive design hook
├── pages/              # Page components
│   ├── Landing.tsx     # Landing page
│   ├── Dashboard.tsx   # Dashboard page
│   └── Chat.tsx        # Chat interface
├── utils/              # Utility functions
│   └── responsive.ts   # Responsive design utilities
├── App.tsx             # Main app component
└── main.tsx            # Application entry point
```

## 🎨 Responsive Design Implementation

### Custom Hooks
- **`useResponsive()`**: Main hook providing responsive state
- **`useIsMobile()`**: Boolean for mobile detection
- **`useIsTablet()`**: Boolean for tablet detection
- **`useIsDesktop()`**: Boolean for desktop detection

### Utility Functions
- **`getResponsiveValue(mobile, tablet, desktop)`**: Get responsive values
- **`getResponsiveSpacing()`**: Responsive spacing values
- **`getResponsiveFontSize()`**: Responsive typography
- **`getResponsivePadding()`**: Responsive padding
- **`getResponsiveMargin()`**: Responsive margins

### Usage Example
```typescript
import { useResponsive, getResponsiveValue } from '../hooks/useResponsive';

const MyComponent = () => {
  const { isMobile } = useResponsive();
  
  const padding = getResponsiveValue(16, 24, 32);
  const fontSize = getResponsiveValue('14px', '16px', '18px');
  
  return (
    <div style={{ padding, fontSize }}>
      Responsive content
    </div>
  );
};
```

## 🌐 Pages Overview

### Landing Page (`/`)
- Hero section with call-to-action buttons
- Company information and mission
- Feature highlights with icons
- Pricing plans (Free, Pro, Enterprise)
- Contact information and footer

### Dashboard (`/dashboard`)
- User statistics and metrics
- Service overview cards
- Quick action buttons
- Demo service preview

### Chat Interface (`/chat`)
- Simulated AI chat experience
- Message history display
- Typing indicators
- User input with send functionality

## 🎯 Key Features

- **24/7 AI Support**: Round-the-clock customer service simulation
- **Multilingual Support**: AI that understands multiple languages
- **API Integration**: Seamless integration with existing systems
- **Custom Branding**: White-label solutions for enterprise clients
- **Analytics Dashboard**: Comprehensive user and service metrics

## 🔧 Customization

### Adding New Responsive Values
```typescript
// In src/utils/responsive.ts
export const customResponsiveValues = {
  mobile: 16,
  tablet: 24,
  desktop: 32
};
```

### Creating New Responsive Components
```typescript
import { useResponsive, getResponsiveValue } from '../hooks/useResponsive';

const CustomComponent = () => {
  const { isMobile } = useResponsive();
  const size = getResponsiveValue(32, 48, 64);
  
  return <div style={{ width: size, height: size }} />;
};
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel/Netlify
1. Connect your repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Email**: hello@aichatpro.com
- **Support**: support@aichatpro.com
- **Phone**: +1 (555) 123-4567

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- UI components from [Ant Design](https://ant.design/)
- Icons from [Ant Design Icons](https://ant.design/icons/)
- Build tool powered by [Vite](https://vitejs.dev/)

---

**AI Chat Pro** - Transforming customer service with intelligent AI solutions that work 24/7, speak multiple languages, and integrate seamlessly with your business.
