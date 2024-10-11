import React from 'react';
import "../App.css";

const WhatsAppButton = ({ phoneNumber, message }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
      Chat with us on WhatsApp
    </a>
  );
};

export default WhatsAppButton;
