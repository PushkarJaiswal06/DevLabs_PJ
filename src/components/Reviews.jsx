import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ReviewsSection = styled.section`
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const ReviewCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
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

const ReviewerInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  position: relative;
`;

const ReviewerImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

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

  ${ReviewCard}:hover & {
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.3);

    &::after {
      opacity: 1;
    }
  }
`;

const ReviewerDetails = styled.div`
  flex: 1;
`;

const ReviewerName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
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

const ReviewerRole = styled.div`
  color: #888;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const ReviewText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
  position: relative;
  padding-left: 1rem;
  border-left: 2px solid rgba(255, 255, 255, 0.1);

  &::before {
    content: '"';
    position: absolute;
    top: -0.5rem;
    left: -0.5rem;
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.2);
  }
`;

const Rating = styled.div`
  color: #ffd700;
  font-size: 1.2rem;
  display: flex;
  gap: 0.25rem;
  justify-content: flex-end;
`;

const reviews = [
  {
    name: "Anurag Banerjee ",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    text: "DevLabs has been instrumental in my growth as a developer. The community is supportive, and the learning resources are top-notch. I've learned more in a few months than I did in a year of self-study.",
    rating: 5
  },
  {
    name: "Devdutt ",
    role: "UX Designer",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    text: "The collaborative environment at DevLabs is amazing. I've learned so much from other members and improved my design skills significantly. The workshops and feedback sessions are invaluable.",
    rating: 5
  },
  {
    name: "Snehil Saxena ",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    text: "DevLabs provides an excellent platform for networking and skill development. The events and workshops are incredibly valuable, and the community is always willing to help and share knowledge.",
    rating: 5
  }
];

const Reviews = () => {
  return (
    <ReviewsSection id="reviews">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What Our Members Say
        </Title>
        <Grid>
          {reviews.map((review, index) => (
            <ReviewCard
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <ReviewerInfo>
                <ReviewerImage src={review.image} alt={review.name} />
                <ReviewerDetails>
                  <ReviewerName>{review.name}</ReviewerName>
                  <ReviewerRole>{review.role}</ReviewerRole>
                </ReviewerDetails>
              </ReviewerInfo>
              <ReviewText>{review.text}</ReviewText>
              <Rating>{"★".repeat(review.rating)}</Rating>
            </ReviewCard>
          ))}
        </Grid>
      </Container>
    </ReviewsSection>
  );
};

export default Reviews; 