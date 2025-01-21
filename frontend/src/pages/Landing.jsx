
import React from 'react'
import { NavLink } from 'react-router'

export default function Landing() {
  return (
    <>
        <header className="header">
            <NavLink to="/" className={"header-title"}>WeWatch</NavLink>
            <div className="header-links">
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Signup</NavLink>
            </div>
        </header>
        <section className="landing">
            <div className="landing-info">
                <h1>WeWatch</h1>
                <h2>Discover, track, and indulge in your favorite anime series with our feature-packed watchlist site.</h2>
            </div>
            <a href="/signup" className="landing-cta">Get started →</a>
        </section>
    </>
  )
}
