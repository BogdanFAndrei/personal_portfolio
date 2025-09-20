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
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, onClick }) => {
  return (
    <Card>
      <ImageContainer $bg={project.cardBg}>
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          style={{ objectFit: 'contain' }}
        />
      </ImageContainer>
      <Content>
        <Title>{project.title}</Title>
        <Description>{project.shortDescription}</Description>
        <ActionsRow>
          <ActionButton onClick={onClick}>View Details</ActionButton>
          {project.liveUrl && (
            <ActionLink
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt /> Live Demo
            </ActionLink>
          )}
        </ActionsRow>
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
  background: ${({ $bg }) =>
    $bg ? `center / cover no-repeat url(${$bg})` : '#f3f4f6'};
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

const ActionsRow = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const actionStyles = `
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: #fff;
  border-radius: 8px;
  font-weight: 500;
  border: none;
  text-decoration: none;
  transition: background-color 0.2s ease;
  cursor: pointer;
  &:hover { background-color: #0056b3; }
`;

const ActionButton = styled.button`
  ${actionStyles}
`;

const ActionLink = styled.a`
  ${actionStyles}
`;

export default ProjectCard; 