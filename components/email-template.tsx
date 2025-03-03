import React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Contact form submission from {name}</h1>
    <p>From: {email}</p>
    <p>Message:</p>
    <p>{message}</p>
  </div>
);