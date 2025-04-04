import { useState } from "react";

import { client } from "../../client";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.css";

const Footer = () =>
  // { darkMode }: { darkMode: boolean }
  {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formData;

    const handleChangeInput = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.currentTarget;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
      setLoading(true);

      const contact = {
        _type: "contact",
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      client
        .create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
        })
        .catch((err: Error) => console.log(err));
    };

    return (
      <>
        <h2 className="head-text">Take a coffee & chat with me</h2>

        <div className="app__footer-cards">
          <div className="app__footer-card ">
            <img src={images.email} alt="email" />
            <a href="mailto:shynggys.umbetov@gmail.com" className="p-text">
              shynggys.umbetov@gmail.com
            </a>
          </div>
          <div className="app__footer-card">
            <img src={images.mobile} alt="phone" />
            <a href="tel:+33(0)766198985" className="p-text">
              +33 (0)7 66 19 89 85
            </a>
          </div>
        </div>
        {!isFormSubmitted ? (
          <div className={`app__footer-form app__flex `}>
            <div className="app__flex">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={name}
                onChange={handleChangeInput}
                className="p-text w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>
            <div className="app__flex">
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
                className="p-text w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
                className="p-text w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>
            <button type="button" className="p-text" onClick={handleSubmit}>
              {!loading ? "Send Message" : "Sending..."}
            </button>
          </div>
        ) : (
          <div>
            <h3 className="head-text">Thank you for getting in touch!</h3>
          </div>
        )}
      </>
    );
  };

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact", "");
