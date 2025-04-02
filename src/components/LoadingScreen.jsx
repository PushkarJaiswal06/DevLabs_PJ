// import React from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';

// const LoadingContainer = styled(motion.div)`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   background: #000;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
// `;

// const LoadingText = styled(motion.h1)`
//   color: #fff;
//   font-size: clamp(2rem, 5vw, 3rem);
//   font-weight: 700;
//   text-transform: uppercase;
//   letter-spacing: 0.2em;
// `;

// const LoadingScreen = () => {
//   return (
//     <LoadingContainer
//       initial={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <LoadingText
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{
//           duration: 0.5,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//       >
//         DevLabs
//       </LoadingText>
//     </LoadingContainer>
//   );
// };

// export default LoadingScreen; 



import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const LoadingText = styled(motion.h1)`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

const LoadingScreen = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <LoadingContainer
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LoadingText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Hey there, we're DevLabs
          </LoadingText>
        </LoadingContainer>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen; 