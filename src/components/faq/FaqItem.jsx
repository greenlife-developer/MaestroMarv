import { useState } from "react";
import faqplus from "../../assets/images/faqplus.svg";
import faqminus from "../../assets/images/faqminus.svg";

const FaqItem = ({ faq }) => {
  const { question, answer, id } = faq;
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="faq-item">
      <div
        onClick={() => setShowAnswer(!showAnswer)}
        className="dynamic_faq_icon"
      >
        {showAnswer ? (
          <img onClick={() => setShowAnswer(!showAnswer)} src={faqminus} />
        ) : (
          <img onClick={() => setShowAnswer(!showAnswer)} src={faqplus} />
        )}
      </div>
      <div className="faq_question_answers">
        <h3 onClick={() => setShowAnswer(!showAnswer)}>{question}</h3>
        {showAnswer && id && <p>{answer}</p>}
      </div>
    </div>
  );
};

export default FaqItem;
