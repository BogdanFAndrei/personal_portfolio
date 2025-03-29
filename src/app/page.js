'use client';

import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import NavBar from './components/navbar';
import {
  Main,
  Section,
  Container,
  ProfileSection,
  ProfileContainer,
  ProfileImageSection,
  BioContainer,
  BioText,
  Title,
  Description,
  Email,
  EmailLink,
  ButtonsContainer,
  SocialButton,
  ButtonText,
  ButtonTitle,
  ButtonStats
} from './styles/PageStyles';

export default function Home() {
  return (
    <Main>
      <NavBar />
      <Section id="home">
        <Container>
          <ProfileSection>
            <ProfileImageSection>
              <ProfileContainer>
                <Image
                  src="/images/profilepic.jpg"
                  alt="Bogdan Andrei"
                  width={256}
                  height={256}
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center 10%'
                  }}
                  priority
                />
              </ProfileContainer>
              <EmailLink href="mailto:andrei.fbogdan@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Mail">
                <Email>
                  <FaEnvelope />
                  andrei.fbogdan@gmail.com
                </Email>
              </EmailLink>
            </ProfileImageSection>
            <BioContainer>
              <Title>Welcome to My Portfolio</Title>
              <Description>I'm a passionate developer creating amazing web experiences</Description>
              <BioText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </BioText>
            </BioContainer>
          </ProfileSection>
          <ButtonsContainer>
            <SocialButton href="https://github.com/BogdanFAndrei" target="_blank" rel="noopener noreferrer">
              <FaGithub />
              <ButtonText>
                <ButtonTitle>Check out my repositories</ButtonTitle>
                <ButtonStats>300+ commits</ButtonStats>
              </ButtonText>
            </SocialButton>
            <SocialButton href="https://www.linkedin.com/in/bogdan-florin-andrei-12496b24b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
              <ButtonText>
                <ButtonTitle>Connect with me</ButtonTitle>
                <ButtonStats>LinkedIn Profile</ButtonStats>
              </ButtonText>
            </SocialButton>
            <SocialButton href="https://x.com/BogdanFAndrei" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
              <ButtonText>
                <ButtonTitle>Follow me</ButtonTitle>
                <ButtonStats>Twitter/X Profile</ButtonStats>
              </ButtonText>
            </SocialButton>
          </ButtonsContainer>
        </Container>
      </Section>
    </Main>
  );
}
