/**
 * Styled component for social media buttons.
 * This component provides styling for social media and contact buttons including:
 * - Consistent padding and spacing
 * - Icon and text alignment
 * - Hover effects
 * - Background color transitions
 * 
 * The component is designed to be used with React Icons and includes
 * proper spacing between the icon and text content.
 */

import styled from 'styled-components';

export const SocialButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    background-color: #f8f9fa;
  }
  
  svg {
    font-size: 1.25rem;
    color: #007bff;
  }
`; 