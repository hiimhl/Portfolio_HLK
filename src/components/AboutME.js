import styled from "styled-components";
import {
  borderRadius,
  colorPalette,
  fontFamily,
  fontSize,
  fontWeight,
  spaceMargin,
} from "../style";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  padding: ${spaceMargin.large};
`;

const Stroke = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: ${spaceMargin.large};
  border: 3px solid ${colorPalette.white};
`;

const ImgBox = styled.article`
  width: 35%;

  /* Img & Name */
  & > div {
    width: 250px;

    margin-top: ${spaceMargin.section};
    margin-left: ${spaceMargin.medium};
    text-align: center;

    h2 {
      font-size: ${fontSize.medium};
      font-weight: ${fontWeight.bold};
      color: ${colorPalette.orange};
      margin-top: ${spaceMargin.regular};
    }
  }
`;

// Profile image
const Img = styled.div`
  background-image: url("Assets/cat.jpg");
  background-size: cover;
  background-position: center;

  width: 250px;
  height: 300px;
  border-radius: ${borderRadius.circle};
`;

// Info
const InfoContainer = styled.div`
  width: 65%;
`;

// 소개글
const Sentence = styled.div`
  height: 45%;
  width: 100%;
  margin-bottom: ${spaceMargin.large};
  padding-top: ${spaceMargin.section};

  p {
    text-align: end;
    font-family: ${fontFamily.point};
    font-size: ${fontSize.large};
    font-weight: ${fontWeight.bold};
  }
`;

// Resume - 6분할
const Resume = styled.ul`
  width: 100%;
  height: 50%;

  display: grid;
  grid-template-columns: repeat(3, 2fr);
  gap: ${spaceMargin.medium};
`;

// 세부 항목
const Details = styled.li`
  padding: ${spaceMargin.small};
  display: grid;
  grid-template-columns: 35% 65%;
  gap: ${spaceMargin.small};

  h3 {
    font-size: ${fontSize.regular};
    color: ${colorPalette.navy};
    font-weight: ${fontWeight.bold};
  }
`;

const List = styled.ul`
  padding-left: ${spaceMargin.small};

  li {
    margin-bottom: ${spaceMargin.small};
  }
`;

function AboutMe() {
  return (
    <Wrapper>
      <Stroke>
        <ImgBox>
          <div>
            <Img />
            <h2>김해린</h2>
          </div>
        </ImgBox>

        <InfoContainer>
          <Sentence>
            <p>"~ 한 사람 입니다"</p>
          </Sentence>
          <Resume>
            <Details>
              <h3>인적사항</h3>
              <List>
                <li>1안녕하세요</li>
                <li>안녕하세요</li>
                <li>안녕하세요</li>
                <li>안녕하세요</li>
              </List>
            </Details>
            <Details>
              <h3>2인적사항</h3>
              <List>
                <li>안녕하세요</li>
                <li>안녕하세요</li>
                <li>안녕하세요</li>
              </List>
            </Details>
            <Details>
              <h3>3인적사항</h3>
              <List>
                <li>안녕하세요</li>
                <li>안녕하세요</li>
                <li>안녕하세요</li>
                <li>안녕하세요</li>
                <li>안녕하세요</li>
              </List>
            </Details>
            <Details>
              <h3>4인적사항</h3>
              <List>
                <li>안녕하세요</li>
                <li>안녕하세요</li>
              </List>
            </Details>
            <Details>
              <h3>5인적사항</h3>
              <List>
                <li>안녕하세요</li>
                <li>안녕하세요</li>
                <li>안녕하세요</li>
                <li>안녕하세요</li>
                <li>안녕하세요</li>
              </List>
            </Details>
          </Resume>
        </InfoContainer>
      </Stroke>
    </Wrapper>
  );
}

export default AboutMe;
