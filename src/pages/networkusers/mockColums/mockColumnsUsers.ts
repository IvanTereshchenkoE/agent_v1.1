type mockColumnsUsersType = {
  Username: string;
  FirstName: string;
  LastName: string;
  Referral: string;
  ReferredLevel: string;
  Registrationdate: string;
  Lastlogindate: string;
  Currency: string;
  CommissionPlan: string;
  plantype: string;
  PlayersCount: string;
  Mobile: string;
  MarketingWebsite: string;
  PendingCommission: string;
  availablecommission: string;
  [key: string]: string;
};

const mockColumnsUsers: mockColumnsUsersType[] = [
  {
    Username: "example1@gmail.com",
    FirstName: "",
    LastName: "",
    Referral: "1063512 pefaco@gmail.com",
    ReferredLevel: "1",
    Registrationdate: "2023-12-05 04:44:14",
    Lastlogindate: "",
    Currency: "EUR",
    CommissionPlan: "SYSTEM__AGENT",
    plantype: "revenue",
    PlayersCount: "0",
    Mobile: "",
    MarketingWebsite: "",
    PendingCommission: "0.00",
    availablecommission: "0.00",
  },
  {
    Username: "example2@gmail.com",
    FirstName: "",
    LastName: "",
    Referral: "1063512 pefaco@gmail.com",
    ReferredLevel: "1",
    Registrationdate: "2023-12-05 04:44:14",
    Lastlogindate: "",
    Currency: "EUR",
    CommissionPlan: "SYSTEM__AGENT",
    plantype: "revenue",
    PlayersCount: "0",
    Mobile: "",
    MarketingWebsite: "",
    PendingCommission: "0.00",
    availablecommission: "0.00",
  },
  {
    Username: "example3@gmail.com",
    FirstName: "",
    LastName: "",
    Referral: "1063512 pefaco@gmail.com",
    ReferredLevel: "1",
    Registrationdate: "2023-12-05 04:44:14",
    Lastlogindate: "",
    Currency: "EUR",
    CommissionPlan: "SYSTEM__AGENT",
    plantype: "revenue",
    PlayersCount: "0",
    Mobile: "",
    MarketingWebsite: "",
    PendingCommission: "0.00",
    availablecommission: "0.00",
  },
];

export { mockColumnsUsers };
export type { mockColumnsUsersType };
