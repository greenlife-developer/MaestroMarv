import React, { useState } from "react";
import "./home.css";
import Hero from "../../components/WebHero/Hero";
import img1 from "../../assets/images/img1.svg";
import img2 from "../../assets/images/img2.svg";
import repairing from "../../assets/images/repairing.svg";
import waterdrop from "../../assets/images/water-drop.svg";
import buildcomputers from "../../assets/images/build-computers.svg";
import windowslogo from "../../assets/images/windows.svg";
import CtaCard from "../../components/ctacard/CtaCard";
import need_a_repair from "../../assets/images/section_4_img.jpg";
import img4 from "../../assets/images/img4.svg";
import Testimonials from "../../components/testimonials/Testimonials";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero
        h1="Welcome to MaestroMarv Tech Solution"
        p="Your one-stop destination for gadget repairs, sales, and embedded system expertise!"
        span="MaestroMarv"
        button="Explore"
      />
      <div class="service-discription">
        <div class="service-discription-header">
          <h1>we repair all laptops and phones</h1>
        </div>
        <div class="service-discription-body">
          <div>
            <img src={img1} alt="des img" />
          </div>
          <div class="topnotch">
            <p>
              top notch laptop and phone repairs by experienced technicians.
              fast, affordable, and guaranteed quality service.
            </p>
            <a href="index.html">book an appointment</a>
          </div>
        </div>
        <ul>
          <li>
            <h1>1k+</h1>
            <p>satisfied customer</p>
          </li>

          <li>
            <h1>1k+</h1>
            <p>satisfied customer</p>
          </li>

          <li>
            <h1>1k+</h1>
            <p>satisfied customer</p>
          </li>

          <li>
            <h1>1k+</h1>
            <p>satisfied customer</p>
          </li>
        </ul>
      </div>
      <div class="about-us-container">
        <div>
          <img src={img2} alt="abt img" />
        </div>
        <div class="about-us">
          <h3>ABOUT US</h3>
          <h1>Unleach Your Tech Potential</h1>
          <p>
            At Maestromarv, we combine a passion for technology with a deep
            understanding of user needs.
            <br />
            <br />
            <br />
            Since 2019, we've been transforming tech frustrations into
            fulfilling experiences for our customers in South-Western Nigeria.
          </p>
          <br />
          <br />
          <br />
          <button>Learn More</button>
        </div>
      </div>
      <div class="what-we-do">
        <div class="item">
          <img src={repairing} alt="repairing" />
          <h1>computer Repairs</h1>
          <p>
            Fast and professional computer repair services - Troubleshooting to
            virus removal, we've got you covered.
          </p>
        </div>
        <div>
          <img src={waterdrop} alt="water drop" />
          <h1>Liquid Damage Repairs</h1>
          <p>
            Spills happen. We specialize in fixing fluid-damaged equipment.
            Don't delay, turn off the machine now
          </p>
        </div>
        <div>
          <img src={buildcomputers} alt="build computers" />
          <h1>Custom Build Computers</h1>
          <p>
            Powerful custom-built computers tailored to your needs. Experience
            faster speeds and gaming/multimedia optimization. Build your perfect
            computer now
          </p>
        </div>
        <div>
          <img src={windowslogo} alt="windows" />
          <h1>windows Installation</h1>
          <p>
            Swift dual-boot setup for Windows and Linux. Expert team, top-notch
            service. Contact us to get started
          </p>
        </div>
      </div>
      <div className="need_a_repair">
        <img src={need_a_repair} alt="" />

        <div className="need_a_repair_cta">
          <CtaCard
            title="Need a repair?"
            description="Book an appointment with us today"
            buttonText="Book Now!"
            buttonLink="/contact"
          />
        </div>
      </div>
 
      <div className="need_a_gadget">
        <div className="need_a_gadget_cta">
          <CtaCard
            title="Need a Gadget?"
            description="Explore out store for the latest gadgets"
            buttonText="Explore Store"
            buttonLink="/store"
          />
        </div>

        <img src={img4} alt="" />
      </div>

      <Testimonials />

      <Faq />

      <Footer />
    </>
  );
}
