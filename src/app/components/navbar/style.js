import styled from 'styled-components'

export const StyledNavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #ffffff;
    box-shadow: ${props => props.$hasBorder ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
`

export const StyledNav = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`

export const StyledNavItems = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 768px) {
        display: ${props => props.$showNavbar ? 'flex' : 'none'};
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: #ffffff;
        padding: 1rem;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
`

export const StyledLink = styled.a`
    color: #333;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
    font-size: 1.4rem;

    &:hover {
        color: #007bff;
    }
`

export const StyledNavButton = styled.button`
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
`

export const StyledText = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
`

export const StyledLongBorder = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(to right, transparent, #007bff, transparent);
`

export const SocialIcons = styled.div`
    display: flex;
    gap: 1rem;
    margin-left: 1rem;

    a {
        color: #333;
        font-size: 1.4rem;
        transition: color 0.2s;

        &:hover {
            color: #007bff;
        }
    }

    @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 1rem;
    }
`
