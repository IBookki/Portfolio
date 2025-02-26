"use client"
import { sendEmail } from '@/utils/send-email'
import { useState } from "react";
import Image from "next/image";

export type FormData = {
    name: string;
    email: string;
    message: string;
};

export const ContactForm: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<{
        type: 'success' | 'error' | 'sending' | '';
        message: string;
    }>({ type: '', message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ type: 'sending', message: 'Sending...' });
        
        try {
            await sendEmail(formData);
            setStatus({ type: 'success', message: 'Message sent successfully!' }); // Fixed typo in message
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setIsOpen(false), 3000);
        } catch (err) { // Changed from error to err and using it
            console.error('Failed to send email:', err);
            setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <>
            <div onClick={() => setIsOpen(!isOpen)} className='rounded-full fixed bottom-4 right-4 w-12 h-12 bg-white bg-opacity-10 backdrop-blur-md border-b border-white border-opacity-10 shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform'>
                <Image src="/logo/mail-logo.png" alt="Mail" width={30} height={30} />
            </div>
            {isOpen && (
                <div className="fixed bottom-20 right-4 w-80 p-4 bg-white bg-opacity-10 backdrop-blur-xl border-4 border-white border-opacity-5 shadow-lg rounded">
                    <h2 className="text-lg font-bold mb-2">Contact Me</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="rounded-2xl mt-1 block w-full p-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="rounded-2xl mt-1 block w-full p-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="rounded-2xl mt-1 block w-full p-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            ></textarea>
                        </div>
                        {status.message && (
                            <div className={`mb-2 p-2 rounded text-center ${
                                status.type === 'success' ? 'bg-green-100 text-green-700' :
                                status.type === 'error' ? 'bg-red-100 text-red-700' :
                                'bg-blue-100 text-blue-700'
                            }`}>
                                {status.message}
                            </div>
                        )}
                        <button 
                            type="submit" 
                            disabled={status.type === 'sending'}
                            className="rounded-2xl w-full bg-blue-500 text-white p-2 hover:bg-blue-600 transition-colors disabled:bg-blue-300"
                        >
                            {status.type === 'sending' ? 'Sending...' : 'Send'}
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};