# Sethu Properties - Property Management Platform

## Overview

Sethu Properties is a comprehensive property management and real estate services platform targeting property owners in South Tamil Nadu, with a special focus on NRI (Non-Resident Indian) clients. The application provides transparent, tech-enabled property management, real estate sales, rental solutions, and investment advisory services across key cities including Madurai, Karaikudi, Ramanathapuram, Paramakudi, and Rajapalayam.

The platform emphasizes trust, transparency, and modern technology to bridge the gap between property owners (especially those living abroad) and local real estate management needs.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Routing**
- React 18+ with TypeScript for type-safe component development
- Wouter for lightweight client-side routing (React Router alternative)
- Single Page Application (SPA) architecture with multiple route-based pages

**UI Component System**
- Radix UI primitives for accessible, unstyled components
- shadcn/ui component library (New York style variant) for consistent design
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for component variant management

**Design System**
- Brand colors: Primary Blue (#2B5273), Accent Orange (#FF6633)
- Typography: Inter font family throughout
- Comprehensive spacing system using Tailwind's 4-based scale
- Responsive layouts with mobile-first approach
- Custom CSS variables for theming (light mode defined, dark mode ready)

**State Management**
- TanStack Query (React Query v5) for server state management
- React Hook Form with Zod validation for form handling
- Context API for global UI state (toasts, tooltips)

**Key Pages**
- Home: Hero section with value propositions and services overview
- About: Company values, mission, and team information
- Services: Detailed service offerings (Property Management, Sales, Rentals, Investment)
- How It Works: Step-by-step process explanation
- Service Areas: Geographic coverage details
- Contact: Inquiry form with validation

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for type-safe server development
- ESM (ES Modules) throughout the codebase
- Custom middleware for request logging and JSON parsing

**API Design**
- RESTful API endpoints under `/api` prefix
- Single contact form endpoint: `POST /api/contact`
- JSON request/response format
- Comprehensive error handling with Zod validation

**Data Validation**
- Zod schemas for runtime type validation
- Drizzle-Zod integration for type-safe database schemas
- Input sanitization and validation at API boundaries

**Development Setup**
- Vite for development server with HMR (Hot Module Replacement)
- Custom Vite plugins for Replit integration (cartographer, dev banner, runtime error overlay)
- TypeScript compilation checking without emit
- esbuild for production server bundling

**Storage Layer**
- In-memory storage implementation (MemStorage class)
- Interface-based storage abstraction (IStorage) for future database migration
- Contact inquiries stored with UUID identifiers

### Data Storage Solutions

**Current Implementation**
- In-memory Map-based storage for contact inquiries
- No persistent database currently connected

**Database Schema (Prepared)**
- PostgreSQL-compatible schema defined using Drizzle ORM
- `contact_inquiries` table with fields:
  - id (UUID, primary key)
  - name, email, phone (text fields)
  - propertyType (optional text)
  - serviceInterest (required text)
  - message (required text)
  - createdAt (timestamp with default)

**Database Configuration**
- Drizzle Kit configured for PostgreSQL
- Neon Database serverless driver included
- Migration files directory: `./migrations`
- Schema location: `./shared/schema.ts`
- Connection via `DATABASE_URL` environment variable (not currently set)

**Migration Path**
The application is structured to easily migrate from in-memory storage to PostgreSQL by:
1. Provisioning a database and setting DATABASE_URL
2. Running `npm run db:push` to sync schema
3. Implementing database-backed storage class
4. Swapping storage implementation in server code

### External Dependencies

**UI & Component Libraries**
- @radix-ui/* (20+ component primitives for accessible UI)
- shadcn/ui components
- Lucide React for icons
- Embla Carousel for image carousels
- cmdk for command palette components

**Form & Validation**
- React Hook Form for form state management
- @hookform/resolvers for Zod integration
- Zod for schema validation

**Database & ORM**
- Drizzle ORM for type-safe database queries
- @neondatabase/serverless for PostgreSQL connections
- drizzle-zod for schema-to-Zod conversion

**Development Tools**
- Vite build tool with React plugin
- tsx for TypeScript execution in development
- @replit/* plugins for Replit IDE integration
- Tailwind CSS with PostCSS and Autoprefixer

**Date & Time**
- date-fns for date manipulation and formatting

**HTTP & Routing**
- Express.js for server framework
- wouter for client-side routing

**Session Management**
- connect-pg-simple for PostgreSQL session storage (not currently active)