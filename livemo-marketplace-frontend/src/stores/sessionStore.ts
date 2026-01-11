import { create } from "zustand";
import { persist } from "zustand/middleware";

export type SessionUser = {
  id: string;
  email: string;
  name?: string;
};

type SessionState = {
  user: SessionUser | null;
  setUser: (user: SessionUser | null) => void;
  clear: () => void;
};

export const useSessionStore = create<SessionState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clear: () => set({ user: null }),
    }),
    { name: "livemo-marketplace-session", version: 1 }
  )
);
