import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
	<div>
     <div class="bg-image">
      <div class="welcome-message">
        <h1>Post Anonymous Messages On Anonymous MIS</h1>
        <form>
          <input type="text" placeholder="Enter your fake username(use something unknown)"/>
          <Link to="/messages">
          <button type="submit">Get Started</button>
          </Link>
         
        </form>
      </div>
    </div>
  </div>
  )
}

export default Home