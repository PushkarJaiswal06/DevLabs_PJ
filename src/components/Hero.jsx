

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import BuzzworthyModel from './BuzzworthyModel';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: #000;
`;

const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    justify-content: center;
  }
`;

const ModelContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.4;
`;

const TextContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 60%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const Title = styled(motion.h1)`
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #fff, #888);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  letter-spacing: -0.03em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.8rem;
  margin-bottom: 3rem;
  opacity: 0.8;
  line-height: 1.3;
  max-width: 1000px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled(motion.button)`
  padding: 1.2rem 2.5rem;
  font-size: 1.1rem;
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 500;
  width: fit-content;

  &:hover {
    background: #fff;
    color: #000;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection>
      <HeroContainer>
        <ModelContainer>
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <color attach="background" args={['#000']} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <spotLight
              position={[-10, -10, -10]}
              angle={0.15}
              penumbra={0.5}
              intensity={1}
            />
            <BuzzworthyModel />
            <Environment preset="city" />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </ModelContainer>
        <TextContainer ref={ref}>
          <Title
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            DevLabs
            <br />
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
Empowering developers to build the future through collaborative learning and innovation.          
          </Subtitle>
          <CTAButton
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScrollToProjects}
          >
            Join the Community
          </CTAButton>
        </TextContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero; 