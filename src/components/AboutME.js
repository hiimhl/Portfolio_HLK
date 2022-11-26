import styled from "styled-components";
import { colorPalette, fontSize, spaceMargin, titleFont } from "../style";

export const SectionWrapper = styled.section`
  background-color: rebeccapurple;
  width: 100%;
  height: auto;

  & > div {
    // Contents
    margin: ${spaceMargin.section} auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${spaceMargin.regular};

    width: 80%;
    max-width: 1440px;

    h1 {
      font-size: ${fontSize.large};
      font-family: ${titleFont};
    }
    h2 {
      font-size: ${fontSize.medium};
    }

    p {
      font-size: ${fontSize.regular};
      line-height: 1.2;
    }
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  margin-top: ${spaceMargin.regular};
  background-color: ${colorPalette.yellow};
  margin: auto;
  padding: ${spaceMargin.regular} 0;
`;
const Box = styled.div``;
const Attributes = styled.ul``;

function AboutMe() {
  return (
    <SectionWrapper>
      <div>
        <h1>About me</h1>
        <h2>Skills & Attributes</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus
          rem sequi? Nihil, est impedit dignissimos consequatur totam, odit
          deserunt doloremque laudantium similique corrupti, iusto optio rerum
          in deleniti officia.
        </p>
        <SkillsContainer>
          <Box>
            <h3>학력 및 경력</h3>
            <Attributes>
              <li>2020.02 | 부산대학교 미술학과 졸업</li>
              <li>2020.02 | 부산대학교 미술학과 졸업</li>
              <li>2020.02 | 부산대학교 미술학과 졸업</li>
            </Attributes>
          </Box>
          <Box>
            <h3>학력 및 경력</h3>
            <Attributes>
              <li>2020.02 | 부산대학교 미술학과 졸업</li>
              <li>2020.02 | 부산대학교 미술학과 졸업</li>
              <li>2020.02 | 부산대학교 미술학과 졸업</li>
            </Attributes>
          </Box>
          <Box>
            <h3>학력 및 경력</h3>
            <Attributes>
              <li>2020.02 | 부산대학교 미술학과 졸업</li>
              <li>2020.02 | 부산대학교 미술학과 졸업</li>
              <li>2020.02 | 부산대학교 미술학과 졸업</li>
            </Attributes>
          </Box>
        </SkillsContainer>
      </div>
    </SectionWrapper>
  );
}

export default AboutMe;
