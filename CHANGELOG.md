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
- Enhanced contact section: added emergency contact, business hours, and location information to reduce white space and provide comprehensive contact options.
- Analytics implementation: added Google Analytics 4 with custom event tracking for form submissions, phone clicks, and email interactions.
- Live deployment: activated Google Analytics 4 with measurement ID G-N6F3BZ71J4 on production site.
- UI Improvement: Adjusted toast notification delay to 5 seconds for a better user experience.
- Code Cleanup: Removed the redundant `Index.tsx` page from the `pages` directory.
- UI Improvement: Repositioned "Licensed" to precede "Assisted Living Facility" in the site header and ensured consistent font styling.
- Content Update: Rewrote staff bios and specialties for a more personal, warm, and family-oriented tone.
- Content Update: Removed "LLC" from all non-footer instances of the company name (Header, AboutSection, Home, About pages).
- UI Improvement: Updated logo image to `Logo-removebg-preview.png` for a cleaner look with less internal white space.
- UI Improvement: Restructured logo in header to place the image above the text, and adjusted image size and text styling to resemble 'Sunrise Senior Living' logo.
- UI Improvement: Removed company name and licensed facility text from the header, leaving only the logo image.
- UI Improvement: Set the logo image size to 151x85 pixels in the header.
- UI Improvement: Restructured the logo in the header by wrapping the image within a `div` with class `header__logo` for structural consistency.
- UI Improvement: Increased the font size and padding of navigation links and the 'Call' button for enhanced visibility.
- UI Enhancement: Implemented professional header design inspired by Sunrise Senior Living with prominent phone number display (651-210-5364) in top bar.
- Feature Addition: Added "Book a Tour" button with smooth scrolling functionality to contact section.
- Navigation Enhancement: Created dropdown navigation menus for "Experience Goshen" and "Care & Living" sections with organized sub-links.
- Design Enhancement: Maintained all original content while significantly upgrading header professionalism and user experience.
- Layout Improvement: Added pricing and availability information in header top bar for increased visibility.
- UI Enhancement: Increased logo size to 220px x 130px for enhanced visibility and prominence.
- Feature Addition: Implemented scroll-based header shrinking that reduces header size, logo, and navigation elements when scrolling down, but only on the home page. All other pages display the shrunk header by default for consistent navigation experience.
- UI Cleanup: Removed non-functional Search and Menu buttons from header top bar, centered phone number information for cleaner, more focused header design.
- UI Consistency: Standardized navigation menu items ("Experience Goshen", "Care & Living", "Advice & Planning") to use consistent text-lg font size and styling for visual uniformity.
- Navigation Simplification: Completely removed dropdown menus and converted to simple navigation links (About, Services, Staff, Contact) for cleaner, more straightforward user experience.

## [2025-09-02] Services cleanup and accessibility
- Rename `lovable-uploads`