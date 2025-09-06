# Working Plan

This document tracks current goals, decisions, and next actions for the site.

## Goals
- Present two core services clearly: 24-Hour Assisted Living (144G) and Homemaker Services (245D).
- Keep pages readable and accessible.
- Simplify navigation and calls-to-action.

## Decisions
- Inquiry form opens the user’s mail client (mailto) instead of a serverless function.
- Consolidate services content to avoid duplicated headings/sections.
- Use `gohen-uploads` for public assets.

## Active Tasks
- Improve hero/header readability over photos.
- Ensure service “Learn More” and “Consultation” buttons navigate to Contact.
- Ensure “Meet Our Team” scrolls to top of Staff page.

## Done
- Removed duplicate services content and simplified headings.
- Updated phone numbers (kept 651-210-5364 only).
- Centered Hope Adebayo card; cleaned services grid.
- Deployed latest version to production.
- Removed "Schedule Your Personal Tour Today" button and heading from About section.
- Moved "Ready to Learn More" section to be positioned between core values and footer, reduced spacing between sections.
- Moved "Experience the Difference" section to be positioned after Hope Adebayo card, refined spacing for optimal visual balance.
- Switched order of "Not sure which option is right for you?" and "Waiver Services Accepted" sections on Services page.
- Fixed contact information description and improved card spacing on Contact page.
- Changed "Best Email" to "Email" in contact form.
- Fixed VR services button to navigate to top of Contact page.
- Fixed "Learn More" buttons on Services page to navigate to Contact page with service selection.
- Optimized project efficiency: removed unused @tanstack/react-query, resend, and zod dependencies.
- Cleaned up unused code: removed redundant Calendar import, simplified App.tsx by removing unnecessary QueryClient wrapper.
- Improved contact form labels: changed phone description from "Available 24/7" to "Main office line".
- Enhanced "Get in Touch" section: added emergency line, business hours, and location to reduce white space and provide comprehensive contact options.
- Added Google Analytics 4 tracking: implemented comprehensive analytics for visitor tracking, session duration, and user interactions (form submissions, phone/email clicks).
- Activated Google Analytics 4 with measurement ID G-N6F3BZ71J4 and deployed to live site.
- Fixed toast notification delay to 5 seconds for better user experience.
- Removed redundant Index.tsx page from the `pages` directory.

## Next Up
- Gather real copy for each service detail page (optional follow-up).
- Add analytics and basic event tracking for CTAs (optional).

## Updates (latest)
- Removed decorative heart badge from hero for cleaner UI.
- Removed 24/7 Care Excellence section from Staff; merged message into Staff page intro.
- Added Waiver Services banner on Services page (CADI, EW, BI, Private Pay) with CTA to Contact.
