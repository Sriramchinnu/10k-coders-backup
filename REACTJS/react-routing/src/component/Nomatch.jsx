import React from 'react'
import { Link } from 'react-router-dom'

export default function Nomatch() {
  return (
    <div>
      <h3>nothing to see here...!!!!</h3>
      <p><Link to="/" >to go home page</Link></p>
    </div>
  )
}