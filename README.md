# Chrome Browser UI

A pixel-perfect Chrome-like browser window UI built with React. This project demonstrates modern React development practices with functional components, hooks, and clean CSS styling.

## Features

- **Window Container**: Floating browser window with realistic window controls (minimize, maximize, close)
- **Tab System**: Multiple tabs with click-to-switch functionality and close buttons
- **Address Bar**: Rounded address bar with navigation controls (back, forward, refresh)
- **Chrome Icons**: Lock icon, star (bookmark) icon, and vertical menu (⋮)
- **Responsive Design**: Adapts to different screen sizes
- **Smooth Animations**: Hover effects and tab switching transitions

## Tools Used

- **React 18.2.0**: Modern React with functional components and hooks
- **CSS3**: Custom styling with no UI libraries (pure CSS)
- **Inter Font**: Google Fonts for clean typography
- **SVG Icons**: Custom SVG icons for all browser controls
- **Create React App**: For project setup and development

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the ZIP file
2. Navigate to the project directory:
   ```bash
   cd chrome-browser-ui
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## Project Structure

```
src/
├── components/
│   ├── ChromeWindow.js      # Main browser window component
│   ├── ChromeWindow.css     # Window styling
│   ├── WindowControls.js    # Window control buttons
│   ├── WindowControls.css   # Control button styling
│   ├── TabBar.js           # Tab system component
│   ├── TabBar.css          # Tab styling
│   ├── AddressBar.js       # Address bar with navigation
│   └── AddressBar.css      # Address bar styling
├── App.js                  # Main app component
├── App.css                 # App-level styling
├── index.js                # React entry point
└── index.css               # Global styles
```

## Features Breakdown

### Window Controls
- Minimize button (yellow)
- Maximize button (green)
- Close button (red)
- Realistic hover effects

### Tab System
- Multiple tabs with favicons
- Active tab highlighting
- Close buttons on hover
- New tab button
- Smooth tab switching

### Address Bar
- Navigation controls (back, forward, refresh)
- Security lock icon
- Rounded address input
- Bookmark star icon
- More options menu (⋮)

### Responsive Design
- Adapts to different screen sizes
- Maintains Chrome-like proportions
- Mobile-friendly layout

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Development Notes

- No backend functionality required
- All interactions are UI-only
- Pure CSS styling (no Tailwind or MUI)
- Functional components with hooks
- Modern React patterns

## License

This project is created for demonstration purposes.
