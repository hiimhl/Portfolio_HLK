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
  width: 100%;
  height: auto;
  padding-top: ${spaceMargin.regular};
  gap: ${spaceMargin.regular};
  display: grid;
  grid-template-columns: repeat(3, 2fr);
`;

const ImgBox = styled.div`
  padding-bottom: 66.6%; // 1.5:1 비율
  background-position: top;
  background-size: cover;
  background-image: url(${(props) => props.imgPath});
  cursor: pointer;

  -webkit-box-shadow: 1px 5px 15px -1px rgba(0, 0, 0, 0.1);
  box-shadow: 1px 5px 15px -1px rgba(0, 0, 0, 0.1);
`;

const Overlay = styled.div`
  display: none;
`;
function MyWork() {
  return (
    <Wrapper>
      <Heading>
        <h1>My Work</h1>
        <Category>All</Category>
        <Category>반응형</Category>
        <Category>react</Category>
      </Heading>
      <Works>
        <ImgBox imgPath="Assets/works/sunnyside.png">
          <Overlay>
            <h3>sunny...</h3>
            <span>Html...</span>
          </Overlay>
        </ImgBox>
        <ImgBox imgPath="Assets/works/easybank.png">
          <Overlay>
            <h3>sunny...</h3>
            <span>Html...</span>
          </Overlay>
        </ImgBox>
        <ImgBox imgPath="Assets/works/product.png">
          <Overlay>
            <h3>sunny...</h3>
            <span>Html...</span>
          </Overlay>
        </ImgBox>
        <ImgBox imgPath="Assets/works/social.png">
          <Overlay>
            <h3>sunny...</h3>
            <span>Html...</span>
          </Overlay>
        </ImgBox>
        <ImgBox imgPath="Assets/works/emotion.png">
          <Overlay>
            <h3>sunny...</h3>
            <span>Html...</span>
          </Overlay>
        </ImgBox>
        <ImgBox imgPath="Assets/works/coin.png">
          <Overlay>
            <h3>sunny...</h3>
            <span>Html...</span>
          </Overlay>
        </ImgBox>
      </Works>
    </Wrapper>
  );
}

export default MyWork;
