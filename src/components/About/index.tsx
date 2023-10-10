import { Button } from '../Button';
import { SubTitle } from '../SubTitle';
import styles from './styles.module.scss';

import aboutImage from '../../assets/images/aboutImage.jpg';
import { Formation } from '../Formation';

export function About() {
    return (
        <div id='about' className={`container mb-5 ${styles.about}`}>
            <SubTitle title="Sobre" subtitle="Quem eu sou"/>

            <div data-aos="fade-left" className='mt-5 row justify-content-center'>
                <div className={`col-md-4 d-flex flex-column gap-4 mb-5 ${styles.aboutSubtitles}`}>
                    <p>
                        Desenvolvedor Front-End com Especialização em ReactJS/Next.js, Comprometido
                        em Proporcionar a Melhor Experiência aos Usuários através de Interfaces Interativas.
                        Busco a evolução contínua para impulsionar mudanças e pretendo me tornar um 
                        Desenvolvedor Sênior com Expertise.
                    </p>
                    <Button>
                        <a 
                            target="_blank" rel="noreferrer"
                            href="https://www.canva.com/design/DAE2ZI86tZU/FtGwpZgbUYorBDoE4j76sQ/view?utm_content=DAE2ZI86tZU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
                            Download cv
                        </a>
                        </Button>
                </div>
                <div className={`col-md-4 mb-5 ${styles.imgContainer}`}>
                    <img className='img-fluid' src={aboutImage} alt="about-image" />
                </div>
                <div className='col-md-4'>
                    <Formation />
                </div>
            </div> 
        </div>
    )
}