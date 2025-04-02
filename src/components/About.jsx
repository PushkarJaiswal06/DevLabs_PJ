import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 8rem 2rem;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 4rem;
  font-weight: 700;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Description = styled(motion.p)`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
`;

const RulesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const Rule = styled(motion.div)`
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #fff;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </Title>
        <Content>
          <Description
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            With years of experience in the tech industry, DevLabs has become a leading platform
            for innovative development and learning. We specialize in creating meaningful
            digital experiences that empower the next generation of developers.
          </Description>
          <RulesGrid>
            {[
              {
                title: "Discipline",
                description: "We maintain high standards through disciplined processes and thorough execution."
              },
              {
                title: "Innovation",
                description: "We constantly push boundaries and explore new technologies."
              },
              {
                title: "Community",
                description: "We believe in the power of collaborative learning and shared knowledge."
              },
              {
                title: "Excellence",
                description: "We strive for excellence in everything we do, from code to communication."
              }
            ].map((rule, index) => (
              <Rule
                key={rule.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              >
                <h3>{rule.title}</h3>
                <p>{rule.description}</p>
              </Rule>
            ))}
          </RulesGrid>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About; 