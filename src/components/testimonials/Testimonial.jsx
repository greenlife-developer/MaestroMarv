import "./testimonial.css"

const Testimonial = ({ testimonial }) => {
  return (
    <div class="testimonial">
      <div>
        <img src={testimonial.img} alt="testimonial" />
      </div>
      <div>
        <p>{testimonial.text}</p>
        <h3>{testimonial.name}</h3>
        <h5>{testimonial.address}</h5>
      </div>
    </div>
  );
};

export default Testimonial;
