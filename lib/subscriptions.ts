const terminalSubscriptionStatuses = new Set([
  "canceled",
  "incomplete",
  "incomplete_expired",
]);

const healthySubscriptionStatuses = new Set([
  "active",
  "trialing",
]);

export const isManagedSubscriptionStatus = (status: string | null | undefined) => {
  return Boolean(status && !terminalSubscriptionStatuses.has(status));
};

export const isHealthySubscriptionStatus = (status: string | null | undefined) => {
  return Boolean(status && healthySubscriptionStatuses.has(status));
};

export const needsSubscriptionAttention = (status: string | null | undefined) => {
  return isManagedSubscriptionStatus(status) && !isHealthySubscriptionStatus(status);
};
