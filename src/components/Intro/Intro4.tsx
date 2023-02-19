import { FakeAcceptButton, TM } from "./introStyles";

function Intro4() {
  return [
    <div className="rpgui-container framed-grey">
      <p>
        <span style={{ color: "red" }}>IMPORTANT:</span> YOUR EYES ONLY
      </p>
      <p>
        Can't give details here. Just click the box below, and we'll hash out
        the facts when you get here. Gotta be hush-hush and all that.
      </p>
      <p>Move fast. Lotta hungry eyes around here.</p>
      <p>
        - Kisses,
        <br />
        <span style={{ margin: "1em" }}>Sub-Regional Overseer Alveron</span>
      </p>
      <FakeAcceptButton>ACCEPT</FakeAcceptButton>
    </div>,

    `Not the most formal message you've seen from him, but that's
  your boss alright. Got his signature and everything.`,

    [
      `You take a swig of your soul-brew`,
      <TM>TM</TM>,

      `and accept your job for the day.`,
    ],
  ];
}

export default Intro4;
