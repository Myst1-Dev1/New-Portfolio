/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export function ContactFuncionality() {
  const [error, setError] = useState({
    nome: false,
    email: false,
    numero: false,
    mensagem: false,
  });
  const [isLoading, setIsloading] = useState(false);
  const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const form: any = useRef();

  function phoneMask(value: string) {
    if (!value) return "";
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  }

  function handlePhone(e: FormEvent | any) {
    const input = e.target;
    input.value = phoneMask(input.value);
  }

  async function sendEmail(e: FormEvent | any) {
    e.preventDefault();

    try {
      const formData = new FormData(form.current);
      const data = Object.fromEntries(formData.entries());
      const newError = {
        nome: data.nome === '',
        email: data.email === '',
        numero: data.numero === '',
        mensagem: data.mensagem === '',
      };

      setError(newError);

      if (Object.values(newError).some(field => field)) {
        return;
      }

      setIsloading(true);
      await emailjs.sendForm('service_88ls40o', 'template_qhba9q9', form.current, '7ywCWQ6iuPOTnxXC_')
        .then(() => {
          setAlert({ message: 'Mensagem enviada com sucesso!', type: 'success' });
          e.target.reset();
        }, (error: any) => {
          setAlert({ message: 'Ocorreu um erro ao enviar a mensagem!' + error, type: 'error' });
        });

      e.target.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  }

  return {
    form,
    sendEmail,
    error,
    isLoading,
    handlePhone,
    alert,
    setAlert
  };
}
