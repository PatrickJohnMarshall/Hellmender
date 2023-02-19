import { NameSubmitForm } from "components/Intro/Intro2/NameSubmitForm";

function Intro2({
  handleNameSubmit,
  newName,
  setNewName,
  submittedName,
  wrongness,
}: {
  handleNameSubmit: React.FormEventHandler<HTMLFormElement>;
  newName: string;
  setNewName: (name: string) => void;
  submittedName: string;
  wrongness: number;
}) {
  return [
    `The Architechterate runs like a well-worded machine. No oath
    forgotten nor contract broken without retaliation.`,

    `Legions wait in shadow for the slightest mistake; a forgotten
    clause unmet or the measliest twitch outside the oath-bidden
    bounds.`,

    `From the Didacts themselves to their Reaverlords, Sangoliffs,
    Contractistrates and the like, there is someone waiting to right a
    wrong or to push back the Heavens if the contract demands it.`,

    `Ashlorath of Wrath, Volskasha the Shrewd, Ralik Gorefiend, all
    names feared in the mortal world when a contract is weighed.`,

    <NameSubmitForm
      wrongness={wrongness}
      setNewName={setNewName}
      newName={newName}
      handleNameSubmit={handleNameSubmit}
      submittedName={submittedName}
    />,
  ];
}

export default Intro2;
