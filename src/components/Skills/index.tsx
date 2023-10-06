import styles from './styles.module.scss';

import html from '../../assets/images/html-5.png';
import css from '../../assets/images/css-3.png'
import javascript from '../../assets/images/javascript.png'
import bootstrap from '../../assets/images/bootstrap.png'
import sass from '../../assets/images/sass.png'
import react from '../../assets/images/react.png'
import figma from '../../assets/images/figma.png'
import jest from '../../assets/images/jest.png'
import ux_ui from '../../assets/images/UX.png'

const skills = [
    {
        id:1,
        img: `${html}`
    },

    {
        id:2,
        img: `${css}`
    },

    {
        id:3,
        img: `${javascript}`
    },

    {
        id:4,
        img: `${bootstrap}`
    },

    {
        id:5,
        img: `${sass}`
    },

    {
        id:6,
        img: `${react}`
    },

    {
        id:7,
        img: `${figma}`
    },

    {
        id:8,
        img: `${jest}`
    },

    {
        id:9,
        img: `${ux_ui}`
    },

]

export function Skills() {
    return (
        <div className={styles.skills}>
            {skills.map((skill:any) => (
                <div key={skill.id} className={styles.imgContainer}>
                    <img src={skill.img} alt="skill-image" />
                </div>
            ))}
        </div>
    )
}