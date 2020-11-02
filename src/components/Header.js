import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <h1>
        <strong>I am Destiny</strong>, a freelance
        <br />
        web designer and developer
        <br />
        ready <a href="http://html5up.net">for hire</a>.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
