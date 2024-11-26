import { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import img5 from "../../assets/images/img5.svg";


const Testimonials = () => {
  const testimonials = [
    {
      img: img5,
      text: "I had a great experience with Maestromarv. They fixed my laptop in no time. I highly recommend them.",
      name: "John Doe",
      address: "Lagos, Nigeria",
    },
    {
      img: img5,
      text: "Excellent service! My phone was as good as new after repair. The staff was very professional.",
      name: "Jane Doe",
      address: "Ibadan, Nigeria",
    },
    {
      img: img5,
      text: "Quick and efficient repairs. Great customer service!",
      name: "Alex Smith",
      address: "Abeokuta, Nigeria",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto pagination every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000); // 10 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentPage]);

  // Function to handle pagination next
  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % testimonials.length);
      setIsAnimating(false);
    }, 500); // Animation duration in sync with CSS transition
  };

  // Function to handle pagination click
  const handlePageChange = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(index);
      setIsAnimating(false);
    }, 500); // Animation duration in sync with CSS transition
  };
 
  return (
    <div className="customer_testimonials">
      <h1>What our Clients Say</h1>

      {/* Testimonial with animation */}
      <div className={`testimonial-container ${isAnimating ? "fade" : ""}`}>
        <Testimonial testimonial={testimonials[currentPage]} />
      </div>

      {/* Pagination Dots */}
      <div className="pagination-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentPage === index ? "active" : ""}`}
            onClick={() => handlePageChange(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
