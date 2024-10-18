import Hero from "../../components/WebHero/Hero";
import "./about.css";
import aboutimg from "../../assets/images/aboutimg1.jpg";
import aboutimg1 from "../../assets/images/aboutimg2.png";
import Testimonials from "../../components/testimonials/Testimonials";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/Footer/Footer";
import CtaCard from "../../components/ctacard/CtaCard";
import marvellous from "../../assets/images/team/marvellous.png";
import jamiu from "../../assets/images/team/jamiu.png";
import temilayo from "../../assets/images/team/temilayo.png";
import praise from "../../assets/images/team/praise.png";
import opeyemi from "../../assets/images/team/opeyemi.png";

const About = () => {
  const team = [
    {
      img: marvellous,
      name: "Onaolapo Marvellous",
      role: "CEO",
    },
    {
      img: jamiu,
      name: "Ahmed Jamiu",
      role: "Technical Engineer",
    },
    {
      img: temilayo,
      name: "Temilayo",
      role: "Technical Engineer",
    },
    {
      img: praise,
      name: "Odiko Praise",
      role: "Technical Engineer",
    },
    {
      img: opeyemi,
      name: "Afolabi Opeyemi",
      role: "Software Developer",
    },
  ];

  return (
    <>
      <Hero
        h3="About us"
        h1="Making Technology Smooth and Memorable"
        p="At MTS, we love tech and help you experience it smoothly."
        span="Technology"
        button="Read More"
      />

      <div className="about_section_1">
        <div className="section_1_text_img">
          <h3>
            We combine tech passion with user empathy for a smooth experience.
          </h3>
          <img src={aboutimg} alt="" />
        </div>
        <div className="section_1_text">
          <h4>
            Established in 2019, we've grown to become a trusted tech partner
            for customers across South-Western Nigeria. We take pride in
            building lasting relationships based on transparency,
            accountability, and exceptional customer service.
          </h4>
          <p>
            Our mission is to transform your tech experience from frustrating to
            fulfilling. We want to empower you to explore the endless
            possibilities technology offers, with gadgets that function
            optimally and keep up with your busy life.
            <br />
            <br />
            <br />
            We Believe In Your satisfaction is our priority. We build trust
            through consistent quality service, create value by offering more
            than repairs, and empower users with clear communication and expert
            advice.
          </p>
        </div>
      </div>

      <div className="about_section_2">
        <h1>Our Team</h1>
        <div className="team">
          {team.map((member) => (
            <div className="team_member">
              <img src={member.img} alt="" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <Testimonials />

      <Faq />

      <div className="about_section_3">
        <img src={aboutimg1} alt="" />
        <div className="about_cta_card">
          <CtaCard
            title="Need a repair?"
            description="Book an appointment with us today"
            buttonText="Book Now!"
            buttonLink="/contact"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
