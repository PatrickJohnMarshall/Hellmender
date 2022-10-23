import "../styles/_containers_and_frames.scss";
import "../styles/_start_screen.scss";
import "../styles/_button.scss";

function StartScreen({
  setGameState,
}: {
  setGameState: (state: "start" | "game") => void;
}) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="rpgui-container framed start-screen">
        <h1
          style={{
            gridColumn: 2,
            display: "flex",
            justifySelf: "center",
          }}
        >
          Zork
        </h1>
        <button
          onClick={() => setGameState("game")}
          className="rpgui-button golden"
          style={{ gridColumn: 2, fontSize: "12px" }}
        >
          <p style={{ paddingTop: "auto" }}>Start Game</p>
        </button>
      </div>
    </div>
  );
}

export default StartScreen;
