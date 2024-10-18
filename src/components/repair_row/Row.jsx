const Row = ({ repair, position }) => {
  return (
    <div
      style={{ flexDirection: position === "forward" ? "row" : "row-reverse" }}
      className="repair_row"
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
