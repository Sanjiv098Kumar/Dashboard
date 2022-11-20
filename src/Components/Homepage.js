import React from 'react'
import {Link} from "react-router-dom";
function Homepage() {
  return (
    <div>
        <div className="p-4 box mt-3 text-center">
        Hello Welcome to Homepage
      </div>
      
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
   </div>
  )
}

export default Homepage