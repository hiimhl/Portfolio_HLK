import React from "react";
import styled from "styled-components";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import MyWork from "./components/MyWork";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
`;

function App() {
  return (
    <React.Fragment>
      <Header />
      <AboutMe />
      <MyWork />
    </React.Fragment>
  );
}

export default App;
