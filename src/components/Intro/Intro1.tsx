import "../../styles/_containers_and_frames.scss";
import "../../styles/_button.scss";
import "../../styles/_intro.scss";
import "../../styles/_custom_buttons.scss";
import InterfaceAudio from "audio/InterfaceAudio";

function Intro1({ introState, setIntroState }) {
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
              You are a proud member of an ancient order. THE Ancient Order.
              When mortal kind was first getting its footing on the world, yours
              were making plans, organizing things, keeping things...
            </p>
            <p style={{ gridRow: 3 }}>Orderly.</p>
            <p style={{ gridRow: 4 }}>
              Your Boss, EVERYONES Boss, Aramos the Everlord, owns the planet,
              Irenne. Keeps it in line. Not with overt rule like some uncouth
              mortal king, no.
            </p>
            <p style={{ gridRow: 5 }}>
              Through deals and contracts, blood oaths and lineage pacts, some
              way, some how, EVERYONE on Irrene owes us.
            </p>
            <p style={{ gridRow: 6 }}>
              Kings, warlords, nobility, peasantry, all of them are under the{" "}
              <span style={{ color: "red" }}>Architechterate.</span>
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
            style={{ gridColumn: 4, gridRow: 3, fontSize: "18px" }}
            onClick={() => {
              setIntroState(2);
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

export default Intro1;
