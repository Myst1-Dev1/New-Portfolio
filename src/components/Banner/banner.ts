import { useEffect, useState } from 'react';

export function BannerFunctionality() {
    const letters = "Olá, eu sou o João".split("");
    const ocupattionLetters = "Desenvolvedor Front End".split("");
    const [animate, setAnimate] = useState(false);
  
    useEffect(() => {
      setTimeout(() => setAnimate(true), 100);
    }, []);

    return {
        letters,
        ocupattionLetters,
        animate
    }
}