type mockColumnsHeaderType = {
  name: string;
  filtred: boolean;
};

const mockColumnsHeader: mockColumnsHeaderType[] = [
  {
    name: "Username",
    filtred: false,
  },
  {
    name: "First Name",
    filtred: true,
  },
  {
    name: "Last Name",
    filtred: true,
  },
  {
    name: "Referral",
    filtred: false,
  },
  {
    name: "Referred Level",
    filtred: false,
  },
  {
    name: "Registration date",
    filtred: true,
  },
  {
    name: "Last login date",
    filtred: true,
  },
  {
    name: "Currency",
    filtred: false,
  },
  {
    name: "Commission Plan",
    filtred: true,
  },
  {
    name: "Plan Type",
    filtred: false,
  },
  {
    name: "Players Count",
    filtred: true,
  },
  {
    name: "Mobile",
    filtred: true,
  },
  {
    name: "Marketing Website",
    filtred: true,
  },
  {
    name: "Pending Commission",
    filtred: true,
  },
  {
    name: "Available Commission",
    filtred: true,
  },
];

export { mockColumnsHeader };
export type { mockColumnsHeaderType };
