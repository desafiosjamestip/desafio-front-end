const animations = {
  rotate: `
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }`,
  fadeIn: `
  @keyframes fade-in {
    from {
      opacity: 0;
    }
  }

  animation: fade-in 0.3s ease-in-out;
  `,
} as const;

export { animations };
