import React, { useState } from 'react';

function ContactForm(){
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleMessageChange = (e) => {
      setMessage(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePhoneChange = (e) => {
        setPhone(e.target.value);
      };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    };
    return(
        <div className="flex flex-col py-8 relative border-slate-600">
            {/* heading of the contact form */}
            <div className="text-black text-3xl font-bold text-center py-10">
                Write us an e-mail
            </div>
            <div className="flex flex-col md:flex-row">
                {/* contact form */}
                <div className="flex-1 p-8">
                    <div className='py-3'>
                        <label className="font-bold" htmlFor='name'>Name:</label>
                        <input 
                            type='text'
                            id='name'
                            value={name}
                            onChange={handleNameChange}
                            className="w-full border border-gray-300 rounded px-4 py-2"

                        />
                    </div>
                    <div className='py-3'>
                        <label className="font-bold" htmlFor='phone'>Phone:</label>
                        <input 
                            type='text'
                            id='phone'
                            value={phone}
                            onChange={handlePhoneChange}
                            className="w-full border border-gray-300 rounded px-4 py-2"

                        />
                    </div>
                    <div className='py-3'>
                        <label className="font-bold" htmlFor='email'>E-mail:</label>
                        <input 
                            type='text'
                            id='email'
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full border border-gray-300 rounded px-4 py-2"
                        />
                    </div>
                    <div className='py-3'>
                        <label className="font-bold" htmlFor='message'>Message:</label>
                        <input 
                            type='textarea'
                            id='message'
                            value={message}
                            onChange={handleMessageChange}
                            className="w-full border border-gray-300 rounded px-4 py-2"
                        />
                    </div>
                    {/* submit button */}
                    <div className='pt-2'>
                        <button type="submit" className="border font-bold border-gray-300 rounded px-6 py-2 float-left" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
                {/* contact data */}
                <div className="flex-1 p-8 self-center">
                    <div className='py-4'>
                        <h2 className='font-bold'>Address</h2>
                        <p>Burgas, Bulgaria</p>
                    </div>
                    <div className='py-4'>
                        <h2 className='font-bold'>Contacts</h2>
                        <p>+359 88 8888888</p>
                        <p>+359 88 8888888</p>
                        <p>contact@elev8x.eu</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;