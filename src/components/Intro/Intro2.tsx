import { NameInput, NameSubmit } from "./introStyles";

function Intro2() {
  return [
    [
      `The Architechterate runs like a well-worded machine. No oath
    forgotten nor contract broken without retaliation.`,
    ],

    [
      `Legions wait in shadow for the slightest mistake; a forgotten
    clause unmet or the measliest twitch outside the oath-bidden
    bounds.`,
    ],

    [
      `From the Didacts themselves to their Reaverlords, Sangoliffs,
    Contractistrates and the like, there is someone waiting to right a
    wrong or to push back the Heavens if the contract demands it.`,
    ],

    [
      `Ashlorath of Wrath, Volskasha the Shrewd, Ralik Gorefiend, all
    names feared in the mortal world when a contract is weighed.`,
    ],
    [
      [
        <form>
          <label>
            But who
            <NameInput type="text" defaultValue="are you?" disabled></NameInput>
          </label>
          <NameSubmit type="submit" disabled></NameSubmit>
        </form>,
      ],
    ],
  ];
}

export default Intro2;
