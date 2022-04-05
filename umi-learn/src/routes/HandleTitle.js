import React, { useEffect } from 'react'

export default function HandleTitle(props) {
  useEffect(() => {
    const title = props.route.title;
    document.title = title;
  })
  return props.children
}
