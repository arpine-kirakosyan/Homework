import { useEffect, useRef, useState } from 'react';
import { useIntersection } from '../hooks/useIntersection';

import '../assets/scss/Loadable.css';

const intersectionOptions = {
  threshold: 0.2,
}

const Loadable = ({ src }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const isIntersecting = useIntersection(containerRef, intersectionOptions);

  useEffect(() => {
    if (isLoaded || !isIntersecting) return;

    if (imageRef.current) {
      imageRef.current.onload = () => setIsLoaded(true);
    }
  }, [isLoaded, isIntersecting]);

  return (
    <div ref={containerRef} className={`loadable-container${isLoaded ? ' loadable-container-loaded' : ''}`}>
      {
        (isLoaded || isIntersecting) && (
          <img
            ref={imageRef}
            src={src}
            alt={src}
            className={`loadable-item${isLoaded ? ' loadable-item-loaded' : ''}`}
          />
        )
      }
    </div>
  );
};

export default Loadable;
