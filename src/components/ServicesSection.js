import React from "react";
// Import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import styled from "styled-components";
import { Section, Description, Image } from "../styles";

// importing the fade animation from the animation.js file.
import { fade } from "../animation";

// importing scroll animation
import { useScroll } from "./useScroll";

// Service Section component definition.
const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Service variants={fade} initial="hidden" animate={controls} ref={element}>
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>

        <Cards>
          {/* Card 1 */}
          <Card>
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          {/* Card 2 */}
          <Card>
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          {/* Card 3 */}
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          {/* Card 4 */}
          <Card>
            <div className="icon">
              <img src={money} alt="" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>

      <Image>
        <img src={home2} alt="" />
      </Image>
    </Service>
  );
};

// styled components

const Service = styled(Section)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 15rem;
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
    border-radius: 0.1rem;
  }
`;

export default ServicesSection;
