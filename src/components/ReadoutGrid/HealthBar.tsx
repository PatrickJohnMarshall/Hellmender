function HealthBar({ entity }) {
  const mobileCheck = window.innerWidth > 700;
  const entityMortality = entity.getHP() > 0;

  return (
    <div className="health-bar">
      <div className="health-bar-glass-before"></div>
      <div className="health-bar-glass" style={{ textAlign: "center" }}>
        <span className="health-readout">
          {!entityMortality ? "Dead" : ""}
          {mobileCheck && entityMortality ? "HP:" : ""}{" "}
          {entityMortality ? entity.getHP() : ""}
        </span>
        <div
          className="health-bar-fluid"
          style={{
            width: `${(entity.getHP() / entity.getMaxHP()) * 100}%`,
          }}
        ></div>
      </div>
      <div className="health-bar-glass-after"></div>
    </div>
  );
}

export default HealthBar;
