import { FancySpan } from "./introStyles";

function Intro1() {
  return [
    [
      `You are a proud member of an ancient order. When mortal kind was first
      getting its footing on the world, yours were making plans, organizing
      systems, keeping things...`,
    ],

    [`Orderly.`],

    [
      `Your Boss Aramos the Everlord owns the planet, Irenne. Keeps it in line.
      Not with overt rule like some uncouth mortal king, no.`,
    ],

    [
      `Through deals and contracts, blood oaths and lineage pacts. Some way, some
    how, EVERYONE on Irrene owes us.`,
    ],

    [
      `Kings, warlords, nobility, peasants, all of them are under the`,
      <FancySpan>Architechterate.</FancySpan>,
    ],
  ];
}

export default Intro1;
