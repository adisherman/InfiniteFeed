import {useEffect} from 'react';

const useOnUnmount = (onUnmount: () => void) =>
  useEffect(() => {
    return () => onUnmount && onUnmount();
  }, [onUnmount]);

export default useOnUnmount;
