/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import styles from './style.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import { projects } from '../Projects/project';
import { SubTitle } from '../SubTitle';

type PerspectiveImagesType = {
    id:number;
    perspectiveImg:string;
}

type ProjectDetailsDataType = {
    id:number;
    img:string;
    title:string;
    description:string;
    link:string
    perspectiveImages:PerspectiveImagesType
}

export function ProjectsNew() {
    const [showDetails, setShowDetails] = useState(false);
    const [projectDetailsData, setProjectDetailsData] = useState<ProjectDetailsDataType[] | any>([]);

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

    useGSAP(() => {
        gsap.to('.box-details', { opacity:1, y: 100, ease:'bounce', duration:0.8, });
    }, [showDetails]);

    useGSAP(() => {
        if(!showDetails) {
        gsap.fromTo('.box', { opacity:0, y:0 }, { opacity:1, y:20, ease:'bounce', stagger:0.4, duration:0.4, 
            scrollTrigger: { trigger:'.box', scrub:1, once:true, toggleActions: 'start none none none' }
         });
        }
         ScrollTrigger.refresh();
    }, [showDetails]);

    return (
        <div id='projects' className={`${styles.portfolioNew} mt-5 mb-5`}>
            <SubTitle title="Portfolio" subtitle="Projetos em Destaque"/>
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
                <div>
                    {projectDetailsData.map((data:any) => (
                    <div key={data.id} className={`${styles.projectDetails} box-details text-center`}>
                        <h2>Detalhes do Projeto</h2>
                            <div className={styles.container}>
                            <div className={styles.imgContainer}>
                                <img className='perspectiveImage' src={data.img} alt="imagem do projeto" />
                            </div>
                            <div className={`${styles.details}`}>
                                <div className='d-flex justify-content-between align-items-center w-100'>
                                    <h6>{data.title}</h6>
                                    <FaTimes onClick={() => setShowDetails(false)} className={styles.icon} />
                                </div>
                                <p>{data.description}</p>
                                <a href={data.link} target='_blank'>
                                    <button className='fw-bold d-flex justify-content-between align-items-center text-light'>Demo <FaArrowRight /></button>
                                </a>
                            </div>
                        </div>
                    </div>))}
                </div>
            )}
        </div>
    )
}