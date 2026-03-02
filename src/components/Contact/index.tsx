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
            onEnter: () => {
                const tl = gsap.timeline({ defaults: { ease: 'sine', stagger: 0.4, duration: 0.5 } });

                tl.fromTo('.ctn-title', { opacity: 0, y: 40 }, { opacity: 1, y: 0 });
                tl.fromTo('.input-box', { opacity: 0, x: -100 }, { opacity: 1, x: 0 });
                tl.fromTo('.contact-btn', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1.1, ease: 'bounce.inOut' });
            }
        })
    }, []);

    return (
        <div id='contact' className='py-24'>
            <div className="ctn-title text-center mb-16 space-y-3">
                <span className="text-gray-600 font-semibold tracking-widest uppercase text-sm">Contato</span>
                <h3 className="text-4xl md:text-5xl font-black text-gray-500">Entre em contato</h3>
                <div className="w-20 h-1.5 bg-gray-600 mx-auto rounded-full"></div>
            </div>

            <div id='contact'>
                <div className='col-md-6 d-flex flex-column gap-5 m-auto container mt-5'>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-5'>
                            <div className={`input-box`}>
                                <input type="text" className='border border-gray-300 p-3 bg-transparent rounded-lg w-full outline-none' placeholder='Nome' name='nome' />
                                {error.nome && <span className='text-red-600 py-2'>Preencha este campo</span>}
                            </div>
                            <div className='input-box'>
                                <input type="email" className='border border-gray-300 p-3 bg-transparent rounded-lg w-full outline-none' placeholder='Email' name='email' />
                                {error.email && <span className='text-red-600 py-2'>Preencha este campo</span>}
                            </div>
                        </div>
                        <div className='input-box'>
                            <input type="tel" className='border border-gray-300 p-3 bg-transparent rounded-lg w-full outline-none' placeholder='Número' name='numero' onKeyUp={(e) => handlePhone(e)} maxLength={15} />
                            {error.numero && <span className='text-red-600 py-2'>Preencha este campo</span>}
                        </div>
                        <div className='input-box'>
                            <textarea placeholder='Mensagem' className='border border-gray-300 resize-none h-32 p-3 bg-transparent rounded-lg w-full outline-none' name='mensagem' />
                            {error.mensagem && <span className='text-red-600 py-2'>Preencha este campo</span>}
                        </div>
                        <div className='m-auto'>
                            <button className='contact-btn w-fit p-3 rounded-lg bg-cyan-600 text-white transition-all duration-500 hover:bg-cyan-700' type='submit'>
                                {isLoading ?
                                    <div role="status" className="grid place-items-center m-auto">
                                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-cyan-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                    </div>
                                    : <span className='flex items-center justify-center gap-3 font-bold'>Enviar <FaPaperPlane /></span>}
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