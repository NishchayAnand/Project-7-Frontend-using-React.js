import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import { Section, Description, Image, Hide } from "../styles";
// importing animation objects/classes/functions
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            {/* no need to add - initial="hidden" animate="show" */}
            {/* since AboutSection is child of AboutUs which wraps all its */}
            {/* child components inside a motion.div having these animations */}
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>

          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>

          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        {/* Title tag over */}

        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </motion.p>

        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      {/* Description tag over */}

      <Image>
        <motion.img
          src={home1}
          alt="guy with a camera"
          variants={photoAnim}
        ></motion.img>
      </Image>

      {/* Wave svg includiing animations */}
      <Wave />
    </About>
  );
};

// Styled Components

const About = styled(Section)``;

export default AboutSection;
