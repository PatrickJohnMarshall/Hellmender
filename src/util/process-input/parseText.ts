import {
  verbDictionary,
  directionDictionary,
  nounDictionary,
  prepositionDictionary,
  directionSynonyms,
  directionAntonyms,
} from "./dictionary";

export default function parseText(input: string): {
  words?: string[] | null;
  direction?: string[] | null;
  nouns?: string[] | null;
  command?: string[] | null;
  prepositions?: string[] | null;
  subject?: string[] | null;
  findAntonym?: (string) => string[];
} {
  function filterArticles(word) {
    if (word === "the" || word === "an" || word === "a") {
      return false;
    }
    return true;
  }

  const words = input.toLowerCase().split(" ").filter(filterArticles);

  const prepositions = words.filter((word) =>
    prepositionDictionary.includes(word)
  );

  const nouns = words.filter((word) => nounDictionary.includes(word));

  const command = words.filter((word) => verbDictionary.includes(word));

  const direction = words.filter((word) => directionDictionary.includes(word));

  function findSubject(sentence) {
    let subject = [];
    for (let i = 1; i < sentence.length; i++) {
      if (
        prepositionDictionary.includes(sentence[i]) &&
        nounDictionary.includes(sentence[i + 1])
      ) {
        subject.push(sentence[i + 1]);
      }
    }
    return subject;
  }

  const subject = findSubject(words);

  function checkIfDefined(wordArray: string[]): string[] | null {
    if (wordArray === undefined) {
      return null;
    }

    if (wordArray.length === 0) {
      return null;
    }

    return wordArray;
  }

  function findSynonym(inputArray) {
    if (directionSynonyms.hasOwnProperty(inputArray[0])) {
      return [directionSynonyms[inputArray[0]]];
    }

    return inputArray;
  }

  function findAntonym(wordStr) {
    if (directionAntonyms.hasOwnProperty(wordStr)) {
      return [directionAntonyms[wordStr]];
    }
    return [wordStr];
  }

  function compileOutput() {
    if (command[0] === "quit") {
      return {
        command: checkIfDefined(command),
      };
    }

    if (command[0] === "move") {
      console.log(findSynonym(direction));
      if (direction[0] === "back") {
        return {
          command: checkIfDefined(command),
          direction: checkIfDefined(findSynonym(direction)),
          findAntonym: findAntonym,
        };
      }

      return {
        command: checkIfDefined(command),
        direction: checkIfDefined(findSynonym(direction)),
      };
    }

    if (command[0] === "look") {
      return {
        command: checkIfDefined(command),
      };
    }

    if (command[0] === "attack") {
      return {
        command: checkIfDefined(command),
        nouns: checkIfDefined(nouns),
      };
    }

    if (command[0] === "cast") {
      return {
        command: checkIfDefined(command),
        nouns: checkIfDefined(nouns),
        prepositions: checkIfDefined(prepositions),
        subject: checkIfDefined(subject),
      };
    }

    if (command[0] === "take") {
      return {
        command: checkIfDefined(command),
        nouns: checkIfDefined(nouns),
      };
    }

    if (command[0] === "equip") {
      return {
        command: checkIfDefined(command),
        nouns: checkIfDefined(nouns),
      };
    }
  }

  return compileOutput();
}
