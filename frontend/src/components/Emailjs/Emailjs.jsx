import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const Emailjs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', form.current, 'ZQU_YEi73ji1tN76DLdCZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>First Name</label>
      <input type="text" name="first_name" />
      <label>Credits</label>
      <input type="number" name="total_credits" />   
      <label>Ethics</label>
      <input type="number" name="total_ethics" />
      <input type="submit" value="Send" />
    </form>
  );
};


