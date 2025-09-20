/**
 * Navigation bar component for the portfolio website.
 * This component provides navigation links to different sections of the portfolio:
 * - Home
 * - About
 * - Projects
 * - Contact
 * 
 * The navbar is responsive and includes a mobile menu for smaller screens.
 * 
 * @component
 * @returns {JSX.Element} The rendered navigation bar component
 */

'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import {
    StyledNavContainer,
    StyledNav,
    StyledLink,
    StyledNavItems,
    StyledNavButton,
    StyledText,
    StyledLongBorder,
    SocialIcons,
} from './style'

const navbarItems = [
    { name: 'Home', href: '/', isPage: true },
    { name: 'Achievements', href: '#Achievements', isPage: false },
    { name: 'Projects', href: '/projects', isPage: true },
    { name: 'Contact', href: '#contact', isPage: false },
]

const Navbar = ({ hasBorder = true, longBorder = false }) => {
    const [showNavbar, setShowNavbar] = useState(false)

    return (
        <StyledNavContainer $hasBorder={hasBorder} $longBorder={longBorder}>
            <Link href='/' title='Home'>
                <StyledText>Bogdan</StyledText>
            </Link>
            <StyledNav>
                <StyledNavItems $showNavbar={showNavbar}>
                    {navbarItems.map((item, index) => (
                        item.isPage ? (
                            <Link key={index} href={item.href} passHref legacyBehavior>
                                <StyledLink onClick={() => setShowNavbar(false)}>
                                    {item.name}
                                </StyledLink>
                            </Link>
                        ) : (
                            <StyledLink
                                key={index}
                                href={item.href}
                                onClick={() => setShowNavbar(false)}
                            >
                                {item.name}
                            </StyledLink>
                        )
                    ))}
                    <SocialIcons>
                        <a href="https://github.com/BogdanFAndrei" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/bogdan-florin-andrei-12496b24b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                    </SocialIcons>
                </StyledNavItems>
                <StyledNavButton
                    $longBorder={longBorder}
                    variant='link'
                    onClick={() => setShowNavbar(!showNavbar)}
                >
                    {showNavbar ? '✕' : '☰'}
                </StyledNavButton>
            </StyledNav>
            {longBorder && <StyledLongBorder />}
        </StyledNavContainer>
    )
}

export default Navbar
