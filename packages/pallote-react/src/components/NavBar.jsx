import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { Section } from './Section'

export const NavBar = ({ logo, align, className, children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('js-navbar', !isOpen);
  };

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
            aria-label="Open mobile menu"
            className={classnames('navbar_button', { 'js-opened': isOpen })}
            onClick={toggleNav}
          >
            <span></span>
          </button>
        </div>
        <nav aria-label="main-nav" className={classnames('navbar_nav nav', { 'js-opened': isOpen })}>
          <div className='nav_container'>
            {children}
          </div>
        </nav>
      </Section>
    </header>
  )
}

NavBar.propTypes = {
  logo: PropTypes.node,
  align: PropTypes.oneOf([
    'left',
    'right'
  ]),
  className: PropTypes.node,
  children: PropTypes.node.isRequired
}
