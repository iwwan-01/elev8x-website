import Link from 'next/link'
import { useState } from 'react'

const Contact = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:contact@elev8x.eu?subject=Contact Request - ${firstName} ${lastName}&body=This email was automatically generated from the form you filled in.%0A%0APlease ensure that the information you have provided is correct.%0A%0AFirst Name: ${firstName}%0A%0ALast Name: ${lastName}%0A%0AEmail: ${email}%0A%0APhone (optional): ${phone}%0A%0AHow we can help you?:%0A%0A${message}%0A%0A`
    window.location.href = mailtoLink
  }

  return (
    <section id='contact' className='scroll-mt-4'>
      {/* Main Wrapper */}
      <div className='flex justify-center items-center overflow-x-hidden'>
        <div className='flex flex-col lg:flex-row justify-center gap-x-8 gap-y-16 items-center lg:py-16 py-8 lg:px-64 w-full container'>
          {/* Left Container Wrapper */}
          <div className='flex flex-col justify-center lg:items-start items-center font-poppins w-full gap-y-6 container'>
            {/* Heading Container */}
            <div className='flex flex-col lg:px-20 px-10 gap-y-4'>
              <h3 className='text-xl uppercase font-bold'>Contact us</h3>
              <h1 className='text-6xl font-bold'>Let's Talk!</h1>
            </div>
            {/* Form Container */}
            <div className='rounded-xl border-neutral-200 border w-full h-full z-0 p-6'>
              {/* Heading Container */}
              <div className='p-2 pl-3'>
                <h3 className='text-md font-bold uppercase'>Let's Talk!</h3>
              </div>
              <form className='flex flex-col p-2' onSubmit={handleSubmit}>
                {/* Input Wrapper */}
                <div className='flex flex-col lg:flex-row gap-x-6'>
                  {/* Left Side Input */}
                  <div className='w-full'>
                    <div className='flex flex-col'>
                      <label className='text-sm font-semibold px-1.5 py-1.5'>
                        First Name
                      </label>
                      <input
                        className='rounded-xl bg-neutral-100 text-sm w-full h-8 p-2 outline-none z-10'
                        type='text'
                        name='fname'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>

                    <div className='flex flex-col'>
                      <label className='text-sm font-semibold px-1.5 py-1.5'>
                        Last Name
                      </label>
                      <input
                        className='rounded-xl bg-neutral-100 text-sm w-full h-8 p-2 outline-none z-10'
                        type='text'
                        name='lname'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  {/* Right Side Input */}
                  <div className='w-full'>
                    <div className='flex flex-col'>
                      <label className='text-sm font-semibold px-1.5 py-1.5'>
                        Email
                      </label>
                      <input
                        className='rounded-xl bg-neutral-100 w-full text-sm h-8 p-2 outline-none z-10'
                        type='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className='flex flex-col'>
                      <label className='text-sm font-semibold px-1.5 py-1.5 whitespace-nowrap'>
                        Phone (optional)
                      </label>
                      <input
                        className='rounded-xl bg-neutral-100  w-full h-8 p-2 outline-none z-10'
                        type='tel'
                        name='phone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                {/* Text Area */}
                <div className='flex flex-col'>
                  <label className='text-sm font-semibold px-1.5 py-1.5'>
                    How we can help you?
                  </label>
                  <textarea
                    className='bg-neutral-100 rounded-xl outline-none p-2'
                    cols={7}
                    rows={7}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                  {/* Send Button */}
                  <input
                    className='flex justify-center items-center rounded-3xl bg-orange uppercase font-bold cursor-pointer w-full h-10 mt-4 mb-0'
                    type='submit'
                    value='Send'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
