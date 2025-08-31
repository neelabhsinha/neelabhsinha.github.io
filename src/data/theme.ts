import type { ThemeConfig } from '../types';

export const lightTheme: ThemeConfig = {
  palette: {
    primary: '#1976d2',      // Light blue
    secondary: '#2196f3',    // Slightly lighter blue
    background: {
      default: '#ffffff',    // White background
      paper: '#f8f9fa'       // Light gray for cards
    },
    text: {
      primary: '#1a1a1a',    // Dark text
      secondary: '#666666'   // Gray text
    }
  },
  spacing: 8,
  borderRadius: 8
};

export const darkTheme: ThemeConfig = {
  palette: {
    primary: '#64b5f6',      // Lighter blue for dark mode
    secondary: '#42a5f5',    
    background: {
      default: '#121212',    // Dark background
      paper: '#1e1e1e'       // Slightly lighter dark for cards
    },
    text: {
      primary: '#ffffff',    // White text
      secondary: '#b0b0b0'   // Light gray text
    }
  },
  spacing: 8,
  borderRadius: 8
};

// Customizable theme variables
export const themeVariables = {
  colors: {
    primary: {
      light: '#1976d2',
      dark: '#64b5f6'
    },
    secondary: {
      light: '#2196f3',
      dark: '#42a5f5'
    },
    accent: '#ff4081',
    success: '#4caf50',
    warning: '#ff9800',
    error: '#f44336',
    white: '#ffffff',
    black: '#000000'
  },
  gradients: {
    hero: {
      light: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)',
      dark: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)'
    },
    section: {
      light: 'rgba(248, 249, 250, 0.5)',
      dark: 'rgba(18, 18, 18, 0.5)'
    },
    brand: {
      light: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
      dark: 'linear-gradient(45deg, #64b5f6 30%, #42a5f5 90%)'
    },
    accent: {
      light: 'radial-gradient(circle at 30% 20%, rgba(25, 118, 210, 0.05) 0%, transparent 50%)',
      dark: 'radial-gradient(circle at 30% 20%, rgba(100, 181, 246, 0.1) 0%, transparent 50%)'
    }
  },
  backgrounds: {
    glass: {
      light: 'rgba(255, 255, 255, 0.95)',
      dark: 'rgba(18, 18, 18, 0.95)'
    },
    border: {
      light: 'rgba(0, 0, 0, 0.1)',
      dark: 'rgba(255, 255, 255, 0.1)'
    },
    hover: {
      light: 'rgba(0, 0, 0, 0.1)',
      dark: 'rgba(255, 255, 255, 0.1)'
    }
  },
  shadows: {
    card: '0 4px 6px rgba(0, 0, 0, 0.1)',
    elevated: '0 8px 25px rgba(0, 0, 0, 0.15)',
    floating: '0 10px 30px rgba(0, 0, 0, 0.2)'
  },
  animations: {
    fast: '0.2s ease-in-out',
    normal: '0.3s ease-in-out',
    slow: '0.5s ease-in-out'
  }
};
