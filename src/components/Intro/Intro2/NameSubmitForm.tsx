import { NameInput } from "../introStyles";
import { submitFormReadout } from "./SubmitFormReadout";
import { useState } from "react";

type Props = {
  wrongness: number;
  setNewName: (name: string) => void;
  newName: string;
  handleNameSubmit: React.FormEventHandler<HTMLFormElement>;
  submittedName: string;
};

export const NameSubmitForm: React.FC<Props> = ({
  wrongness,
  setNewName,
  newName,
  handleNameSubmit,
  submittedName,
}) => {
  const [nameTouched, setNameTouched] = useState<boolean>(false);

  return (
    <form onSubmit={handleNameSubmit}>
      <label htmlFor="newName">{!nameTouched ? "But who" : "Name:"}</label>
      <NameInput
        id="newName"
        value={newName}
        onChange={(e) => {
          setNewName(e.target.value);
        }}
        type="text"
        autoComplete="off"
        onFocus={() => {
          setNameTouched(true);
          if (newName === "are you?") {
            setNewName("");
          }
        }}
        onBlur={() => {
          if (newName === "") {
            setNameTouched(false);
            setNewName("are you?");
          }
        }}
      ></NameInput>
      {submitFormReadout({
        wrongness: wrongness,
        submittedName: submittedName,
      })}
    </form>
  );
};
