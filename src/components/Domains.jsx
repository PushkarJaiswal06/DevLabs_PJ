import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DomainsSection = styled.section`
  min-height: 100vh;
  padding: 100px 2rem;
  background: #111;
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
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const DomainCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const DomainTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const DomainDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
`;

const domains = [
  {
    title: "Web Development",
    description: "Master modern web technologies and frameworks to build responsive, scalable applications."
  },
  {
    title: "Mobile Development",
    description: "Create native and cross-platform mobile apps using cutting-edge technologies."
  },
  {
    title: "Cloud Computing",
    description: "Learn cloud platforms and services to deploy and scale applications efficiently."
  },
  {
    title: "AI & Machine Learning",
    description: "Explore artificial intelligence and machine learning algorithms to solve complex problems."
  },
  {
    title: "AI & Machine Learning",
    description: "Explore artificial intelligence and machine learning algorithms to solve complex problems."
  },
  {
    title: "AI & Machine Learning",
    description: "Explore artificial intelligence and machine learning algorithms to solve complex problems."
  }
];

const Domains = () => {
  return (
    <DomainsSection id="domains">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Domains
        </Title>
        <Grid>
          {domains.map((domain, index) => (
            <DomainCard
              key={domain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <DomainTitle>{domain.title}</DomainTitle>
              <DomainDescription>{domain.description}</DomainDescription>
            </DomainCard>
          ))}
        </Grid>
      </Container>
    </DomainsSection>
  );
};

export default Domains; 