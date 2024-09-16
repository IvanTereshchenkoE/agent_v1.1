type mockColumnsHeaderType = {
  name: string;
  filtred: boolean;
};

const mockColumnsHeader: mockColumnsHeaderType[] = [
  {
    name: "Name",
    filtred: true,
  },
  {
    name: "Page",
    filtred: true,
  },
  {
    name: "Filters",
    filtred: true,
  },
  {
    name: "Creation Date",
    filtred: true,
  },
];

export { mockColumnsHeader };
export type { mockColumnsHeaderType };
