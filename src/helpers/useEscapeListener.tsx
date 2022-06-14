import { useEffect } from 'react';

type useEscapeListenerProps = {
  condition: boolean;
  callback(): void;
};

const useEscapeListener = ({ condition, callback }: useEscapeListenerProps) => {
  useEffect(() => {
    const onCloseListener = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && condition) {
        callback();
      }
    };

    window.addEventListener('keydown', onCloseListener, false);
    return () => window.removeEventListener('keydown', onCloseListener, false);
  });
};

export { useEscapeListener };
