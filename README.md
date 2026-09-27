# monis.rent Workspace Builder

An interactive workspace builder for monis.rent, designed for digital nomads in Bali to visualize and rent their dream setup.

## Approach & Tech Choices
- **Next.js**: Provides a robust React framework with SSR and fast page loads.
- **Tailwind CSS**: Rapid UI development with custom utility classes for a beautiful, responsive design.
- **Framer Motion**: Adds fluid micro-interactions and smooth layout transitions to the 3D-like isometric preview area, creating a "wow" factor.
- **ts-pattern**: Used for elegant pattern matching when styling different desk and chair configurations.
- **Lucide React**: Clean, modern icons for accessories to complement the aesthetic.

## What I'd improve with more time
- Integrate Three.js (React Three Fiber) instead of CSS transforms for a true 3D customizable rendering experience.
- Add drag-and-drop functionality for placing accessories exactly where the user wants them on the desk.
- Implement a global state manager (like Zustand) to handle complex configuration options across multiple steps/pages.
- Add real backend integration for processing rentals via Stripe.

## Live Demo
The application is deployed on Vercel.
