# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]
- Tweak colors and spacing based on feedback.
- Removed "Schedule Your Personal Tour Today" button and heading from About section.
- Moved "Ready to Learn More" section to be positioned between core values and footer, reduced spacing between sections.
- Moved "Experience the Difference" section to be positioned after Hope Adebayo card, refined spacing for optimal visual balance.
- Switched order of "Not sure which option is right for you?" and "Waiver Services Accepted" sections on Services page.
- Improved contact information description and card spacing on Contact page.
- Changed "Best Email" to "Email" in contact form for clarity.
- Fixed VR services button to navigate to top of Contact page.
- Updated "Learn More" buttons on Services page to navigate to Contact page with service pre-selection.
- Performance optimization: removed unused dependencies (@tanstack/react-query, resend, zod) reducing bundle size.
- Code cleanup: removed redundant imports and simplified App.tsx structure.
- UI improvement: updated phone number description from "Available 24/7" to "Main office line" for clarity.
- Enhanced contact section: added emergency contact, business hours, and location information to reduce white space and improve user experience.
- Analytics implementation: added Google Analytics 4 with custom event tracking for form submissions, phone clicks, and email interactions.
- Live deployment: activated Google Analytics 4 with measurement ID G-N6F3BZ71J4 on production site.

## [2025-09-04] UI polish and services CTAs
- Smoothened button and card hover interactions (scale-based, no layout shift).
- Removed "Learn More" buttons from Homemaker Services and 24-Hour Assisted Living cards.
- Restored "Contact Us" button on each services card as primary CTA.
- Updated Services intro copy to remove "Learn more" phrasing.
- Removed global slash command feature and related keybindings.
- Fixed blank Services page caused by missing imports after CTA changes.
- Removed hero "Learn More" secondary CTA for clarity.

## [2025-09-02] Services cleanup and accessibility
- Rename `lovable-uploads` to `gohen-uploads` and update asset paths.
- Switch hero to new house photo with fallback.
- Remove second phone number; keep 651-210-5364.
- Center Hope Adebayo card and tidy Services grid.
- Improve header readability and global link focus styles.
- Remove duplicate headings/sections on Services page.
- Ensure service buttons navigate to Contact; Meet Our Team scrolls to top.
- Update structured data and README.
- Deploy to Netlify production.

## [2025-09-03] UI tweaks and waiver banner
- Remove hero heart badge.
- Delete 24/7 Care Excellence section from Staff page and incorporate copy into header paragraph.
- Add Services waiver acceptance banner (CADI, EW, BI, Private Pay) with Contact CTA.
