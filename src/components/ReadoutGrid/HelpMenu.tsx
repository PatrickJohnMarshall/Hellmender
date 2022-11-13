import InterfaceAudio from "audio/InterfaceAudio";

function HelpMenu({ setHelpToggle }) {
  const interfaceAudio = new InterfaceAudio();
  return (
    <div
      className="rpgui-container framed-golden-2"
      style={{
        height: `57vh`,
        maxWidth: "75rem",
        overflowWrap: "break-word",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div
        className="rpgui-container framed-grey rpgui-content"
        style={{
          height: "100%",
          width: "100%",
          overflowY: "auto",
          fontSize: `18px`,
          background: `#252a33`,
          color: "white",
        }}
      >
        <button
          className="rpgui-button help-button"
          onClick={() => {
            setHelpToggle(false);
            interfaceAudio.playButton();
          }}
        >
          Back
        </button>
        <h2>Instructions</h2>

        <hr />

        <h3>Movement</h3>
        <p>
          Synatax: 'Move [direction]' <br /> Valid directions: Forward, Back,
          Left, Right, Up, Down
        </p>

        <hr />

        <h3>Attacks</h3>
        <p>
          Syntax: 'Attack [monster name]` <br /> Valid item/monster names are
          shown in their descriptions
        </p>

        <hr />

        <h3>Casting Spells</h3>
        <p>
          Syntax: 'Cast [spell name] on [monster name]` <br /> Valid
          spell/monster names are shown in their descriptions
        </p>

        <hr />

        <h3>Interface</h3>
        <p>
          All icons in the monster readout and item lists can be clicked to give
          the names, descriptions, and stats for their representative
          item/monster.
        </p>
      </div>
    </div>
  );
}

export default HelpMenu;
