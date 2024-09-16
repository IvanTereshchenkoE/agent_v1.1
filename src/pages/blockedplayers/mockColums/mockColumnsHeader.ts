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
    name: "Username",
    filtred: true,
  },
  {
    name: "Parent ID",
    filtred: true,
  },
  {
    name: "Balance",
    filtred: false,
  },
  {
    name: "Date",
    filtred: true,
  },
  {
    name: "Blocked by",
    filtred: true,
  },
];

export { mockColumnsHeader };
export type { mockColumnsHeaderType };
