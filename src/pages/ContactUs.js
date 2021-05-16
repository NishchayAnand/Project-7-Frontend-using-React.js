import React from "react";

import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import { Hide } from "../styles";

const ContactUs = () => {
  return (
    <Contact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Title>
        {/* Hide is unnecessary over here since adding overflow: hidden*/}
        {/* in the Title styled component will do the same work */}
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>

      {/* Social links */}
      <div>
        {/* Social Link 1 */}
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Facebook</h2>
          </Social>
        </Hide>

        {/* Social Link 2 */}
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Twitter</h2>
          </Social>
        </Hide>

        {/* Social Link 3 */}
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Instagram</h2>
          </Social>
        </Hide>
      </div>
      {/* Social links div over */}
    </Contact>
  );
};

// Styled components
const Contact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;

  @media (max-width: 1500px) {
    padding: 5rem 5rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 1rem;
  color: black;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  background: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 1.8rem;
    font-size: 2rem;
  }
`;

export default ContactUs;
