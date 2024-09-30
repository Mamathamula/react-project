import React from 'react'
 
export default function Comp2(props) {
  return (
    <div>
        <h2>{props.person.name}</h2>
     <img src={props.person.pic} alt=''></img>
    </div>
  )
}