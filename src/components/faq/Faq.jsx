import FaqItem from "./FaqItem";
import "./faq.css";

const Faq = () => {
  const faqItems = [
    {
      id: 1,
      question: "What is the warranty on your repairs?",
      answer:
        "Our repairs come with a 90-day warranty. If you experience any issues with your device within 90 days of the repair, we will fix it at no additional cost.",
    },
    {
      id: 2,
      question: "How long will it take to repair my device?",
      answer:
        "The time it takes to repair your device will depend on the type of repair needed. Most repairs can be completed within 24 hours, but some repairs may take longer. Our technicians will provide you with an estimated repair time when you drop off your device.",
    },
    {
      id: 3,
      question: "Do you offer a warranty on your repairs?",
      answer:
        "Yes, all of our repairs come with a 90-day warranty. If you experience any issues with your device within 90 days of the repair, we will fix it at no additional cost.",
    },
    {
      id: 4,
      question: "Do you offer a warranty on your repairs?",
      answer:
        "Yes, all of our repairs come with a 90-day warranty. If you experience any issues with your device within 90 days of the repair, we will fix it at no additional cost.",
    },
  ];

  return (
    <div className="faq_container">
      <h1>FAQs</h1>
      <div>
        {faqItems.map((faq, index) => (
          <FaqItem key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
