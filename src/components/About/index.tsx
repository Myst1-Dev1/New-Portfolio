import { Button } from '../Button';
import { SubTitle } from '../SubTitle';
import styles from './styles.module.scss';

import userPortfolioImage from '../../assets/images/userPortfolioImage.jpg';
import cv from '../../assets/file/Currículo.pdf';
import { Formation } from '../Formation';

export function About() {

    function handleDownloadCV() {
        const link = document.createElement('a');

        // Define o atributo "download" para o nome do arquivo desejado
        link.download = 'Curriculo_4.pdf';
    
        // Obtém a URL do arquivo
        link.href = cv;
    
        // Adiciona o link ao documento
        document.body.appendChild(link);
    
        // Aciona o clique no link para iniciar o download
        link.click();
    
        // Remove o link do documento
        document.body.removeChild(link);
    }

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
                    <Button onClick={handleDownloadCV}>
                        Download cv
                    </Button>
                </div>
                <div className={`col-md-4 mb-5 ${styles.imgContainer}`}>
                    <img className='img-fluid' src={userPortfolioImage} alt="about-image" />
                </div>
                <div className='col-md-4'>
                    <Formation />
                </div>
            </div> 
        </div>
    )
}