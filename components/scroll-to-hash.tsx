"use client"

import { useEffect } from "react"

export default function ScrollToHash() {
  useEffect(() => {
    // Handle initial hash on page load
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)

      if (element) {
        setTimeout(() => {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          })
        }, 100)
      }
    }

    // Handle hash changes
    const handleHashChange = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1)
        const element = document.getElementById(id)

        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          })
        }
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return null
}

