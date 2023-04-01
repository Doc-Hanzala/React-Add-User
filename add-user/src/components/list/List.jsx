import React from 'react'
import './list.css'

const List = ({list}) => {
   
  return (
    <>
   <ul>
    {list.map((person)=>{
        return (
            <li key={person.age} >
                {person.name} ---- {person.age}Years old
            </li>
           
        )
    })}
   </ul>
   </>
  )
}

export default List