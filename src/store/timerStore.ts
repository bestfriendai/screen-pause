import { create } from 'zustand';

export interface Session { id: string; category: string; duration: number; date: string; completed: boolean }

interface TimerStore { sessions: Session[]; streak: number; addSession: (session: Session) => void; }
export const useTimerStore = create<TimerStore>((set) => ({
  sessions: [],
  streak: 0,
  addSession: (session) => set((state) => ({ sessions: [...state.sessions, session] })),
}));
