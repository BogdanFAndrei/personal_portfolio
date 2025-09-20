/**
 * Projects page component.
 * Displays a grid of project cards that open modals with detailed information.
 * 
 * @component
 * @returns {JSX.Element} The rendered projects page
 */

'use client';

import { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/navbar';
import { PageContainer, Section, SectionTitle } from '../styles/PageStyles';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectModal from '../components/projects/ProjectModal';
import { projectsData } from '../data/projectsData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <PageContainer>
      <NavBar />
      <ProjectsSection>
        <SectionTitle>Projects</SectionTitle>
        <ProjectsGrid>
          {projectsData.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
              onClick={() => openModal(project)}
            />
          ))}
        </ProjectsGrid>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={closeModal} 
          />
        )}
      </ProjectsSection>
    </PageContainer>
  );
}

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`; 

const ProjectsSection = styled(Section)`
  padding-top: 6rem;
`;