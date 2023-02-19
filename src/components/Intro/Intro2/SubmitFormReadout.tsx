import { NameSubmit } from "components/Intro/introStyles";

type Props = {
  wrongness: number;
  submittedName: string;
};

export const submitFormReadout: React.FC<Props> = ({
  wrongness,
  submittedName,
}) => {
  function wrongnessCounter() {
    if (wrongness >= 11) {
      return `Wrong Entries ${wrongness}`;
    }

    return "";
  }

  function buttonContent() {
    if (submittedName === "") {
      if (wrongness === 1) {
        return `Try again, pal.`;
      }

      if (wrongness === 2) {
        return `Alright, one more try.`;
      }

      if (wrongness === 3) {
        return `Third times the charm.`;
      }

      if (wrongness === 4) {
        return `Or not. Round four.`;
      }

      if (wrongness === 5) {
        return `Can I get a five?`;
      }

      if (wrongness >= 6 && wrongness <= 9) {
        return `Hmm...`;
      }

      if (wrongness === 10) {
        return `Alright, 10th time is no crime!`;
      }

      if (wrongness === 11) {
        return `Let's get a counter going, for moral support.`;
      }

      if (wrongness > 11 && wrongness <= 17) {
        return `Ooo, you missed that one. Try another!`;
      }

      if (wrongness >= 18 && wrongness <= 20) {
        return `Your incorrect entries are now legally an adult.`;
      }

      if (wrongness >= 21 && wrongness <= 24) {
        return `Your incorrect entries can now drink in the most kingdoms.`;
      }

      if (wrongness >= 25 && wrongness <= 29) {
        return `Your incorrect entries can now rent a propelled vehicle in many
            kingdoms.`;
      }

      if (wrongness >= 30 && wrongness <= 39) {
        return `Your incorrect entries are now grown-ass adults.`;
      }

      if (wrongness >= 40 && wrongness <= 49) {
        return `Your incorrect entries aren't as young as they used to be.`;
      }

      if (wrongness >= 50 && wrongness <= 59) {
        return `Your incorrect entries are thinking of retiring.`;
      }

      if (wrongness >= 60 && wrongness <= 68) {
        return `Your incorrect entries are deeply desiring retirement.`;
      }

      if (wrongness === 69) {
        return `Nice`;
      }

      if (wrongness >= 70 && wrongness <= 80) {
        return `I assume that was the number you were looking for. You finished yet?`;
      }

      if (wrongness >= 81 && wrongness <= 90) {
        return `No?`;
      }

      if (wrongness >= 91 && wrongness <= 99) {
        return `You're now thinking of the sound of your mouse clicks/enter key.`;
      }

      if (wrongness === 100) {
        return `One hundred.`;
      }

      if (wrongness > 100) {
        return `I'll be here when you're done.`;
      }

      return "Submit";
    }

    if (wrongness > 81) {
      return `Thank god.`;
    }

    return "Thank you!";
  }

  return (
    <>
      {wrongness >= 11 && (
        <>
          <br />
          <div>{wrongnessCounter()}</div>
        </>
      )}
      <NameSubmit type="submit" disabled={submittedName !== ""}>
        {buttonContent()}
      </NameSubmit>
    </>
  );
};
