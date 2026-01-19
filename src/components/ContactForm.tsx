import { useEffect, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!publicKey) {
      console.warn('EmailJS public key is not set');
      return;
    }
    emailjs.init(publicKey);
    setIsInitialized(true);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all fields.');
      setIsLoading(false);
      return;
    }

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (!serviceId || !templateId) {
        throw new Error('Email service is not configured.');
      }

      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        message: formData.message.trim(),
        to_name: 'Apartments Sweet Dreams Osijek'
      };

      if (!isInitialized) {
        throw new Error('Email service is not ready.');
      }

      const result = await emailjs.send(serviceId, templateId, templateParams);

      setFormData({ name: '', email: '', message: '' });
      setSuccess('Thank you for your message! We will get back to you soon.');
      setTimeout(() => setSuccess(null), 4000);
    } catch (err: any) {
      console.error('EmailJS error details:', err);
      console.error('Error type:', typeof err);
      console.error('Error properties:', Object.keys(err || {}));

      let errorMessage = 'Failed to send message. Please try again later.';

      if (err?.text) {
        errorMessage = `EmailJS Error: ${err.text}`;
      } else if (err?.message) {
        errorMessage = `Error: ${err.message}`;
      } else if (typeof err === 'string') {
        errorMessage = err;
      }

      setError(errorMessage);
      setSuccess(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: 'name' | 'email' | 'message', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (error) setError(null);
    if (success) setSuccess(null);
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      {/* Section Header */}
      <div className="flex justify-center mb-8">
        <div className="bg-[#2e2e2e] rounded-2xl px-8 py-2">
          <h2 className="text-white text-lg font-semibold font-['Playfair_Display',serif]">
            CONTACT US
          </h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-2xl">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded-2xl">
            {success}
          </div>
        )}
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-[#2e2e2e] text-base font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            required
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full px-4 py-3 bg-white border border-[#d9d9d9] rounded-2xl text-[#2e2e2e] text-base focus:outline-none focus:ring-2 focus:ring-[#f28c38] focus:border-transparent transition-all"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-[#2e2e2e] text-base font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full px-4 py-3 bg-white border border-[#d9d9d9] rounded-2xl text-[#2e2e2e] text-base focus:outline-none focus:ring-2 focus:ring-[#f28c38] focus:border-transparent transition-all"
            placeholder="Enter your email"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-[#2e2e2e] text-base font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            autoComplete="off"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            className="w-full px-4 py-3 bg-white border border-[#d9d9d9] rounded-2xl text-[#2e2e2e] text-base resize-none focus:outline-none focus:ring-2 focus:ring-[#f28c38] focus:border-transparent transition-all"
            placeholder="Enter your message"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="cursor-pointer bg-[#db6e1a] hover:bg-[#c55f15] disabled:bg-gray-400 text-white text-base font-medium px-12 py-3 rounded-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-[#db6e1a] focus:ring-offset-2 disabled:cursor-not-allowed transition-transform hover:scale-105 active:scale-95"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
}