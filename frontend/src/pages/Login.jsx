
import React, { useState } from 'react'
import { NavLink } from 'react-router'

export default function Login() {
  const [loginInfo, setLoginInfo] = useState(
    {
      email: '',
      password: ''
    }
  )
  return (
    <section className='login-page'>
      <header className="header">
          <NavLink to="/" className="header-title">WeWatch</NavLink>
      </header>

    <form className="login-form" action="/login" method="POST">
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" />
    </form>
    </section>
  )
}
