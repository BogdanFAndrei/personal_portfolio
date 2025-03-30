/**
 * Styled component for the profile picture.
 * This component provides styling for the user's profile picture including:
 * - Circular shape
 * - Hover effects
 * - Responsive sizing
 * - Border and shadow effects
 * 
 * The component accepts standard image props (src, alt) and includes
 * a hover state that can be controlled via the isHovered prop.
 */

import styled from 'styled-components';

export const ProfilePicture = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`; 