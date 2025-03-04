import { SubmitHandler, useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
// import reCAPTCHA from "react-google-recaptcha"

type FormData = {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const params = {
      name: data.name,
      email: data.email,
      message: data.message,
    }
    emailjs
      .send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, params, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then(() => {
        alert('Formulaire bien envoyé ! ')
      })
      .catch((error) => console.log(error))
    reset()
  }

  return (
    <div className='form-container' id='contact'>
      <h2 className='title'>CONTACT</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Envie d'échanger ? N'hésitez pas à m'envoyer un message !</p>
        <div className='form-inputs'>
          <div className='form-input'>
            <input
              type='text'
              placeholder='name'
              {...register('name', { required: true })}
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name?.type === 'required' && (
              <p className='error' role='alert'>
                Veuillez indiquer un nom
              </p>
            )}
          </div>
          <div className='form-input'>
            <input
              type='email'
              placeholder='mail'
              {...register('email', { required: true })}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email?.type === 'required' && (
              <p className='error' role='alert'>
                Veuillez indiquer un email
              </p>
            )}
          </div>
        </div>
        <textarea
          rows={8}
          placeholder='message'
          {...register('message', { required: true })}
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        {errors.message?.type === 'required' && (
          <p className='error' role='alert'>
            Veuillez laisser un message
          </p>
        )}
        <input
          className='btn input-submit'
          type='submit'
          value='Envoyer'
        />
      </form>
    </div>
  )
}

export default Contact
