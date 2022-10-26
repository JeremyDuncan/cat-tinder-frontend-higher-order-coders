import React from 'react'
import notFound from "../assets/404_cat.jpeg"

const NotFound = () => {

  return (
    <div>
      <h1>NotFound</h1>
      <img className="image" src={notFound} />
    </div>
  )
}

export default NotFound