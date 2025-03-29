'use client';

import Image from "next/image";
import NavBar from './components/navbar';
import { Main, Section, Container, ProfileContainer, Title, Description, Email, EmailLink } from './styles/PageStyles';
import { FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <Main>
      <NavBar />
      <Section id="home">
        <Container>
          <ProfileContainer>
            <Image
              src="/images/profilepic.jpg"
              alt="Bogdan Andrei"
              
              width={200}
              height={256}
              style={{ objectFit: 'cover' , }}
              priority
            />
          </ProfileContainer>
          <EmailLink href="mailto:andrei.fbogdan@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Mail">
            <Email>
              <FaEnvelope />
              andrei.fbogdan@gmail.com
            </Email>
          </EmailLink>
          <Description>I'm a passionate developer creating amazing web experiences</Description>
        </Container>
      </Section>
    </Main>
  );
}
