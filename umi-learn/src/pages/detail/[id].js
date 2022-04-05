import React from 'react'

export default function $id(props) {
  console.log(props);
  return (
    <h1>{props.match.params.id}</h1>
  ) 
}
