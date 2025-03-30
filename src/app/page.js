/**
 * Main page component for the portfolio website.
 * This component serves as the landing page and includes:
 * - Navigation bar
 * - Profile picture with hover effect
 * - Name display
 * - Contact email
 * - Social media links (GitHub, LinkedIn, Twitter)
 * 
 * @component
 * @returns {JSX.Element} The rendered main page component
 */

'use client';

import { useState } from 'react';
import styled from 'styled-components';
import NavBar from './components/navbar';
import { PageContainer, Section, SectionTitle, SectionContent } from './styles/PageStyles';
import { ProfilePicture } from './styles/ProfilePicture';
import { SocialButton } from './styles/SocialButton';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <PageContainer>
      <NavBar />
      <Section>
        <SectionTitle>Welcome</SectionTitle>
        <SectionContent>
          <ProfilePicture
            src="/profile.jpg"
            alt="Bogdan Florin Andrei"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          <h1 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '1rem',
            textAlign: 'center',
            color: '#333'
          }}>
            Bogdan Florin Andrei
          </h1>
          <SocialButton
            href="mailto:bogdanfandrei@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginBottom: '1rem' }}
          >
            <FaEnvelope /> bogdanfandrei@gmail.com
          </SocialButton>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <SocialButton
              href="https://github.com/BogdanFAndrei"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </SocialButton>
            <SocialButton
              href="https://www.linkedin.com/in/bogdan-florin-andrei-12496b24b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </SocialButton>
            <SocialButton
              href="https://twitter.com/bogdanfandrei"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter /> Twitter
            </SocialButton>
          </div>
        </SectionContent>
      </Section>
    </PageContainer>
  );
}
