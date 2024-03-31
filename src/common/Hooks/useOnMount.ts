import {useEffect, useRef} from 'react';

export const useOnMount = (callback: () => void) => {
  const ref = useRef<any>();
  useEffect(() => {
    const isMounted = !!ref.current;
    if (!isMounted) {
      callback && callback();
      ref.current = true;
    }
  }, [callback]);
};
export default useOnMount;
