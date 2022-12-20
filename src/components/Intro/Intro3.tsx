import "../../styles/_containers_and_frames.scss";
import "../../styles/_button.scss";
import "../../styles/_intro.scss";
import "../../styles/_custom_buttons.scss";
import InterfaceAudio from "audio/InterfaceAudio";

function Intro3({ introState, setIntroState }) {
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
            className="rpgui-container framed-grey intro-text-shell"
            style={{
              gridColumn: "1 / -1",
              gridRow: 1,
              height: "100%",
              fontSize: "18px",
              display: "grid",
              gridTemplateRows: `4% 1fr 1fr 1fr 1fr 4%`,
              alignItems: "center",
            }}
          >
            <p style={{ gridRow: 2 }}>
              EMPLOYEE: [Placeholder] #997766787660770034
              <br />
              Division: Minor Asset Retainment
              <br />
              Title: Assistant to Junior Sub-Regional Overseer
            </p>

            <p style={{ gridRow: 3 }}>
              They pitched it like that to you during Judgement, in all its
              glorious splendor. Prestige, renown, your name in everyone's head.
            </p>
            <p style={{ gridRow: 4 }}>
              So, no. You don't get to rend the souls of the damned or strike
              fear in the heart of kings. But at least you have a cool pen. And
              your boss isn't half bad, especially for Hell! That's gotta count
              for something, right?
            </p>
            <p style={{ gridRow: 5 }}>
              And speak of the devil, he just sent you a message! Your job-slate
              is alive in crimson-splendor, runes abuzz for your attention.
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
              setIntroState(4);
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

export default Intro3;
