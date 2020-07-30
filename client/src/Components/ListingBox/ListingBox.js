import React from 'react'

const ListingBox = (props) => {
  const {title, text, images, username, permalink} = props;
  return (
    <div>
      <h1>{title}</h1>
      <div>{text}</div>
      <p>{images}</p>
      <p>{username}</p>
      <a href="{permalink">Permalink</a>
    </div>
  )
}

export default ListingBox
