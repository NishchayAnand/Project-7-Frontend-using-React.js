import React from "react";
import styled from "styled-components";
import { Section } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

//importing the fade animation
import { fade } from "../animation";

//importing attributes required for creating scroll animation.
import { useScroll } from "./useScroll";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq variants={fade} initial="hidden" animate={controls} ref={element}>
      <h2>Any Questions ?</h2>
      <h2>
        <span>FAQ</span>
      </h2>

      <AnimateSharedLayout>
        {/* Question 1 */}
        <Toggle title="How Do I Start ?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus, ut.
            </p>
          </div>
        </Toggle>

        {/* Question 2 */}
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus, ut.
            </p>
          </div>
        </Toggle>

        {/* Question 3 */}
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus, ut.
            </p>
          </div>
        </Toggle>

        {/* Question 4 */}
        <Toggle title="What Products do you offer ?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus, ut.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

// Styled Components

const Faq = styled(Section)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;
