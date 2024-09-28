import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_2q7krbf',   // <-- Remplace par ton service ID EmailJS
        'template_6iohwxu',   // <-- Ici, tu places ton Template ID
        formData,
        'DIahsymQAkYjhrtdu'        // <-- Remplace par ton User ID EmailJS
      )
      .then(
        (result) => {
          alert('Merci pour votre message ! Je vous répondrai bientôt.');
        },
        (error) => {
          alert('Erreur lors de l\'envoi du message, veuillez réessayer.');
        }
      );

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-[#4c6941]">Contactez-moi</h1>
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-700">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-[#4c6941] text-white py-2 px-4 rounded-md hover:bg-[#4c6941] transition duration-300">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;