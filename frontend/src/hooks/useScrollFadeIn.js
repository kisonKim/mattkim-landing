import { useCallback, useEffect, useRef } from 'react';

export const useScrollFadeIn = ({threshold,delay}) => {
  const dom = useRef();
  
  const handleScroll = useCallback(([entry]) => {
    const { current } = dom;
    
    if(entry.isIntersecting) {
      // 원하는 이벤트를 추가 할 것
      current.style.transitionProperty = 'opacity transform';
      current.style.transitionDuration = '.7s';
      current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
      current.style.transitionDelay = delay+'s';
      current.style.opacity = 1;
      current.style.transform = 'translate3d(0, 0, 0)';
    }
  }, []); 
  
  useEffect(() => {
    let observer;
    const { current } = dom;
    
    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold });
      observer.observe(current);
      
      return () => observer && observer.disconnect();
    };
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: 'translate3d(0, 30%, 0)',
    }
  };
};

