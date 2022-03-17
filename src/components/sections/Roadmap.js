import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

const Roadmap = () => {
  return <Section>Roadmap</Section>;
};

export default Roadmap;
