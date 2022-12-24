import "../../styles/_containers_and_frames.scss";
import "../../styles/_button.scss";
import "../../styles/_intro.scss";
import "../../styles/_custom_buttons.scss";
import InterfaceAudio from "audio/InterfaceAudio";
import styled from "styled-components";

const IntroScreen = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntroShell = styled.div`
  height: 705px;
  width: 855px;
  display: "flex";
  justify-content: "center";
  align-items: "center";
`;

const IntroShellText = styled.div`
  height: 100%;
  background: #252a33 !important;
  font-size: 18px;
  color: white;
  grid-column: 1 / -1;
  grid-row: 1;
  display: grid;
  grid-template-rows: 4% 1fr 1fr 1fr 1fr 4%;
  align-items: center;
`;

function Intro3({ introState, setIntroState }) {
  const interfaceAudio = new InterfaceAudio();

  return (
    <IntroScreen className="container rpgui-container rpgui-content framed-grey">
      <IntroShell className="rpgui-container framed-golden-2 ">
        <div className="rpgui-container framed-grey intro">
          <IntroShellText className="rpgui-container framed-grey ">
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
              But no, you don't get to rend the souls of the damned or strike
              fear in the heart of kings. You instead have a cool pen, a desk,
              and a mound of paperwork to shuffle through at all times. Your
              boss isn't half bad either, especially for Hell! That's gotta
              count for something, right?
            </p>
            <p style={{ gridRow: 5 }}>
              And speak of the devil, he just sent you a message! Your job-slate
              is alive in crimson-splendor, runes abuzz for your attention.
            </p>
          </IntroShellText>

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
      </IntroShell>
    </IntroScreen>
  );
}

export default Intro3;
