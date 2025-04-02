import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterSection = styled.footer`
  padding: 4rem 2rem;
  background: #000;
  color: #fff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`;

const Column = styled.div`
  position: relative;
  overflow: hidden;
`;

const Logo = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #fff, #888);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #888, transparent);
  }
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const Title = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #fff;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, #888, transparent);
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 0.8rem;
`;

const Link = styled.a`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '→';
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
  }

  &:hover {
    color: #fff;
    transform: translateX(5px);

    &::before {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
  }

  &:hover {
    color: #888;
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.2);

    &::after {
      width: 100px;
      height: 100px;
    }
  }
`;

const Bottom = styled.div`
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <Grid>
          <Column>
            <Logo>DevLabs</Logo>
            <Description>
              Empowering developers to build the future through collaborative learning and innovation.
            </Description>
            <SocialLinks>
              <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </SocialLink>
              <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </SocialLink>
              <SocialLink href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-discord"></i>
              </SocialLink>
            </SocialLinks>
          </Column>
          <Column>
            <Title>Quick Links</Title>
            <LinkList>
              <LinkItem>
                <Link href="#about">About Us</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#domains">Domains</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#events">Events</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#contributors">Contributors</Link>
              </LinkItem>
            </LinkList>
          </Column>
          <Column>
            <Title>Resources</Title>
            <LinkList>
              <LinkItem>
                <Link href="#blog">Blog</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#docs">Documentation</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#tutorials">Tutorials</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#faq">FAQ</Link>
              </LinkItem>
            </LinkList>
          </Column>
          <Column>
            <Title>Contact</Title>
            <LinkList>
              <LinkItem>
                <Link href="mailto:contact@devlabs.com">contact@devlabs.com</Link>
              </LinkItem>
              <LinkItem>
                <Link href="tel:+1234567890">+1 (234) 567-890</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#location">123 Tech Street, Silicon Valley, CA</Link>
              </LinkItem>
            </LinkList>
          </Column>
        </Grid>
        <Bottom>
          <p>&copy; {new Date().getFullYear()} DevLabs. All rights reserved.</p>
        </Bottom>
      </Container>
    </FooterSection>
  );
};

export default Footer; 