import { useState, ReactNode } from 'react'
import classnames from 'classnames'

import { Section, SectionProps } from './Section'

type NavBarAlign = 'left' | 'right'

export interface NavBarProps extends Omit<SectionProps, 'children'> {
  logo?: ReactNode
  align?: NavBarAlign
  className?: string
  children: ReactNode
}

export const NavBar = ({ logo, align, className, children, ...props }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
    document.body.classList.toggle('js-navbar', !isOpen)
  }

  return (
    <header>
      <Section
        className={classnames([
          'navbar',
          {
            [`navbar-${align}`]: align,
            'js-opened': isOpen
          },
          className
        ])}
        {...props}
      >
        <div className="navbar_main">
          <div className="navbar_logo">
            {logo}
          </div>
          <button
            type="button"
            aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isOpen}
            aria-controls="navbar-nav"
            className={classnames('navbar_button', { 'js-opened': isOpen })}
            onClick={toggleNav}
          >
            <span aria-hidden="true"></span>
          </button>
        </div>
        <nav id="navbar-nav" aria-label="Main navigation" className={classnames('navbar_nav nav', { 'js-opened': isOpen })}>
          <div className='nav_container'>
            {children}
          </div>
        </nav>
      </Section>
    </header>
  )
}
