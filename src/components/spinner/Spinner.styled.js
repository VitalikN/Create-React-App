import styled from "@emotion/styled";
/***
 * Spinner
 */

export const Box = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
`;

export const Ring = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin: -30px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top: 4px solid #24ecff;
  animation: beesLine 1.5s linear infinite;
  @keyframes beesLine {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  &::before {
    content: "";
    position: absolute;
    top: 12px;
    right: 12px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background: #24ecff;
    box-shadow: 0 0 0 5px #24ecff33, 0 0 0 10px #24ecff22, 0 0 0 20px #24ecff11,
      0 0 20px #24ecff, 0 0 50px #24ecff;
  }
  &:nth-child(2) {
    animation: beesLine2 1.5s linear infinite;
    animation-delay: -1s;
    border-top: 4px solid transparent;
    border-left: 4px solid #93ff2d;
  }
  @keyframes beesLine2 {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  &:nth-child(2)::before {
    content: "";
    position: absolute;
    top: initial;
    bottom: 12px;
    left: 12px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background: #93ff2d;
    box-shadow: 0 0 0 5px #93ff2d33, 0 0 0 10px #93ff2d22, 0 0 0 20px #93ff2d11,
      0 0 20px #93ff2d, 0 0 50px #93ff2d;
  }

  &:nth-child(3) {
    animation: beesLine2 1.5s linear infinite;
    animation-delay: -3s;
    position: absolute;
    top: 40%;
    border-top: 4px solid transparent;
    border-left: 4px solid #e41cf8;
  }

  &:nth-child(3)::before {
    content: "";
    position: absolute;
    top: initial;
    bottom: 12px;
    left: 12px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background: #e41cf8;
    box-shadow: 0 0 0 5px #e41cf833, 0 0 0 10px #e41cf822, 0 0 0 20px #e41cf811,
      0 0 20px #e41cf8, 0 0 50px #e41cf8;
  }
`;

/**
 * 
 * 
 * 

 */

// .container p {
//     position: absolute;
//     color: #fff;
//     font-size: 2.5em;
//     font-family: monospace;
//     bottom: -80px;
//     letter-spacing: 0.15em;
// }
