import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EventsSection = styled.section`
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

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const EventCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;
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

const EventDate = styled.div`
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '📅';
  }
`;

const EventTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
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

const EventDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const EventButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(45deg, #666, #888);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

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
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

    &::after {
      width: 300px;
      height: 300px;
    }
  }

  &::before {
    content: '→';
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: translateX(5px);
  }
`;

const events = [
  {
    date: "April 15, 2024",
    title: "Web Development Workshop",
    description: "Learn modern web development practices with React and Node.js. Join us for hands-on coding sessions and expert guidance.",
    link: "#register"
  },
  {
    date: "April 22, 2024",
    title: "Mobile App Development",
    description: "Build cross-platform mobile applications using React Native. Master the latest mobile development techniques.",
    link: "#register"
  },
  {
    date: "May 1, 2024",
    title: "Cloud Computing Seminar",
    description: "Explore cloud services and deployment strategies. Learn about AWS, Azure, and Google Cloud platforms.",
    link: "#register"
  }
];

const Events = () => {
  return (
    <EventsSection id="events">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Upcoming Events
        </Title>
        <EventsGrid>
          {events.map((event, index) => (
            <EventCard
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <EventDate>{event.date}</EventDate>
              <EventTitle>{event.title}</EventTitle>
              <EventDescription>{event.description}</EventDescription>
              <EventButton href={event.link}>Register Now</EventButton>
            </EventCard>
          ))}
        </EventsGrid>
      </Container>
    </EventsSection>
  );
};

export default Events; 