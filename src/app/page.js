/**
 * Main page component for the portfolio website.
 * This component serves as the landing page and includes:
 * - Navigation bar
 * - Hero section with profile and intro
 * - Email CTA and social links
 * 
 * @component
 * @returns {JSX.Element} The rendered main page component
 */

'use client';

import { useState } from 'react';
import styled from 'styled-components';
import NavBar from './components/navbar';
import { PageContainer, Section } from './styles/PageStyles';
import { ProfilePicture } from './styles/ProfilePicture';
import { SocialButton } from './styles/SocialButton';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  const [, setIsHovered] = useState(false);

  return (
    <PageContainer>
      <NavBar />
      <HeroSection>
        <HeroGrid>
          <LeftCol>
            <ProfilePicture
              src="/profile.jpg"
              alt="Bogdan Florin Andrei"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ width: 220, height: 220 }}
            />
          </LeftCol>
          <RightCol>
            <Eyebrow>Welcome</Eyebrow>
            <HeroTitle>Bogdan Florin Andrei</HeroTitle>
            <Subtitle>Frontend Developer • Next.js • React • UI/UX</Subtitle>
            <Bio>
              I build fast, accessible, and elegant web experiences with modern
              tooling. I care about clean design, performance, and delightful
              interactions.
            </Bio>
            <Actions>
              <SocialButton
                href="mailto:bogdanfandrei@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: '#0d6efd', color: '#fff' }}
              >
                <FaEnvelope /> Contact me
              </SocialButton>
              <SmallNote>bogdanfandrei@gmail.com</SmallNote>
            </Actions>
            <SocialRow>
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
            </SocialRow>
          </RightCol>
        </HeroGrid>
      </HeroSection>
    </PageContainer>
  );
}

const HeroSection = styled(Section)`
  padding-top: 8rem;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 3rem;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const LeftCol = styled.div`
  display: flex;
  justify-content: center;
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Eyebrow = styled.span`
  display: inline-block;
  color: #6c757d;
  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
  font-size: .875rem;
`;

const HeroTitle = styled.h1`
  font-size: 2.75rem;
  line-height: 1.15;
  color: #1f2937;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #374151;
  margin: 0;
`;

const Bio = styled.p`
  font-size: 1rem;
  color: #4b5563;
  max-width: 60ch;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const SmallNote = styled.span`
  color: #6b7280;
  font-size: .95rem;
`;
