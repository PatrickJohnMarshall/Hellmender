function ManaBar({ entity }) {
  const mobileCheck = window.innerWidth > 700;

  return (
    <div className="health-bar">
      <div className="health-bar-glass-before"></div>
      <div className="health-bar-glass" style={{ textAlign: "center" }}>
        <span className="health-readout">
          {mobileCheck ? "Mana:" : ""} {entity.getMana()}
        </span>
        <div
          className="health-bar-fluid"
          style={{
            width: `${(entity.getMana() / entity.getMaxMana()) * 100}%`,
            background: "blue",
          }}
        ></div>
      </div>
      <div className="health-bar-glass-after"></div>
    </div>
  );
}

export default ManaBar;
