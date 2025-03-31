
import * as React from "react"

// Define multiple breakpoints for more precise responsive design
export const BREAKPOINTS = {
  mobile: 640,  // sm
  tablet: 768,  // md
  laptop: 1024, // lg
  desktop: 1280 // xl
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${BREAKPOINTS.mobile - 1}px)`)
    
    const onChange = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS.mobile)
    }
    
    // Add event listener
    mql.addEventListener("change", onChange)
    
    // Set initial value
    onChange()
    
    // Clean up
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

export function useBreakpoint(breakpoint: keyof typeof BREAKPOINTS) {
  const [isBelow, setIsBelow] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${BREAKPOINTS[breakpoint] - 1}px)`)
    
    const onChange = () => {
      setIsBelow(window.innerWidth < BREAKPOINTS[breakpoint])
    }
    
    // Add event listener
    mql.addEventListener("change", onChange)
    
    // Set initial value
    onChange()
    
    // Clean up
    return () => mql.removeEventListener("change", onChange)
  }, [breakpoint])

  return !!isBelow
}
