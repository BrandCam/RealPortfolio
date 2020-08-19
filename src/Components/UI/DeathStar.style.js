import styled, { keyframes } from "styled-components";

//keyframes
const float = keyframes`
    0% {
        transform: translateY(0)
    }
    50% {
        transform: translateY(-6px)
    }
    100% {
        transform: translateY(0)
    }
`;

const pulse = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.8);
    }
    100% {
        transform: scale(1);
    }
`;

const movingStar = keyframes`
    0% {
        transform: translateX(-100px) scale(1);
        opacity: 0;
    }
    25% {
        transform: translateX(100px) scale(0.8);
    }
    50% {
        transform: translateX(200px) scale(1);
        opacity: 1;
    }
    75% {
        transform: translateX(300px) scale(0.8);
    }
    100% {
        transform: translateX(400px) scale(1);
        opacity: 0;
    }
`;
//Colors
const darkBlue = "#2ab2e0";
const lightBlue = "#4ee9fe";
const lightGrey = "rgba(80, 91, 98,0.8)";
const darkGrey = "rgba(53, 61, 65,0.5)";
const yellowOrange = "#f6ae2d";
//Death Star Colors
const dsDark = darkGrey;
const dsLight = lightGrey;
const starColor = lightBlue;

const DeathStarWrap = styled.div`
  margin-top: 15px;
  /* Death Star */
  .circle {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background-color: ${dsDark};
    position: absolute;
    left: 60px;
    top: 40px;
  }
  .moon1 {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    box-shadow: -28px 0 0 0 ${dsLight};
    position: absolute;
    left: 88px;
    top: 40px;
  }
  .shape {
    width: 14px;
    height: 30px;
    border-radius: 50% 50% 50% 50% / 52% 52% 48% 48%;
    background-color: ${dsDark};
    position: absolute;
    left: 76px;
    top: 66px;
    border: 8px solid ${dsLight};
    transform: rotate(26deg);
  }
  .circle2 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${dsLight};
    position: absolute;
    left: 70px;
    top: 66px;
  }
  .rectangle {
    width: 20px;
    height: 4px;
    background: ${dsLight};
    border-radius: 2px;
    position: absolute;
    left: 48px;
    top: 107px;
  }
  .rectangle2 {
    width: 46px;
    height: 4px;
    background: ${dsLight};
    border-radius: 2px;
    position: absolute;
    left: 56px;
    top: 136px;
  }
  .rectangle3 {
    width: 10px;
    height: 4px;
    background: ${dsDark};
    border-radius: 2px;
    position: absolute;
    left: 68px;
    top: 122px;
  }
  .rectangle4 {
    width: 10px;
    height: 4px;
    background: ${dsLight};
    border-radius: 2px;
    position: absolute;
    left: 94px;
    top: 122px;
  }
  .rectangle5 {
    width: 84px;
    height: 4px;
    background: ${dsLight};
    border-radius: 2px;
    position: absolute;
    left: 110px;
    top: 122px;
  }
  .rectangle6 {
    width: 10px;
    height: 4px;
    background: ${dsLight};
    border-radius: 2px;
    position: absolute;
    left: 202px;
    top: 122px;
  }
  .rectangle7 {
    width: 10px;
    height: 4px;
    background: ${dsLight};
    border-radius: 2px;
    position: absolute;
    left: 210px;
    top: 90px;
  }
  .rectangle8 {
    width: 32px;
    height: 6px;
    background: ${dsLight};
    border-radius: 3px;
    position: absolute;
    left: 194px;
    top: 100px;
  }
  .rectangle9 {
    width: 12px;
    height: 6px;
    background: ${dsLight};
    border-radius: 3px;
    position: absolute;
    left: 140px;
    top: 146px;
  }
  .rectangle10 {
    width: 30px;
    height: 6px;
    background: ${dsLight};
    border-radius: 3px;
    position: absolute;
    left: 154px;
    top: 156px;
  }
  .rectangle11 {
    width: 26px;
    height: 6px;
    background: ${dsLight};
    border-radius: 3px;
    position: absolute;
    left: 194px;
    top: 156px;
  }
  /* End Death Star */

  /* Up and  Down Floating */
  .float {
    animation: ${float} 3s linear infinite;
    transform-origin: 50% 50%;
  }

  /* Stars */
  .star {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom: 7px solid ${starColor};
    position: relative;
    top: -5px;
    left: -20px;
    opacity: 0;
  }
  .star:after {
    content: "";
    position: absolute;
    left: -5px;
    top: 7px;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top: 7px solid ${starColor};
  }
  .star-large {
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom: 14px solid ${starColor};
    position: relative;
    top: 30px;
    left: -30px;
    opacity: 0;
  }
  .star-large:after {
    content: "";
    position: absolute;
    left: -10px;
    top: 14px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top: 14px solid ${starColor};
  }

  /* In and Out Pulse */
  .pulse {
    animation: ${pulse} 2s linear infinite;
    transform-origin: 50% 50%;
  }

  /* Star animations */
  .moving-star1 {
    animation: ${movingStar} 6s linear infinite;
    transform-origin: 50% 50%;
    animation-delay: 2s;
  }
  .moving-star2 {
    animation: ${movingStar} 5.5s linear infinite;
    transform-origin: 50% 50%;
    animation-delay: 1s;
  }
  .moving-star3 {
    animation: ${movingStar} 6.5s linear infinite;
    transform-origin: 50% 50%;
    animation-delay: 4s;
  }
  .moving-star4 {
    animation: ${movingStar} 5s linear infinite;
    transform-origin: 50% 50%;
    animation-delay: 3s;
  }
  .moving-star5 {
    animation: ${movingStar} 6s linear infinite;
    transform-origin: 50% 50%;
    animation-delay: 0s;
  }
  .moving-star6 {
    animation: ${movingStar} 5.5s linear infinite;
    transform-origin: 50% 50%;
    animation-delay: 2s;
  }
  .moving-star7 {
    animation: ${movingStar} 5s linear infinite;
    transform-origin: 50% 50%;
    animation-delay: 5s;
  }
  .moving-star8 {
    animation: ${movingStar} 4s linear infinite;
    transform-origin: 50% 50%;
    animation-delay: 0s;
  }
  .moving-star9 {
    animation: ${movingStar} 5.5s linear infinite;
    transform-origin: 50% 50%;
    animation-delay: 3s;
  }
  .moving-star10 {
    animation: ${movingStar} 5s linear infinite;
    transform-origin: 50% 50%;
    animation-delay: 1s;
  }
`;

export default DeathStarWrap;
