import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./homePage.module.css"

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
    <div id={style.userHome}>
        {info.map((x)=>{
            return(
                
                <div>
                <table>
                    <tr>
                        <th colSpan={2}>Employee {x.id}</th>
                    </tr>
                    <tr>
                        <td>Name :</td>
                        <td>{x.empname}</td>
                    </tr>
                    <tr>
                        <td>Salary :</td>
                        <td>{x.empsalary}</td>
                    </tr>
                    <tr>
                        <td>Company :</td>
                        <td>{x.empcompany}</td>
                    </tr>
                    <tr>
                        <td><button><Link to={`/edit/${x.id}`}>Edit</Link></button></td>
                        <td><button onClick={()=>{deleteusers(x.id)}}><Link>Delete</Link></button></td>
                    </tr>
                </table>
            </div>
            )
        })}
    </div>
  )
}

export default Users