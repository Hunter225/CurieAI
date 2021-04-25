import { useEffect, useState } from 'react';

interface DelayRenderInterface {
  children: any;
  delayTime: number;
}

export const DelayRender = ({ children, delayTime }: DelayRenderInterface) => {
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, delayTime);
  }, [delayTime]);

  return isShown ? children : null;
};
