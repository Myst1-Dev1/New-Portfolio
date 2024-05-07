import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function ContactFuncionality() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const form:any = useRef();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

      return {
        form,
        sendEmail
      }
}