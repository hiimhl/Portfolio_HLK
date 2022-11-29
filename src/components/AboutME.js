import styled from "styled-components";
import {
  colorPalette,
  fontSize,
  fontWeight,
  spaceMargin,
  titleFont,
} from "../style";

// export const SectionWrapper = styled.section`
//   background-color: ${(props) => props.bgColor || colorPalette.white.basic};
//   width: 100%;
//   height: auto;

//   & > div {
//     // Contents
//     margin: ${spaceMargin.section} auto;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     text-align: center;

//     gap: ${spaceMargin.regular};

//     width: 80%;
//     max-width: 1440px;

//     h1 {
//       font-size: ${fontSize.large};
//       font-family: ${titleFont};
//       margin-bottom: ${spaceMargin.regular};
//     }
//     h2 {
//       font-size: ${fontSize.medium};
//     }

//     p {
//       font-size: ${fontSize.regular};
//       line-height: 1.2;
//     }
//   }
// `;

// const SkillsContainer = styled.div`
//   width: 100%;
//   margin-top: ${spaceMargin.regular};
//   background-color: ${colorPalette.yellow};
//   margin: auto;
//   margin-top: ${spaceMargin.medium};
//   padding: ${spaceMargin.medium};
//   /* gap: ${spaceMargin.medium}; */

//   display: flex;
//   justify-content: space-around;
// `;

// const Box = styled.div`
//   h3 {
//     font-size: ${fontSize.regular};
//     font-weight: ${fontWeight.bold};
//     margin-bottom: ${spaceMargin.medium};
//   }
// `;

// const ColorBox = styled.span`
//   display: inline;
//   border-radius: 5px;
//   width: 100px;
//   height: 100px;
//   background-color: ${(props) => props.bgColor};
// `;
// const Line = styled.div`
//   width: 1px;
//   height: auto;
//   /* background-color: #58beb3;
//   background-color: #b1d9d5;
//   background-color: #faefee; */
// `;
// const Attributes = styled.ul`
//   text-align: left;
//   li {
//     margin-bottom: ${spaceMargin.small};
//   }
// `;

function AboutMe() {
  return (
    <div>hi</div>
    // <SectionWrapper>
    //   <div>
    //     <h1>About me</h1>

    //     <ColorBox bgColor="#">main</ColorBox>
    //     <ColorBox bgColor="#58beb3">pick</ColorBox>
    //     <ColorBox bgColor="#b1d9d5"></ColorBox>
    //     <ColorBox bgColor="#e7eae9"></ColorBox>
    //     {/* <h2>Skills & Attributes</h2> */}
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus
    //       rem sequi? Nihil, est impedit dignissimos consequatur totam, odit
    //       deserunt doloremque laudantium similique corrupti, iusto optio rerum
    //       in deleniti officia.
    //     </p>
    //     <SkillsContainer>
    //       <Box>
    //         <h3>학력 및 경력</h3>
    //         <Attributes>
    //           <li>2020.02 | 부산대학교 미술학과 졸업</li>
    //           <li>2020.02 | 부산대학교 미술학과 졸업</li>
    //           <li>2020.02 | 부산대학교 미술학과 졸업</li>
    //         </Attributes>
    //       </Box>
    //       <Line />
    //       <Box>
    //         <h3>언어 및 프레임워크</h3>
    //         <Attributes>
    //           <li>HTML</li>
    //           <li>CSS</li>
    //           <li>JavaScript</li>
    //           <li>React.js</li>
    //         </Attributes>
    //       </Box>
    //       <Line />

    //       <Box>
    //         <h3>기타 자격증</h3>
    //         <Attributes>
    //           <li>VsCode Studio</li>
    //           <li>포토샵 1급</li>
    //           <li>일러스트레이터 1급</li>
    //         </Attributes>
    //       </Box>
    //     </SkillsContainer>
    //   </div>
    // </SectionWrapper>
  );
}

export default AboutMe;
