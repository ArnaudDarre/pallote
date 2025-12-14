import { useEffect, useState, ReactNode } from 'react'

type ViewportSize = 'mobile-sm' | 'mobile' | 'tablet' | 'laptop' | 'desktop'
type DisplayCondition = ViewportSize | 'touch'

const viewportSizes: Record<ViewportSize, number> = {
  'mobile-sm': 375,
  'mobile': 576,
  'tablet': 768,
  'laptop': 1024,
  'desktop': 1280
}

export interface DisplayProps {
  show?: DisplayCondition
  hide?: DisplayCondition
  children?: ReactNode
}

export const Display = ({ show, hide, children }: DisplayProps) => {
  const [isDisplayed, setDisplayed] = useState(false)

  const updateMedia = () => {
    if (show === 'touch') {
      setDisplayed(navigator.maxTouchPoints > 0)
    } else if (hide === 'touch') {
      setDisplayed(navigator.maxTouchPoints === 0)
    } else {
      const viewportValue = viewportSizes[(show || hide) as ViewportSize]
      if (show) {
        setDisplayed(window.innerWidth <= viewportValue)
      } else if (hide) {
        setDisplayed(window.innerWidth > viewportValue)
      }
    }
  }

  useEffect(() => {
    updateMedia()
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  }, [show, hide])

  return <>{isDisplayed ? children : null}</>
}
