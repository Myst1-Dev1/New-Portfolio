import { ContactFuncionality } from './contact';
import styles from './styles.module.scss';

// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { FaPaperPlane } from 'react-icons/fa';
// import { LatLngExpression } from 'leaflet';
// import L from 'leaflet';
// import customIconUrl from '../../../public/map-marker.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// const customIcon = new L.Icon({
//     iconUrl: customIconUrl,
//     iconSize: [32, 32],
//     iconAnchor: [16, 32],
//     popupAnchor: [0, -32],
// });

export function Contact() {
    const { form, sendEmail, error, isLoading, handlePhone } = ContactFuncionality();

    // const position: LatLngExpression = [-22.9068, -43.1729];

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: '#contact',
            start: 'top 90%',
            once: true,
            onEnter:() => {
                const tl = gsap.timeline({ defaults: { ease: 'sine', stagger:0.4, duration: 0.5 } });
                
                tl.fromTo('.ctn-title', { opacity:0, y:40 }, { opacity:1, y:0 });
                tl.fromTo('.input-box', { opacity:0, x:-100 }, { opacity:1, x:0 });
                tl.fromTo('.contact-btn', { opacity:0, scale:0 }, { opacity:1, scale:1.1, ease:'bounce.inOut' });
            }
        })
    }, []);

    return (
        <div id='contact'>
            <div className={`subtitle ctn-title d-flex flex-column gap-3 text-center ${styles.subtitle}`}>
                <h3 className='fw-bold'>Contato</h3>
                <h6>Entre em contato</h6>
            </div>

            <div className={`mt-5 container m-auto row ${styles.contact}`} id='contact'>
                <div className='col-md-6 d-flex flex-column gap-5 m-auto container mt-5'>
                    <form ref={form} onSubmit={sendEmail} className='d-flex flex-column gap-4'>
                        <div className='row'>
                            <div className={`input-box col-md-6 ${styles.inputBox}`}>
                                <input type="text" placeholder='Nome' name='nome' />
                                {error.nome && <span className='text-danger mt-2'>Preencha este campo</span>}
                            </div>
                            <div className={`input-box col-md-6 ${styles.inputBox}`}>
                                <input type="email" placeholder='Email' name='email' />
                                {error.email && <span className='text-danger mt-2'>Preencha este campo</span>}
                            </div>
                        </div>
                        <div className={`input-box ${styles.inputBox}`}>
                            <input type="tel" placeholder='Número' name='numero' onKeyUp={(e) => handlePhone(e)} maxLength={15} />
                            {error.numero && <span className='text-danger mt-2'>Preencha este campo</span>}
                        </div>
                        <div className={`input-box ${styles.inputBox}`}>
                            <textarea placeholder='Mensagem' name='mensagem' />
                            {error.mensagem && <span className='text-danger mt-2'>Preencha este campo</span>}
                        </div>
                        <div className='m-auto'>
                            <button className='contact-btn bg-dark' type='submit'>
                                {isLoading ? 
                                <div className="spinner-border text-light" role="status">
                                </div>
                                : <span className='text-light'>Enviar <FaPaperPlane className="text-light ms-1" /></span>}
                            </button>
                        </div>
                    </form>
                </div>
                {/* <div className={`${styles.map} map col-md-6 m-auto`}>
                    <MapContainer center={position} zoom={12} style={{ height: "400px" }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={position} icon={customIcon}>
                            <Popup>Localização</Popup>
                        </Marker>
                    </MapContainer>
                </div> */}
            </div>
        </div>
    );
}