import "../styles/_containers_and_frames.scss";
import "../styles/_start_screen.scss";
import "../styles/_button.scss";
import InterfaceAudio from "audio/InterfaceAudio";

function StartScreen({
  setGameState,
}: {
  setGameState: (state: "start" | "game" | "intro") => void;
}) {
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
      <div className="rpgui-container framed-grey start-screen">
        <h1
          style={{
            gridColumn: 2,
            justifySelf: "center",
          }}
        >
          HELLMENDER
        </h1>

        <button
          className="rpgui-button golden"
          style={{ gridColumn: 2, fontSize: "18px" }}
          onClick={() => {
            setGameState("intro");
            interfaceAudio.playButton();
          }}
        >
          <p style={{ marginTop: `15px` }}>New Game</p>
        </button>

        <button
          className="rpgui-button golden"
          style={{ gridColumn: 2, fontSize: "18px" }}
          onClick={() => {
            setGameState("game");
            interfaceAudio.playButton();
          }}
        >
          <p style={{ marginTop: `15px` }}>Continue</p>
        </button>
      </div>
    </div>
  );
}

export default StartScreen;
