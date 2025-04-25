/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react';
import styles from './style.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import { projects } from '../Projects/project';
import { ProjectDetailsDataType } from '../../types/project';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import github from "../../assets/images/github.png";

gsap.registerPlugin(ScrollToPlugin);

export function ProjectsNew() {
    const [showDetails, setShowDetails] = useState(false);
    const [projectDetailsData, setProjectDetailsData] = useState<ProjectDetailsDataType[] | any>([]);

    const containerRef:any = useRef(null);
    const animationRef:any = useRef(null);

    function handleShowProjectDetails(index:number, id:number) {
        gsap.to(`.box`, {
            y: -100,
            opacity: 0,
            duration: 1,
            onComplete: () => {
                setShowDetails(true);
            }
        });

        gsap.to(`.box:not(.box-${index})`, {
            x: (i) => (i % 2 === 0 ? -100 : 100),
            opacity: 0,
            duration: 1,
        });

        const data = projects.filter(project => project.id === id);

        setProjectDetailsData(data);
    }

    const scrollSmooth = (direction = 'down', speed = 2.5) => {
        const container = containerRef.current;
        const maxScroll = container.scrollHeight - container.clientHeight;
      
        const step = () => {
          if (direction === 'down') {
            if (container.scrollTop < maxScroll) {
              container.scrollTop += speed;
              animationRef.current = requestAnimationFrame(step);
            }
          } else {
            if (container.scrollTop > 0) {
              container.scrollTop -= speed;
              animationRef.current = requestAnimationFrame(step);
            }
          }
        };
      
        cancelAnimationFrame(animationRef.current);
        animationRef.current = requestAnimationFrame(step);
      };
      
      const handleMouseEnter = () => scrollSmooth('down', 2.5); // desce suave
      const handleMouseLeave = () => {
        cancelAnimationFrame(animationRef.current);
        containerRef.current.scrollTop = 0;
      };

    useGSAP(() => {
        if(showDetails) {
            gsap.to('.box-details', { opacity:1, y: 100, ease:'bounce', duration:0.8, });
            gsap.to(window, { scrollTo: { y: "#projectDetails", offsetY: 50 }, duration: 0.3, ease: "sine" });
        }
    }, [showDetails]);

    useGSAP(() => {
        if(!showDetails) {
            ScrollTrigger.create({
                trigger: '#projects',
                start: 'top 90%',
                once: true,
                onEnter:() => {
                    gsap.fromTo('.projects-title', { opacity:0, y:40 }, { opacity:1, y:0, duration:0.4, ease:'sine' });
                    gsap.fromTo('.box', { opacity:0, y:0 }, { opacity:1, y:20, ease:'bounce', stagger:0.4, duration:0.4 });
                }
            });
        }
        //  ScrollTrigger.refresh();
    }, [showDetails]);

    return (
        <div id='projects' className={`${styles.portfolioNew} mt-5 mb-5`}>
            <div className={`subtitle projects-title d-flex flex-column gap-3 text-center ${styles.subtitle}`}>
                <h3 className='fw-bold'>Portfolio</h3>
                <h6>Projetos em destaque</h6>
            </div>
            {!showDetails ? (
                <div className={`${styles.projectNew} box-container`}>
                    <div className={`row justify-content-center ${styles.container}`}>
                        {projects.map((project, i) => (
                            <div key={project.id} className={`col-md-4 mb-4 box box-${i + 1} ${styles.box}`}>
                                <img src={project.img} alt="imagem do projeto" />
                                <button onClick={() => handleShowProjectDetails(i + 1, project.id)}>Saiba mais</button>
                            </div>
                        ))}
                    </div>
            </div>
            ) : (
                <div id='projectDetails'>
                    {projectDetailsData.map((data:any) => (
                    <div key={data.id} className={`${styles.projectDetails} box-details text-center`}>
                        <h2>Detalhes do Projeto</h2>
                            <div className={styles.container}>
                            <div 
                                ref={containerRef}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                className={`${styles.imgContainer} scrollDontShow`}>
                                <img className='perspectiveImage' src={data.img} alt="imagem do projeto" />
                            </div>
                            <div className={`${styles.details}`}>
                                <div className='d-flex justify-content-between align-items-center w-100'>
                                    <h6>{data.title}</h6>
                                    <FaTimes onClick={() => setShowDetails(false)} className={styles.icon} />
                                </div>
                                <div className={`${styles.techs}`}>
                                    {data.techs?.map((tech:any) => (
                                        <img key={tech.id} src={tech.img} alt="imagens das ferramentas usadas para o desenvolvimento do projeto" />
                                    ))}
                                    <a href={data.githubLink} target='_blank'><img src={github} alt="logo do github" /></a>
                                </div>
                                <p>{data.description}</p>
                                <a href={data.link} target='_blank'>
                                    <button className='fw-bold d-flex gap-3 align-items-center text-light'>{data.demo === true ? 'Demo' : 'Em andamento'} <FaArrowRight /></button>
                                </a>
                            </div>
                        </div>
                    </div>))}
                </div>
            )}
        </div>
    )
}