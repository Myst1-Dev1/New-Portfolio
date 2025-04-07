/* eslint-disable @typescript-eslint/no-explicit-any */
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export function BannerFunctionality() {
  const textRefs:any = useRef([]);

  const addToRefs:any = (el:string) => {
      if (el && !textRefs.current.includes(el)) {
          textRefs.current.push(el);
      }
  };

  useGSAP(() => {
      textRefs.current.forEach((textRef:any) => {
          const chars = textRef.textContent.split('');
          textRef.innerHTML = '';

          chars.forEach((char:string) => {
              const span = document.createElement('span');
              span.textContent = char;
              span.textContent = char === ' ' ? '\u00A0' : char;
              span.style.display = 'inline-block';
              span.style.transformOrigin = 'top'; 
              textRef.appendChild(span);
          });

          gsap.fromTo(
              textRef.children,
              { opacity: 0, scaleY:0 },
              { opacity: 1, scaleY:1, stagger: 0.2, duration: 0.2, ease: 'power1.inOut' }
          );
      });

      gsap.fromTo('.cube', { opacity:0 }, { opacity:1, duration:1, ease:'power1.inOut' });
      gsap.fromTo('.banner-icon', { x:-100, opacity:0 }, { x:0, rotate:360, delay:1, stagger: 0.4, opacity:1, duration:0.4, ease:'power1.inOut' });
      gsap.fromTo('#btn', { opacity:0 }, { opacity:1, delay:2, ease:'power1.inOut' });
  }, []);

    return {
        addToRefs
    }
}