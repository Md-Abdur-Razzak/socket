import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {

   e.preventDefault()
    emailjs
      .sendForm('service_mhk95kh', 'template_x99meum', form.current, {
        publicKey: '6e_NFxreZRsQsS1GH',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
// name="selected_option"
  return (
    <form ref={form} onSubmit={sendEmail} className='border w-96 ml-12'>
      <label>Name</label>
      <input type="text" className='border block border-red-400' name="user_n" />
      <label>user_number</label>
      <input type="number" className='border block border-red-400' name="user_number" />
      <input type="date" name="date_value"  />
      <label>Email</label>
      <input  className='border block border-red-400' type="email" name="user_email" />
      <label>Message</label>
      <textarea  className='border block border-red-400' name="message" />
      <label>selsect box </label>
      <Select name='selected_option' className='border border-red-300' options={options} isMulti />

      <input  className='border block border-red-400' type="submit" value="Send" />
    </form>
  );
};