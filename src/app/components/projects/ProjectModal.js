/**
 * Project modal component.
 * Displays detailed information about a project in a modal dialog.
 * Includes project title, full description, tech stack, gallery, and links.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.project - Project data object
 * @param {Function} props.onClose - Function to call when modal is closed
 * @returns {JSX.Element} The rendered project modal
 */

import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    // Prevent scrolling while modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);
  
  // Close modal when clicking outside content
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
        
        <ModalHeader>
          <ModalTitle>{project.title}</ModalTitle>
        </ModalHeader>
        
        <MainImageContainer>
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </MainImageContainer>
        
        <ModalBody>
          <Section>
            <SectionTitle>About this project</SectionTitle>
            <Description>{project.description}</Description>
          </Section>
          
          <Section>
            <SectionTitle>Tech Stack</SectionTitle>
            <TechList>
              {project.technologies.map((tech, index) => (
                <TechItem key={index}>{tech}</TechItem>
              ))}
            </TechList>
          </Section>
          
          {project.gallery && project.gallery.length > 0 && (
            <Section>
              <SectionTitle>Gallery</SectionTitle>
              <Gallery>
                {project.gallery.map((image, index) => (
                  <GalleryItem key={index}>
                    <Image 
                      src={image} 
                      alt={`${project.title} gallery ${index + 1}`}
                      width={300}
                      height={200}
                      style={{ objectFit: 'cover' }}
                    />
                  </GalleryItem>
                ))}
              </Gallery>
            </Section>
          )}
          
          <ProjectLinks>
            {project.githubUrl && (
              <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub /> View Code
              </ProjectLink>
            )}
            {project.liveUrl && (
              <ProjectLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Live Demo
              </ProjectLink>
            )}
          </ProjectLinks>
        </ModalBody>
      </ModalContent>
    </ModalBackdrop>
  );
};

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  z-index: 1000;
  overflow-y: auto;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: white;
  border: none;
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ModalHeader = styled.header`
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin: 0;
`;

const MainImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;

const ModalBody = styled.div`
  padding: 1.5rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #4a5568;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  list-style: none;
  padding: 0;
`;

const TechItem = styled.li`
  background-color: #e9ecef;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  color: #495057;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const GalleryItem = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export default ProjectModal; 