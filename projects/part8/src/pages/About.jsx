import { useState } from "react";
import "./../css/About.css";

const About = () => {
  const [formStatus, setFormStatus] = useState({ message: "", type: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const json = JSON.stringify(Object.fromEntries(formData));

    setFormStatus({ message: "Please wait...", type: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();

      if (response.status === 200) {
        setFormStatus({ message: "Email sent!", type: "success" });
        form.reset();
      } else {
        setFormStatus({
          message: data.message || "Something went wrong.",
          type: "error",
        });
      }
    } catch (err) {
      console.log(err);
      setFormStatus({
        message: "Network error. Please try again.",
        type: "error",
      });
    }

    setTimeout(() => {
      setFormStatus({ message: "", type: "" });
    }, 3000);
  };

  return (
    <>
      <section className="hero hero--tight">
        <div className="container">
          <h1>About This Project</h1>
        </div>
      </section>

      <main className="container">
        <section className="about-block">
          <h2>Our Mission</h2>
          <p>
            This site was created as part of a project to explore web design and
            development using Formula 1 as the theme. It showcases design work
            while providing an engaging way to learn about one of the world's
            most exciting sports.
          </p>
          <p>
            The goal is to combine technical skills with creativity. The aim is
            for this to result in a portfolio-style site that emphasizes both
            content and presentation.
          </p>
        </section>

        <section className="about-block">
          <h2>Contact Us</h2>
          <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="access_key"
              value="29c6cd41-4b43-4598-8570-934e76f84fab"
            />
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
              style={{ display: "none" }}
            />
            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Please enter"
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="Please enter"
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="5"
                placeholder="Please enter"
                required
              ></textarea>
            </label>

            <button type="submit">Submit</button>
            {formStatus.message && (
              <div
                id="contact-result"
                className={formStatus.type}
                aria-live="polite"
              >
                {formStatus.message}
              </div>
            )}
          </form>
        </section>

        <section className="about-block">
          <h2>Our Location</h2>
          <div className="embed">
            <iframe
              title="Assembly Blossom North - Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6615.936099132783!2d-81.03426492523275!3d33.99335442083909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bb2802562b89%3A0x1f5707bd271c887!2sAssembly%20Blossom%20North!5e0!3m2!1sen!2sus!4v1760457010384!5m2!1sen!2sus"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
