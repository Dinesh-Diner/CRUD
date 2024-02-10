import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from "./homePage.module.css"

const Editpage = () => {

    let obj=useParams()
    console.log(obj);

    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("") 

    let navigator=useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:3000/employees/${obj.id}`)
        .then((response)=>{
            setName(response.data.empname)
            setSalary(response.data.empsalary)
            setCompany(response.data.empcompany)
        })
    },[])

    let getname=(e)=>{
        setName(e.target.value)
    }

    let getsalary=(e)=>{
        setSalary(e.target.value)
    }

    let getcompany=(e)=>{
        setCompany(e.target.value)
    }

    let formHandle=()=>{
    
    let payload={
        empname:name,
        empsalary:salary,
        empcompany:company
    }

        axios.put(`http://localhost:3000/employees/${obj.id}`,payload)
        .then(()=>{console.log("updated...");})

        navigator("/users")
    }
  return (
    <div id={style.createUser}>
         
            <form action="">
            <h5>EDIT USERS</h5>
                <label htmlFor="">NAME</label>
                <input type="text" value={name} onChange={getname} /> <br />
                <label htmlFor="">SALARY</label>
                <input type="text" value={salary}  onChange={getsalary}/> <br />
                <label htmlFor="">COMPANY</label>
                <input type="text" value={company} onChange={getcompany} /> <br />
                <button onClick={formHandle}>SUBMIT</button>
            </form>
    </div>
  )
}

export default Editpage