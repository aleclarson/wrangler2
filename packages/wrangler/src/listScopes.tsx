import * as React from "react";
import { render } from "ink";
import Table from "ink-table";
import { throwIfNotInitialised } from "./user";
import { Scopes } from "./scopes";

export function listScopes(): void {
  throwIfNotInitialised();
  console.log("💁 Available scopes:");
  const data = Scopes.map((scope, index) => ({
    Scope: scope,
    Description: ScopeDescriptions[index],
  }));
  render(<Table data={data} />);
  // TODO: maybe a good idea to show usage here
}

const ScopeDescriptions = [
  "See your account info such as account details, analytics, and memberships.",
  "See your user info such as name, email address, and account memberships.",
  "See and change Cloudflare Workers data such as zones, KV storage, namespaces, scripts, and routes.",
  "See and change Cloudflare Workers KV Storage data such as keys and namespaces.",
  "See and change Cloudflare Workers data such as filters and routes.",
  "See and change Cloudflare Workers scripts, durable objects, subdomains, triggers, and tail data.",
  "See Cloudflare Workers tail and script data.",
  "Grants read level access to account zone.",
];
