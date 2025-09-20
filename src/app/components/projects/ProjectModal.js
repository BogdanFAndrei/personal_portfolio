'use client';

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

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  const [slideIndex, setSlideIndex] = useState(0);
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

  // Reset slide on project change
  useEffect(() => {
    setSlideIndex(0);
  }, [project]);

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeys = (e) => {
      if (e.key === 'ArrowRight') {
        setSlideIndex((i) => Math.min(i + 1, (project?.gallery?.length || 1) - 1));
      } else if (e.key === 'ArrowLeft') {
        setSlideIndex((i) => Math.max(i - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeys);
    return () => window.removeEventListener('keydown', handleKeys);
  }, [project]);

  const goPrev = () => setSlideIndex((i) => Math.max(i - 1, 0));
  const goNext = () => setSlideIndex((i) => Math.min(i + 1, (project?.gallery?.length || 1) - 1));

  const parseAbout = (raw) => {
    if (!raw) {
      return { title: '', summary: [], bullets: [], impact: '' };
    }
    const lines = raw.split('\n').map((l) => l.trim());
    const nonEmpty = lines.filter((l) => l.length > 0);
    let idx = 0;
    const title = nonEmpty[idx] || '';
    idx += 1;

    const summary = [];
    while (idx < nonEmpty.length && !nonEmpty[idx].toLowerCase().startsWith('key technical achievements')) {
      if (nonEmpty[idx].startsWith('-')) break;
      if (nonEmpty[idx].toLowerCase().startsWith('impact:')) break;
      if (!nonEmpty[idx].toLowerCase().startsWith('key')) summary.push(nonEmpty[idx]);
      idx += 1;
    }

    // Skip heading line if present
    if (idx < nonEmpty.length && nonEmpty[idx].toLowerCase().startsWith('key technical achievements')) {
      idx += 1;
    }

    const bullets = [];
    while (idx < nonEmpty.length && nonEmpty[idx].startsWith('-')) {
      bullets.push(nonEmpty[idx].replace(/^[-]\s*/, ''));
      idx += 1;
    }

    let impact = '';
    while (idx < nonEmpty.length) {
      if (nonEmpty[idx].toLowerCase().startsWith('impact:')) {
        impact = nonEmpty[idx].replace(/^impact:\s*/i, '');
        break;
      }
      idx += 1;
    }

    return { title, summary, bullets, impact };
  };

  const about = parseAbout(project?.description);

  return (
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
        
        <ModalHeader $bg={project.headerBg}>
          <ModalTitle $color={project.headerTextColor || (project.headerBg ? '#fff' : undefined)}>{project.title}</ModalTitle>
        </ModalHeader>
        
        <MainImageContainer $bg={project.bannerColor || '#f2f2f2'}>
          <Image 
            src={project.image} 
            alt={project.title}
            fill

            sizes="(max-width: 800px) 100vw, 800px"
            style={{ marginTop: 20, objectFit: 'contain', objectPosition: 'center' }}
          />
        </MainImageContainer>
        
        <ModalBody>
          <Section>
            <SectionTitle>About this project</SectionTitle>
            {about.title && <AboutTitle>{about.title}</AboutTitle>}
            {about.summary.map((p, i) => (
              <Description key={`sum-${i}`}>{p}</Description>
            ))}
            {about.bullets.length > 0 && (
              <>
                <SubHeading>Key Technical Achievements:</SubHeading>
                <BulletList>
                  {about.bullets.map((b, i) => (
                    <ListItem key={`b-${i}`}>{b}</ListItem>
                  ))}
                </BulletList>
              </>
            )}
            {about.impact && (
              <ImpactText>
                <strong>Impact:</strong> {about.impact}
              </ImpactText>
            )}
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
              <Carousel>
                <CarouselViewport>
                  <CarouselTrack style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
                    {project.gallery.map((image, index) => (
                      <CarouselSlide key={index}>
                        <Image 
                          src={image}
                          alt={`${project.title} gallery ${index + 1}`}
                          fill
                          sizes="(max-width: 900px) 100vw, 800px"
                          style={{ objectFit: 'contain' }}
                        />
                      </CarouselSlide>
                    ))}
                  </CarouselTrack>
                </CarouselViewport>
                {project.gallery.length > 1 && (
                  <>
                    <ArrowButton onClick={goPrev} aria-label="Previous" $side="left">‹</ArrowButton>
                    <ArrowButton onClick={goNext} aria-label="Next" $side="right">›</ArrowButton>
                    <Dots>
                      {project.gallery.map((_, i) => (
                        <Dot
                          key={`dot-${i}`}
                          aria-label={`Go to slide ${i + 1}`}
                          $active={i === slideIndex}
                          onClick={() => setSlideIndex(i)}
                        />
                      ))}
                    </Dots>
                  </>
                )}
              </Carousel>
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
  color: #000; /* ensure the X icon is black */
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ModalHeader = styled.header`
  padding: 1.5rem;
  background-color: ${({ $bg }) => $bg || '#f8f9fa'};
  border-bottom: 1px solid #e9ecef;
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  color: ${({ $color }) => $color || '#333'};
  margin: 0;
`;

const MainImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: clamp(180px, 32vh, 340px);
  overflow: hidden;
  border-radius: 8px;
  background-color: ${({ $bg }) => $bg};
  display: block;
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

const AboutTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.75rem 0;
`;

const SubHeading = styled.p`
  font-weight: 700;
  color: #111827;
  margin-top: 1rem;
`;

const BulletList = styled.ul`
  margin: 0.5rem 0 0 1rem;
  padding: 0;
  list-style: disc;
  color: #374151;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.6;
`;

const ImpactText = styled.p`
  margin-top: 1rem;
  color: #1f2937;
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

const Carousel = styled.div`
  position: relative;
`;

const CarouselViewport = styled.div`
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 300ms ease;
  will-change: transform;
`;

const CarouselSlide = styled.div`
  position: relative;
  min-width: 100%;
  height: 360px;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $side }) => ($side === 'left' ? 'left: 0.25rem;' : 'right: 0.25rem;')}
  z-index: 2;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
  cursor: pointer;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;

const Dot = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${({ $active }) => ($active ? '#111827' : '#d1d5db')};
  cursor: pointer;
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