type mockColumnsHeaderType = {
  name: string;
  filtred: boolean;
};

const mockColumnsHeader: mockColumnsHeaderType[] = [
  {
    name: "Player currency",
    filtred: false,
  },
  {
    name: "Player Username",
    filtred: true,
  },
  {
    name: "Registration date",
    filtred: true,
  },
  {
    name: "Agent Id",
    filtred: false,
  },
  {
    name: "Balance",
    filtred: false,
  },
  {
    name: "Commission Plan Name",
    filtred: true,
  },
];

export { mockColumnsHeader };
export type { mockColumnsHeaderType };
