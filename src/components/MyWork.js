import styled from "styled-components";
import { colorPalette, fontFamily, fontSize, spaceMargin } from "../style";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  padding: 0 15%;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.div`
  margin-top: ${spaceMargin.section};
  margin-bottom: ${spaceMargin.large};
  text-align: end;

  h1 {
    font-size: calc(${fontSize.large}*1.2);
    font-family: ${fontFamily.title};
    color: ${colorPalette.navy};
    margin-bottom: ${spaceMargin.regular};
  }
`;

// Filter works
const Category = styled.span`
  cursor: pointer;
  margin-left: ${spaceMargin.regular};
  border: none;
  background-color: transparent;
  font-size: ${fontSize.medium};
  /* font-size: calc(${fontSize.regular}*1.2); */
  color: ${colorPalette.gray};
`;

const Works = styled.div`
  background-color: aliceblue;
  width: 100%;
  height: 65%;
  gap: ${spaceMargin.regular};
  display: grid;
  grid-template-columns: repeat(3, 2fr);
`;

const ImgBox = styled.div`
  background-color: rebeccapurple;

  img {
    width: 100%;
  }
`;

function MyWork() {
  return (
    <Wrapper>
      <Heading>
        <h1>Works</h1>
        <Category>All</Category>
        <Category>반응형</Category>
        <Category>react</Category>
      </Heading>
      <Works>
        <ImgBox>
          <img alt="thumnail" src="Assets/works/sunnyside.png" />
          <div></div>
        </ImgBox>
        <ImgBox>
          <img alt="thumnail" src="Assets/works/sunnyside.png" />
          <div></div>
        </ImgBox>
        <ImgBox>
          <img alt="thumnail" src="Assets/works/sunnyside.png" />
          <div></div>
        </ImgBox>
        <ImgBox>
          <img alt="thumnail" src="Assets/works/sunnyside.png" />
          <div></div>
        </ImgBox>
        <ImgBox>
          <img alt="thumnail" src="Assets/works/sunnyside.png" />
          <div></div>
        </ImgBox>
        <ImgBox>
          <img alt="thumnail" src="Assets/works/sunnyside.png" />
          <div></div>
        </ImgBox>
      </Works>
    </Wrapper>
  );
}

export default MyWork;
