type mockColumnsPlayersType = {
  Playercurrency: string;
  PlayerUsername: string;
  Registrationdate: string;
  AgentId: string;
  Balance: string;
  CommissionPlanName: string;
  [key: string]: string;
};

const mockColumnsPlayers: mockColumnsPlayersType[] = [
  {
    Playercurrency: "EUR",
    PlayerUsername: "pefaco",
    Registrationdate: "2023-02-15 16:56:03",
    AgentId: "Agent Id",
    Balance: "50.00",
    CommissionPlanName: "SYSTEM__AGENT",
  },
];

export { mockColumnsPlayers };
export type { mockColumnsPlayersType };
