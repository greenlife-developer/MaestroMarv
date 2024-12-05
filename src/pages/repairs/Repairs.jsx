import Row from "../../components/repair_row/Row";
import Hero from "../../components/WebHero/Hero";
import img1 from "../../assets/images/repairsimgs/repairimg1.png";
import img2 from "../../assets/images/repairsimgs/repairimg2.png";
import img3 from "../../assets/images/repairsimgs/repairimg3.png";
import img4 from "../../assets/images/repairsimgs/repairimg4.png";
import img5 from "../../assets/images/repairsimgs/repairimg5.png";
import "./repairs.css";
import CtaCard from "../../components/ctacard/CtaCard";
import Footer from "../../components/Footer/Footer";

const Repairs = () => {
  const repair = [
    {
      title: "Expert Repair",
      img: img1,
      description:
        "We fix your phones, laptops, tablets & desktops. Fast repairs with genuine parts.",
      button: "Contact us now",
    },
    {
      title: "Free Consultations",
      img: img2,
      description:
        "Unsure if your device needs repair or replacement? We offer free consultations to assess the condition of your equipment and provide expert advice.",
      button: "Book a free consultation",
    },
    {
      title: "Data Recovery",
      img: img3,
      description:
        "Lost precious data due to malfunction? Our data recovery specialists work tirelessly to recover your files and ensure business continuity.",
      button: "Contact us now",
    },
    {
      title: "Preventive Maintenance",
      img: img4,
      description:
        "Extend the lifespan of your devices with customized preventative maintenance plans. We'll clean your gadgets, update software, and identify potential issues before they become major problems.",
      button: "Contact us now",
    },
  ];

  return (
    <div>
      <Hero
        h3="Our Services"
        h1="Experience Technology Seamlessly with MTS Professional Services"
        p="MTS keeps your tech running smoothly"
        span="Technology"
        button="Read More"
      />

      <div className="repairs_section_1">
        <Row position="forward" repair={repair[0]} />
        <Row repair={repair[1]} />
        <Row position="forward" repair={repair[2]} />
        <Row repair={repair[3]} />
      </div>

      <div className="repairs_section_2">
        <img src={img5} alt="" />
        <div className="repairs_cta_card">
          <CtaCard
            title="Need a repair?"
            description="Book an appointment with us today"
            buttonText="Book Now!"
            buttonLink="/contact"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}; 

export default Repairs; 
