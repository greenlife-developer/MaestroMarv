import "./ctacard.css";

const CtaCard = ({ title, description, buttonText, buttonLink }) => {
  return (
    <div className="cta_card">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={buttonLink}>{buttonText}</a>
    </div>
  );
}; 

export default CtaCard;