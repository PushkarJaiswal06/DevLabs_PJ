import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PJ from '../assets/Pushkar1.jpg';
import Sandeep from '../assets/SandeepSingh.png';
import Saksham from '../assets/SakshamMishra.png';

const ContributorsSection = styled.section`
  min-height: 100vh;
  padding: 100px 2rem;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #888, transparent);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const ContributorCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);

    &::before {
      transform: translateX(100%);
    }
  }
`;

const ContributorImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    opacity: 0;
    transition: all 0.3s ease;
  }

  ${ContributorCard}:hover & {
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.3);

    &::after {
      opacity: 1;
    }
  }
`;

const ContributorName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
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

const ContributorRole = styled.div`
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const ContributorBio = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);

  &:hover {
    color: #888;
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.2);
  }

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

  &:active::after {
    width: 100px;
    height: 100px;
  }
`;

const contributors = [
  {
    name: "Saksham Mishra ",
    role: " Community Founder & Lead ",
    bio: "Experienced project manager with a track record of delivering successful tech projects on time and within budget.",
    image: Saksham,
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Sandeep Singh ",
    role: "Community Co-Founder",
    bio: "Creative designer focused on crafting beautiful and intuitive user experiences. Advocate for user-centered design and accessibility.",
    image: Sandeep,
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Pushkar Jaiswal ",
    role: "Development Lead",
    bio: "Full-stack developer with expertise in React and Node.js. Passionate about building scalable web applications and mentoring junior developers.",
    image: PJ,
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  }
];

const Contributors = () => {
  return (
    <ContributorsSection id="contributors">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Contributors
        </Title>
        <Grid>
          {contributors.map((contributor, index) => (
            <ContributorCard
              key={contributor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <ContributorImage src={contributor.image} alt={contributor.name} />
              <ContributorName>{contributor.name}</ContributorName>
              <ContributorRole>{contributor.role}</ContributorRole>
              <ContributorBio>{contributor.bio}</ContributorBio>
              <SocialLinks>
                <SocialLink href={contributor.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </SocialLink>
                <SocialLink href={contributor.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </SocialLink>
              </SocialLinks>
            </ContributorCard>
          ))}
        </Grid>
      </Container>
    </ContributorsSection>
  );
};

export default Contributors; 