import { keyframes } from "styled-components"

export const titleKeyFrame = keyframes `

0% {
        transform: translateY(-600px) rotateX(-30deg) scale(0);
        transform-origin: 50% 100%;
        color:lightSteelBlue;
    opacity: 0;
  }
  100% {
        transform: translateY(0) rotateX(0) scale(1);
        transform-origin: 50% 1400px;
        color: blue;
    opacity: 1;
  }

`