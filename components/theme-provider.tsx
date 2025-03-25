"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { PropsWithChildren } from "react"

type ThemeProviderProps = {
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

export function ThemeProvider({
  children,
  ...props
}: PropsWithChildren<ThemeProviderProps>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}