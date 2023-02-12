import parseText from "./parseText";

describe("parseText", () => {
  test("filters articles", () => {
    const response = parseText("equip the shortsword");

    expect(response.words).not.toContain("the");
  });

  test("filters correct nouns", () => {
    const response = parseText("cast FiReBolt on the grumpkin");

    expect(response.nouns).toContain("firebolt" && "grumpkin");
  });

  test("filters correct command", () => {
    const response = parseText("grumpkin firebolt cast on");

    expect(response.command).toContain("cast");
  });

  test("filters correct direction", () => {
    const response = parseText("move forward");

    expect(response.direction).toContain("forward");
  });

  test("filters correct prepositions", () => {
    const response = parseText("cast FiReBolt on the grumpkin");

    expect(response.prepositions).toContain("on");
  });

  test("finds subject", () => {
    const response = parseText("cast FiReBolt on the grumpkin");

    expect(response.subject).toContain("grumpkin");
  });
});
