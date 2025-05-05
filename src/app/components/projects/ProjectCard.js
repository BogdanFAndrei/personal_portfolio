/**
 * Project card component.
 * Displays a preview of a project with image, title, and short description.
 * Clicking the card opens a modal with detailed information.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.project - Project data object
 * @param {Function} props.onClick - Function to call when card is clicked
 * @returns {JSX.Element} The rendered project card
 */

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const ProjectCard = ({ project, onClick }) => {
  return (
    <Card onClick={onClick}>
      <ImageContainer>
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </ImageContainer>
      <Content>
        <Title>{project.title}</Title>
        <Description>{project.shortDescription}</Description>
        <ViewButton>View Details</ViewButton>
      </Content>
    </Card>
  );
};

const Card = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

const Content = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const ViewButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  border: none;
  transition: background-color 0.2s ease;
  align-self: flex-start;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export default ProjectCard; 