const Row = ({ repair, position }) => {
  return (
    <div
      className={
        position === "forward" ? "repair_row row" : "repair_row row-reverse"
      }
    >
      <div className="repair_row_img">
        <img src={repair?.img} alt="" />
      </div>
      <div className="repair_row_text">
        <h3>{repair?.title}</h3>
        <p>{repair?.description}</p>
        <button>{repair?.button}</button>
      </div>
    </div>
  );
};

export default Row;
