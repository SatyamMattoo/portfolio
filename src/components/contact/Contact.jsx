import React, { useState, useRef } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();  // Reference for the form

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    subject: '',
    message: '',
  });

  const [messages, setMessages] = useState({
    errMsg: '',
    successMsg: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const validateForm = () => {
    const validations = {
      username: {
        isValid: formData.username !== "",
        error: "Username is required!"
      },
      email: {
        isValid: formData.email !== "",
        error: "Please provide your Email!"
      },
      validEmail: {
        isValid: emailValidation(formData.email),
        error: "Please provide a valid Email!"
      },
      subject: {
        isValid: formData.subject !== "",
        error: "Please provide your Subject!"
      },
      message: {
        isValid: formData.message !== "",
        error: "Message is required!"
      }
    };

    for (let key in validations) {
      if (!validations[key].isValid) {
        setMessages({ errMsg: validations[key].error });
        return false;
      }
    }
    return true;
  };

  const handleSend = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          (result) => {
            setMessages({
              successMsg: `Thank you dear ${formData.username}, Your message has been sent successfully!`,
              errMsg: ""
            });

            setFormData({
              username: "",
              phoneNumber: "",
              email: "",
              subject: "",
              message: ""
            });

            // Clear success message after 8 seconds
            setTimeout(() => {
              setMessages({ successMsg: "", errMsg: "" });
            }, 8000);
          },
          (error) => {
            console.log(error.text);
            setMessages({ errMsg: "Failed to send the message. Please try again.", successMsg: "" });
          }
        );
    }
  };

  const { errMsg, successMsg } = messages;

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form ref={form} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5" onSubmit={handleSend}>
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce rounded-xl">
                  {successMsg}
                </p>
              )}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Your Name</p>
                <input
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className={`contactInput ${errMsg.includes('Username') && 'outline-designColor'}`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`contactInput ${errMsg.includes('Email') && 'outline-designColor'}`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`contactInput ${errMsg.includes('Subject') && 'outline-designColor'}`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`contactTextArea ${errMsg.includes('Message') && 'outline-designColor'}`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
