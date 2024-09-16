type mockColumnsHeaderType = {
  name: string;
  filtred: boolean;
};

const mockColumnsHeader: mockColumnsHeaderType[] = [
  {
    name: "Player ID",
    filtred: true,
  },
  {
    name: "Player Username",
    filtred: true,
  },
  {
    name: "Agent Id",
    filtred: true,
  },
  {
    name: "Agent Username",
    filtred: true,
  },
  {
    name: "Bet",
    filtred: true,
  },
  {
    name: "Wins",
    filtred: true,
  },
  {
    name: "GGR",
    filtred: true,
  },
  {
    name: "Win/Loss",
    filtred: true,
  },
  {
    name: "Rake",
    filtred: true,
  },
  {
    name: "NGR",
    filtred: true,
  },
  {
    name: "Commission",
    filtred: true,
  },
];

export { mockColumnsHeader };
export type { mockColumnsHeaderType };
