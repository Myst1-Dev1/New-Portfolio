import styles from './styles.module.scss';

import html from '../../assets/images/html-5.png';
import css from '../../assets/images/css-3.png'
import javascript from '../../assets/images/javascript.png'
import typescript from '../../assets/images/typescripticon.png';
import bootstrap from '../../assets/images/bootstrap.png'
import tailwind from '../../assets/images/tailwindIcon.png';
import sass from '../../assets/images/sass.png'
import react from '../../assets/images/react.png'
import figma from '../../assets/images/figma.png'
import jest from '../../assets/images/jest.png'
import { SubTitle } from '../SubTitle';

type SkillsType = {
    id:number,
    img:string,
    name:string
}

const skills = [
    {
        id:1,
        img: `${html}`,
        name:'Html'
    },

    {
        id:2,
        img: `${css}`,
        name: 'Css'
    },

    {
        id:3,
        img: `${javascript}`,
        name: 'Javascript'
    },
    {
        id:4,
        img: `${typescript}`,
        name: 'Typescript'
    },

    {
        id:5,
        img: `${bootstrap}`,
        name: 'Bootstrap'
    },

    {
        id:6,
        img: `${tailwind}`,
        name: 'Tailwind'
    },

    {
        id:7,
        img: `${sass}`,
        name: 'Sass'
    },

    {
        id:8,
        img: `${react}`,
        name: 'React'
    },

    {
        id:9,
        img: `${figma}`,
        name: 'Figma'
    },

    {
        id:10,
        img: `${jest}`,
        name: 'Jest'
    },

]

export function Skills() {
    return (
        <div id='skills' className={styles.skills}>
            <SubTitle title="Habilidades" subtitle="Ferramentas que utilizo em meus projetos" />
            <div data-aos="fade-up-left" className={`container mt-5 mb-5 ${styles.skillsContainer}`}>
                {skills.map((skill:SkillsType) => (
                    <div key={skill.id} className={`d-flex align-items-center flex-column gap-3 
                        ${styles.skillBox}`}>
                        <div className={styles.imgContainer}>
                            <img src={skill.img} alt="skill-image" />
                        </div>
                        <h6 className='text-center'>{skill.name}</h6>
                    </div>
                ))}
            </div>
        </div>
    )
}