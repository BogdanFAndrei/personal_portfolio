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
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
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
                        <StyledLink
                            key={index}
                            href={item.href}
                        >
                            {item.name}
                        </StyledLink>
                    ))}
                    <SocialIcons>
                        <a href="https://github.com/BogdanFAndrei" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                        <a href="https://linkedin.com/in/bogdanfandrei" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://instagram.com/bogdanfandrei" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
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
