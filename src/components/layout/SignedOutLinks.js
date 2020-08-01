import React from 'react'
import { Link } from 'react-router-dom'

//SignedOutLinks
const SignedOutLinks = () => {
  return (
    <div>
<ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <Link className="nav-link" to="/signin">Login</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/signup">SignUp</Link>
    </li>
  </ul>
    </div>
  )
}

export default SignedOutLinks