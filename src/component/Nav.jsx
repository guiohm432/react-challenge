import React from 'react'


function Nav() {
    return (
        <React.Fragment>
            <ul>
              <li>
                  <a href="/">Home</a>               
              </li>
              <li>
                <a href="/temperature">Temperature</a>
              </li>
              <li>
                <a href="/customize-image">Customize image</a>
              </li>
            </ul>
        </React.Fragment>
    )
}

export default Nav
