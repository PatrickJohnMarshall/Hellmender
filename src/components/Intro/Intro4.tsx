import "../../styles/_containers_and_frames.scss";
import "../../styles/_button.scss";
import "../../styles/_intro.scss";
import "../../styles/_custom_buttons.scss";
import InterfaceAudio from "audio/InterfaceAudio";

function Intro4({ setGameState, introState, setIntroState }) {
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
              gridTemplateRows: `4% 1fr 1fr 1fr 1fr 1fr 1fr 1fr 4%`,
              alignItems: "center",
            }}
          >
            <div className="rpgui-container framed-grey" style={{ gridRow: 2 }}>
              <p>
                <span style={{ color: "red" }}>IMPORTANT:</span> YOUR EYES ONLY
              </p>
              <p>
                Can't give details here. Just click the box below, and we'll
                hash out the details when you get here. Gotta beHush hush and
                all that.
              </p>
              <p>Move fast. Lotta hungry eyes around here.</p>
              <p>
                - Kisses,
                <br />
                <span style={{ margin: "1.3em" }}>
                  Sub-Regional Overseer Alveron
                </span>
              </p>
              <div
                className="rpgui-container framed-grey"
                style={{
                  background: "black",
                  backgroundColor: "black",
                  textAlign: "center",
                  width: "6em",
                  height: "3em",
                }}
              >
                ACCEPT
              </div>
            </div>

            <p style={{ gridRow: 3 }}>
              ... Not the most formal message you've seen from your boss, but
              that's your boss alright. Got his signature and everything.
            </p>
            <p style={{ gridRow: 4 }}>
              You take a swig of your soul-brew
              <span
                style={{
                  fontSize: "10px",
                  verticalAlign: "super",
                  letterSpacing: "-0.5px",

                  color: "gold",
                }}
              >
                TM
              </span>{" "}
              and accept your job for the day.
            </p>
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
              fontSize: "18px",
              justifySelf: "flex-end",
            }}
            onClick={() => {
              setIntroState(2);
              interfaceAudio.playButton();
            }}
          >
            Back
          </button>

          <button
            className="rpgui-button golden help-button"
            style={{ gridColumn: 4, gridRow: 3, fontSize: "18px" }}
            onClick={() => {
              setGameState("game");
              interfaceAudio.playButton();
            }}
          >
            "Accept"
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro4;
