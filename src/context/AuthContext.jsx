import React, { createContext, useContext, useState } from "react";

import { readJSON, writeJSON } from "./storage";
import { getProduct } from "../source/data/products";

// Demo authentication: users are stored in localStorage, passwords as SHA-256 hashes.
// Good enough to show the flow in a portfolio project — not real security.

const USERS_KEY = "bit_users";
const SESSION_KEY = "bit_session";

const AuthContext = createContext(null);

// A ready-made account so visitors can look around without registering
export const DEMO_EMAIL = "demo@backintime.shop";
export const DEMO_PASSWORD = "vintage2026";

const demoOrder = (number, date, ids, total, city, branch) => ({
  number,
  status: "Delivered",
  date,
  items: ids.map((id) => {
    const { title, price } = getProduct(id);
    return { id, title, price };
  }),
  total,
  payment: "card",
  delivery: { city, branch, phone: "+380 67 123 45 67" }
});

const DEMO_USER = {
  firstName: "Olivia",
  lastName: "Demo",
  email: DEMO_EMAIL,
  newsletter: false,
  // SHA-256 of DEMO_PASSWORD
  passwordHash: "1c401022c4c8a27915e76c703604d9604f363893dcb625fca1feb3bdd29a234c",
  orders: [
    demoOrder("BT-482913", "2026-09-28T14:20:00.000Z", [3, 17], 2992, "Kyiv", "12"),
    demoOrder("BT-371455", "2026-08-03T09:05:00.000Z", [11], 2660, "Lviv", "4")
  ]
};

const readUsers = () => {
  const users = readJSON(localStorage, USERS_KEY, {});
  return users[DEMO_EMAIL] ? users : { ...users, [DEMO_EMAIL]: DEMO_USER };
};

const hash = async (text) => {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
};

const readSession = () =>
  readJSON(localStorage, SESSION_KEY, null) || readJSON(sessionStorage, SESSION_KEY, null);

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(readUsers);
  const [email, setEmail] = useState(readSession);

  const saveUsers = (next) => {
    setUsers(next);
    writeJSON(localStorage, USERS_KEY, next);
  };

  // "remember me" keeps the session after the browser is closed
  const startSession = (userEmail, remember) => {
    writeJSON(remember ? localStorage : sessionStorage, SESSION_KEY, userEmail);
    setEmail(userEmail);
  };

  const register = async ({ firstName, lastName, email: rawEmail, password, newsletter, remember }) => {
    const key = rawEmail.trim().toLowerCase();
    if (users[key]) return { error: "An account with this email already exists." };

    const user = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: key,
      newsletter,
      passwordHash: await hash(password),
      orders: []
    };
    saveUsers({ ...users, [key]: user });
    startSession(key, remember);
    return { ok: true };
  };

  const login = async (rawEmail, password, remember) => {
    const key = rawEmail.trim().toLowerCase();
    const user = users[key];
    if (!user || user.passwordHash !== (await hash(password))) {
      return { error: "Invalid email or password." };
    }
    startSession(key, remember);
    return { ok: true };
  };

  const logout = () => {
    writeJSON(localStorage, SESSION_KEY, null);
    writeJSON(sessionStorage, SESSION_KEY, null);
    setEmail(null);
  };

  const addOrder = (order) => {
    if (!email || !users[email]) return;
    const current = users[email];
    saveUsers({ ...users, [email]: { ...current, orders: [order, ...current.orders] } });
  };

  const user = email ? users[email] || null : null;

  return (
    <AuthContext.Provider value={{ user, register, login, logout, addOrder }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
