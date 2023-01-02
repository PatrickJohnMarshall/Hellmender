import InterfaceAudio from "audio/InterfaceAudio";
import { HelpBox, HelpShell } from "./readout-styles/HelpMenu_styles";
import { GeneralButton } from "./readout-styles/Readout_styles";

function HelpMenu({ setHelpToggle }) {
  const interfaceAudio = new InterfaceAudio();
  return (
    <HelpShell>
      <HelpBox>
        <GeneralButton
          className="rpgui-button help-button"
          onClick={() => {
            setHelpToggle(false);
            interfaceAudio.playButton();
          }}
        >
          Back
        </GeneralButton>
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
      </HelpBox>
    </HelpShell>
  );
}

export default HelpMenu;
