import { useRef } from 'react';
import { Button } from '../Button';
import { SubTitle } from '../SubTitle';
import styles from './styles.module.scss';

import emailjs from '@emailjs/browser';
import { FaPhone, FaEnvelope, FaMapMarkedAlt, FaPaperPlane } from 'react-icons/fa';

export function Contact() {
    const form:any = useRef();

    function sendEmail(e:any) {
        e.preventDefault();

        emailjs.sendForm('service_88ls40o', 'template_qhba9q9', form.current, '7ywCWQ6iuPOTnxXC_')
          .then((result) => {
              alert('Mensagem enviada com sucesso !');
              console.log(result);
          }, (error) => {
              alert('Ocorreu um erro ao enviar a mensagem !');
              console.log('tivemos um erro', error)
          });
          e.target.reset();
    }

    return (
        <div id='contact'>
            <SubTitle title="Contato" subtitle="Entre em contato" />

            <div data-aos="zoom-out-left" className={styles.contact} id='contact'>
                <div className='row m-auto container mt-5'>
                    <div className={`col-md-6 mb-4 d-flex flex-column gap-3 ${styles.contactContainer}`}>
                        <div className='d-flex gap-3'>
                            <FaPhone className={styles.icon} />
                            <div>
                                <h5 className='fw-bold'>Número</h5>
                                <h6>21 9 6475-7806</h6>
                            </div>
                        </div>
                        <div className='d-flex gap-3'>
                            <FaEnvelope className={styles.icon} />
                            <div>
                                <h5 className='fw-bold'>Email</h5>
                                <h6>danteopzz@hotmail.com</h6>
                            </div>
                        </div>
                        <div className='d-flex gap-3'>
                            <FaMapMarkedAlt className={styles.icon} />
                            <div>
                                <h5 className='fw-bold'>Localização</h5>
                                <h6>Brasil - Rio de Janeiro</h6>
                            </div>
                        </div>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className='col-md-6 d-flex flex-column gap-4'>
                        <div className='row'>
                            <div className={`col-md-6 ${styles.inputBox}`}>
                                <input type="text" placeholder='Nome' name='nome' />
                            </div>
                            <div className={`col-md-6 ${styles.inputBox}`}>
                                <input type="email" placeholder='Email' name='email' />
                            </div>
                        </div>
                        <div className={styles.inputBox}>
                            <input type="tel" placeholder='Número' name='numero' />
                        </div>
                        <div className={styles.inputBox}>
                            <textarea placeholder='Mensagem' name='mensagem' />
                        </div>
                        <Button type='submit'>
                            Enviar <FaPaperPlane className="text-light ms-5" />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}