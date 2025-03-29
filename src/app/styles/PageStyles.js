'use client';

import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  min-height: 100vh;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
`;

export const Container = styled.div`
  text-align: center;
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  margin-bottom: 4rem;
  text-align: left;

  
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ProfileImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const ProfileContainer = styled.div`
  position: relative;
  width: 256px;
  height: 256px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgb(229, 231, 235);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
`;

export const BioContainer = styled.div`
  max-width: 600px;
`;

export const BioText = styled.p`
  font-size: 1.125rem;
  line-height: 1.75;
  color: #4a5568;
  margin-top: 1rem;
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
`;

export const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #666;
`;

export const Email = styled.span`
  font-size: 1rem;
  line-height: 1.75rem;
  color: #000;
  text-decoration: none;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  svg {
    font-size: 1.2rem;
  }

  &:hover {
    color: #007bff;
    text-decoration: underline;
  }
`;

export const EmailLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  margin-top: 0.5rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem 0;
`;

export const SocialButton = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  background: white;
  color: #333;
  text-decoration: none;
  transition: all 0.2s ease;
  min-width: 300px;

  &:hover {
    border-color: #007bff;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  svg {
    font-size: 2rem;
  }
`;

export const ButtonText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ButtonTitle = styled.span`
  font-weight: 500;
  font-size: 1.125rem;
`;

export const ButtonStats = styled.span`
  font-size: 1rem;
  color: #007bff;
  margin-top: 0.25rem;
`; 