import React from 'react'

export const NavBar: React.FC = () => {
  return (
    <nav>
      <div
        className="nav-wrapper  purple darken-3 px1
"
      >
        <a href="/" className="brand-logo">
          React + Typescript
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/">To do List</a>
          </li>
          <li>
            <a href="/">Information</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
