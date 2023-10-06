import { SubTitle } from '../SubTitle';
import styles from './styles.module.scss';

import projectImage from '../../assets/images/mysflix.png';
import { Button } from '../Button';
import { FaArrowRight } from 'react-icons/fa';

export function Projects() {
    return (
        <>
            <SubTitle title="Portfolio"  subtitle="Projeto desenvolvidos"/>

            <div className={`${styles.projects}`}>
                <div className={`d-flex wrap justify-content-center gap-5 mt-5 ${styles.projectBox}`}>
                    <div className={styles.imgContainer}>
                        <img src={projectImage} alt="project-image" />
                    </div>
                    <div>
                        <h3 className='fw-bold'>MysFlix</h3>
                        <p className='mb-4'>Clonagem da interface da Netflix, <br />
                            desenvolvida com React, Styled <br />
                            Components e a API do The Movie <br />
                            Database (TMDb).
                        </p>
                        <Button>
                            <a href="/" target="_blank" rel="noreferrer">
                                Demo <FaArrowRight className="ms-5" 
                            />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}