'use client';

import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 10rem;
  min-height: 100vh;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 1rem;
  margin-top: 1rem;
`;

export const Email = styled.span`
  font-size: 1rem;
  line-height: 1.75rem;
  color: #000;
  margin-bottom: 1rem;
  text-decoration: none;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

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
`;

export const Container = styled.div`


  
`;

export const ProfileContainer = styled.div`


  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgb(229, 231, 235);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-left: 0px;
  
  &:hover {
    transform: scale(1.05);
  }
  }
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