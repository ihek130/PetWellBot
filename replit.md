# Pet Symptom Checker - AI-Powered Pet Health Assistant

## Overview

This is a full-stack web application that provides a chatbot-based pet symptom checker for multiple pet types (dogs, cats, birds, rabbits, hamsters, and fish). The application uses AI to help pet owners identify potential health issues and provides educational guidance with appropriate disclaimers. Built with a focus on SEO optimization and user trust through careful UI/UX design choices including color psychology and empathetic messaging.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom color scheme optimized for trust and medical contexts
- **State Management**: TanStack Query for server state management and React hooks for local state
- **Routing**: Wouter for lightweight client-side routing
- **Color Psychology Implementation**: 
  - Soft cream/white background for trust
  - Light blue/green chatbot interface for calm/medical authority
  - Orange/yellow accents for warmth and optimism

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for chat, feedback, and email subscription
- **Request Validation**: Zod schemas for type-safe API validation
- **Development Setup**: Vite middleware integration for hot reloading in development

### Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (configured via DATABASE_URL environment variable)
- **Session Storage**: In-memory storage implementation with interface for future database integration
- **Migration Management**: Drizzle Kit for database schema migrations

### Authentication and Authorization
- **Current Implementation**: No authentication system implemented
- **Session Management**: Basic in-memory user storage interface exists but not actively used
- **Future Considerations**: Architecture supports adding authentication layers

### AI Integration
- **AI Provider**: Hugging Face Inference API for free AI model access
- **Content Filtering**: Built-in logic to restrict responses to pet-related queries only
- **Response Enhancement**: Automatic disclaimer appending to all AI responses
- **Fallback Handling**: Graceful error handling with user-friendly messages

### SEO Optimization
- **Meta Tags**: Comprehensive Open Graph and Twitter Card implementations
- **Structured Data**: Schema.org markup for web application
- **Keyword Strategy**: Natural integration of long-tail pet health keywords
- **Content Architecture**: FAQ section optimized for search intent
- **Technical SEO**: Proper canonical URLs, robots.txt directives

### External Dependencies
- **AI Models**: Hugging Face free inference API
- **Email Collection**: API endpoint for newsletter subscriptions
- **Feedback System**: User rating collection for AI response quality
- **Image Assets**: Unsplash integration for pet imagery
- **Font Loading**: Google Fonts (Inter) with preconnect optimization

## External Dependencies

### Third-Party Services
- **Hugging Face API**: Free AI inference for chatbot responses
- **Google Fonts**: Inter font family for typography
- **Unsplash**: Pet images for visual appeal and trust building

### Development Tools
- **Replit Integration**: Development banner and cartographer plugin for Replit environment
- **Vite Plugins**: Runtime error overlay and development tooling

### UI Component Libraries
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Touch-friendly carousel implementation
- **React Hook Form**: Form validation and management

### Utility Libraries
- **TanStack Query**: Async state management and caching
- **Date-fns**: Date manipulation and formatting
- **Class Variance Authority**: Type-safe CSS class composition
- **Tailwind Merge**: Intelligent Tailwind class merging