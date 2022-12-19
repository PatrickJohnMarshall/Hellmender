import "../../styles/_containers_and_frames.scss";
import "../../styles/_button.scss";
import "../../styles/_intro.scss";
import "../../styles/_custom_buttons.scss";
import InterfaceAudio from "audio/InterfaceAudio";

function Intro2({ introState, setIntroState }) {
  const interfaceAudio = new InterfaceAudio();

  return (
    <div
      className="container rpgui-container rpgui-content framed-grey"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="rpgui-container framed-golden-2 intro-shell">
        <div className="rpgui-container framed-grey intro">
          <div
            className="rpgui-container framed-grey"
            style={{
              gridColumn: "1 / -1",
              gridRow: 1,
              height: "100%",
              fontSize: "18px",
              display: "grid",
              gridTemplateRows: `4% 1fr 1fr 1fr 1fr 1fr 4%`,
              alignItems: "center",
            }}
          >
            <p style={{ gridRow: 2 }}>
              The Architechterate runs like a well-worded machine. No oath
              forgotten, no contract broken without retaliation.
            </p>
            <p style={{ gridRow: 3 }}>
              Legions wait in shadow for the slightest mistake, a forgotten
              clause unmet or the measliest wrong twitch outside the oath-bidden
              bounds.
            </p>
            <p style={{ gridRow: 4 }}>
              From the Didacts themselves to their Reaverlords, Sangoliffs,
              Contractistrates and the like, there is someone waiting to right a
              wrong or push back even the Heavens if the contract demands it.
            </p>
            <p style={{ gridRow: 5 }}>
              Ashlorath of Wrath, Volskasha the Shrewd, Ralik Gorefiend, all
              names feared in the mortal world when a contract is weighed.
            </p>
            <form className="rpgui-content input" style={{ gridRow: 6 }}>
              <label>
                But who
                <input
                  type="text"
                  defaultValue="are you?"
                  style={{ width: "15em", color: "red" }}
                  disabled
                ></input>
              </label>
              <input type="submit" style={{ width: "5em" }} disabled></input>
            </form>
          </div>

          <div
            className="rpgui-container framed-golden-2"
            style={{
              gridColumn: 3,
              gridRow: 3,
              height: "75px",
              width: "100px",
              justifySelf: "center",
              textAlign: "center",
            }}
          >
            {`${introState}/4`}
          </div>

          <button
            className="rpgui-button golden help-button"
            style={{
              gridColumn: 2,
              gridRow: 3,
              justifySelf: "flex-end",
              fontSize: "18px",
            }}
            onClick={() => {
              setIntroState(1);
              interfaceAudio.playButton();
            }}
          >
            Back
          </button>

          <button
            className="rpgui-button golden help-button"
            style={{ gridColumn: 4, gridRow: 3, fontSize: "18px" }}
            onClick={() => {
              setIntroState(3);
              interfaceAudio.playButton();
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro2;
