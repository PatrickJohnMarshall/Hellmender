import "../styles/_containers_and_frames.scss";
import "../styles/_start_screen.scss";
import "../styles/_button.scss";
import InterfaceAudio from "audio/InterfaceAudio";

type Props = {
  setGameState: (state: "start" | "game" | "intro" | "saves") => void;
};

const StartScreen: React.FC<Props> = ({ setGameState }) => {
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
          <p style={{ marginTop: `15px` }}>Test</p>
        </button>

        <button
          className="rpgui-button golden"
          style={{ gridColumn: 2, fontSize: "18px" }}
          onClick={() => {
            setGameState("saves");
            interfaceAudio.playButton();
          }}
        >
          <p style={{ marginTop: `15px` }}>Load</p>
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
