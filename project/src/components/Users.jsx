import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {

    let [info,setInfo]=useState([])

    useEffect(()=>{
        axios.get(" http://localhost:3000/employees")
        .then((e)=>{
            setInfo(e.data)
        })
    },[])

let deleteusers=(id)=>{
    axios.delete(`http://localhost:3000/employees/${id}`)
    window.location.assign("/users")
}
  return (
    <div>
        {info.map((x)=>{
            return(
                <div>
                    <label htmlFor="">name:</label>
                    <h3>{x.empname}</h3> 

                    <label htmlFor="">salary:</label>
                    <h3>{x.empsalary}</h3> 

                    <label htmlFor="">company:</label>
                    <h3>{x.empcompany}</h3> 

                    <button onClick={()=>{deleteusers(x.id)}}>delete</button>
                    <button ><Link to={`/edit/${x.id}`}>edit</Link></button>
                </div>
            )
        })}
    </div>
  )
}

export default Users