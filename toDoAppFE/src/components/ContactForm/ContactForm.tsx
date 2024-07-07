import {Link} from "react-router-dom";
import "./contact-form.css"
import {useState} from "react";


interface ContactFormProps {
}

export const ContactForm: React.FC<ContactFormProps> = () => {
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!subject || !message || !email) {
            setError('Please fill out all fields.');
            setSuccess('');
            return;
        }

        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            setSuccess('');
            return;
        }

        // Simulate form submission
        try {
            await fetch('http://192.168.100.13:3001/contact/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({subject, message, email, name: "Marcel"}),
            });

            setSuccess('Message sent successfully.');
            setError('');
            setSubject('');
            setMessage('');
            setEmail('');
        } catch (err) {
            setError('There was an error sending your message. Please try again later.');
            setSuccess('');
        }
    };

    return (
        <form className={"contact-form"} onSubmit={handleSubmit}>
            <h2>contact us</h2>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="subject">Subject:</label>
                <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
            </div>

            <button type="submit">send</button>
            {error && <p style={{color: 'red'}}>{error}</p>}
            {success && <p style={{color: 'green'}}>{success}</p>}
            <Link to={"/"}>home</Link>
        </form>
    );
};