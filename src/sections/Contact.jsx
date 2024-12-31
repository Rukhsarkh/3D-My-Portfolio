import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
    const formRef = useRef();

    const {alert, showAlert, hideAlert} = useAlert();
    const [form, setForm] = useState({name: '', email: '', message: ''});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
      
        
        emailjs
        .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
              from_name: form.name,
              to_name: 'Rukhsar Khan',
              from_email: form.email,
              to_email: 'khanrukhsar0055@gmail.com',
              message: form.message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
            () => {
                setIsLoading(false);
                showAlert({
                    show:true,
                    text: "Thank you for you message",
                    type: 'success',
                });

                setTimeout(() => {
                    hideAlert(false);
                    setForm({
                        name: '',
                        email: '',
                        message: ''
                    });
                }, [3000]);
            },
            (error) => {
                setIsLoading(false);
                console.error(error);

                showAlert({
                    show: true,
                    text: "I didn't receive your message 😢",
                    type: 'danger',
                });
            });
    };

    return (
        <section className='c-space my-20' id="contact">
            {alert.show && <Alert {...alert} />}
            <div className="relative min-h-screen flex flex-col items-center justify-center">
                <img src="assets/terminal.png" alt="contact" className="absolute inset-0 min-h-screen"/>
                <div className="contact-container">
                    <h3 className="head-text">Contacts</h3>
                    <p className="text-lg text-white-600 mt-3">
                    Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
                    life, I’m here to help.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col space-y-7 mt-12">
                        <label className="space-y-3">
                            <span className="field-label">Your name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Dan Mile"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your email</span>
                            <input 
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="DanMile@gmail.com"                            
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Message</span>
                            <textarea
                                type="text"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="field-input"
                                placeholder="Hello there ! i want to hire you. Your Wev dev sklls are on roof ...."                            
                            />
                        </label>
                        <button className="field-btn" type="submit" disabled={isLoading}>
                            {isLoading ? "Sending..." : "Send Message"}
                            <img src="assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
  }
  
  export default Contact;