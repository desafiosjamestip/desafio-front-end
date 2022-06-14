import styled from 'styled-components/macro';
import { animations } from '../../tokens';

const ProgressIndicatorWrapper = styled.div<{ size: number }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`;

const ProgressIndicatorSvg = styled.svg`
  ${animations.rotate}
  animation: rotate 2s linear infinite;
  transform-origin: center center;
`;

const ProgressIndicatorPath = styled.circle<{ color: string }>`
  @keyframes dash {
    0% {
      stroke-dasharray: 1px, 200px;
      stroke-dashoffset: 0px;
    }
    50% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -15px;
    }
    100% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -125px;
    }
  }

  animation: dash 2s ease-in-out infinite;
  fill: none;
  stroke-dasharray: 80px, 200px;
  stroke-dashoffset: 0px;
  stroke: ${(props) => props.color};
  stroke-linecap: round;
`;

export {
  ProgressIndicatorWrapper,
  ProgressIndicatorSvg,
  ProgressIndicatorPath,
};
