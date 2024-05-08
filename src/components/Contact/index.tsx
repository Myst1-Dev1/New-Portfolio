import { Button } from '../Button';
import { SubTitle } from '../SubTitle';
import { ContactFuncionality } from './contact';
import styles from './styles.module.scss';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { FaPhone, FaEnvelope, FaMapMarkedAlt, FaPaperPlane } from 'react-icons/fa';
import { LatLngExpression } from 'leaflet';

export function Contact() {
    const { form, sendEmail } = ContactFuncionality();

    const position:LatLngExpression | undefined = [-22.77709907415005, -42.967335232971834];

    return (
        <div id='contact'>
            <SubTitle title="Contato" subtitle="Entre em contato" />

            <div data-aos="zoom-out-left" className={`container m-auto row ${styles.contact}`} id='contact'>
                <div className='col-md-6 d-flex flex-column gap-5 m-auto container mt-5'>
                    <div className={`mb-4 d-flex wrap justify-content-center gap-4 ${styles.contactContainer}`}>
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
                    <form ref={form} onSubmit={sendEmail} className='d-flex flex-column gap-4'>
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
                        <div className='m-auto'>
                            <Button type='submit'>
                                Enviar <FaPaperPlane className="text-light ms-5" />
                            </Button>
                        </div>
                    </form>
                </div>
                <div className={`${styles.map} col-md-6 m-auto`}>
                    <MapContainer center={position} zoom={12} style={{ height: "400px" }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={position}>
                            <Popup>Localização</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}