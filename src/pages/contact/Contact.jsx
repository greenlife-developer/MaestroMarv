import Hero from "../../components/WebHero/Hero";
import img5 from "../../assets/images/repairsimgs/repairimg5.png";
import phone from "../../assets/images/contact/phone.png";
import email from "../../assets/images/contact/email.png";
import location from "../../assets/images/contact/location.png";
import phone1 from "../../assets/images/contact/phone1.png";
import Footer from "../../components/Footer/Footer";
import CtaCard from "../../components/ctacard/CtaCard";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <Hero
        h1="We're Here to Help!"
        p="We're here to answer your questions, schedule repairs, and discuss your tech needs."
        span="Help!"
        button="Contact Us"
      />

      <div className="contact_section_1">
        <div className="contact_info">
          <div className="contact_card">
            <img src={phone} />
            <div className="">
              <h3>WhatsApp</h3>
              <p>+1 123 456 7890</p>
            </div>
          </div>
          <div className="contact_card">
            <img src={phone1} />
            <div className="">
              <h3>Call/SMS</h3>
              <p>+1 123 456 7890</p>
            </div>
          </div>
          <div className="contact_card">
            <img src={email} />
            <div className="">
              <h3>E-mail Address</h3>
              <p>+1 123 456 7890</p>
            </div>
          </div>
          <div className="contact_card">
            <img src={location} />
            <div className="">
              <h3>Office Address</h3>
              <p>+1 123 456 7890</p>
            </div>
          </div>
          <div className="contact_card">
            <img src={location} />
            <div className="">
              <h3>Office Address</h3>
              <p>+1 123 456 7890</p>
            </div>
          </div>
        </div>
        <div className="contact_form">
          <h3>Send us a message</h3>
          <p>Reach out to us</p>

          <form action="">
            <div className="">
              <div className="form_field">
                <div>
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="">E-mail Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              <div className="form_field">
                <div className="">
                  <label htmlFor="">Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="">
                  <label htmlFor="">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter the subject of your message"
                  />
                </div>
              </div>
              <div className="form_field">
                <div>
                  <label htmlFor="">Message</label>
                  <textarea
                    placeholder="Enter your message"
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>
            </div>

            <button>Send message</button>
          </form>
        </div>
      </div>

      <div className="contact_section_2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4162328937778!2d5.137179974999141!3d7.3070473135623555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1047894972021f41%3A0xd84c4e01abf1d646!2sFederal%20University%20of%20Technology%20Akure!5e0!3m2!1sen!2sng!4v1729175103308!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="contact_section_3">
        <img src={img5} alt="" />
        <div className="contact_cta_card">
          <CtaCard
            title="Need help?"
            description="Book an appointment with us today"
            buttonText="Book Now!"
            buttonLink="/appointment"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
