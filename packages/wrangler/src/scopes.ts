export type Scope =
  | "account:read"
  | "user:read"
  | "workers:write"
  | "workers_kv:write"
  | "workers_routes:write"
  | "workers_scripts:write"
  | "workers_tail:read"
  | "zone:read"
  | "offline_access"; // this should be included by default

export const Scopes: Scope[] = [
  "account:read",
  "user:read",
  "workers:write",
  "workers_kv:write",
  "workers_routes:write",
  "workers_scripts:write",
  "workers_tail:read",
  "zone:read",
];
