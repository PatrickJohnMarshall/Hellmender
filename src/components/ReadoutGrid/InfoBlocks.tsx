import getImageForMonster from "util/getImageForMonster";

function InfoBlocks({ monsters, setMonsterStatReadout }) {
  return (
    <div
      className="rpgui-container framed readout-box"
      style={{ gridColumn: 5 }}
    >
      <div style={{ gridRow: 1 }}>Monsters In Area:</div> <br />
      <div className="icon-grid" style={{ gridRow: 2 }}>
        {monsters.map((monster) => {
          return (
            <button
              id={monster}
              style={{
                backgroundImage: `url(${getImageForMonster(monster.getID())})`,
                backgroundSize: "50px 50px",
                height: `50px`,
                width: "50px",
              }}
              onClick={() => setMonsterStatReadout(monster)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default InfoBlocks;
