import { create } from 'zustand'

interface ThemeState{
    light: boolean
}

type ThemeAction = {
    setLight: (light: boolean) => void
}

export const useTheme = create<ThemeState & ThemeAction>((set) => ({
    light: false,
    setLight: (light: boolean) => set({ light }),
  }))