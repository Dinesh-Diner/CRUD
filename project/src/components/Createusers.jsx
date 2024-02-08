import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from "./css.module.css"

const Createusers = () => {

    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")

    let navigate=useNavigate()

    let NameData=(e)=>{
        setName(e.target.value)
    }

    let SalaryData=(e)=>{
        setSalary(e.target.value)
    }

    let CompanyData=(e)=>{
        setCompany(e.target.value)
    }

    let formHandle=(e)=>{
        e.preventDefault()

         let payload={
            empname:name,
            empsalary:salary,
            empcompany:company
        }

        axios.post(" http://localhost:3000/employees",payload)
        .then(()=>{console.log("data fetched");})
        .catch(()=>{console.log("errrorrrr");})

        console.log(name,salary,company);

        navigate("/users")

    }
  return (
    <div id='style.form1'>
       <form action="">

            <h2>CREATE-USERS</h2>
            <label htmlFor="">NAME</label>
            <input type="text" value={name}  onChange={NameData}/> <br />
            <label htmlFor="">SALARY</label>
            <input type="text" value={salary}  onChange={SalaryData}/> <br />
            <label htmlFor="">COMPANY</label>
            <input type="text" value={company}  onChange={CompanyData}/> <br />
            <button onClick={formHandle}>SUBMIT</button>

       </form>

    </div>
  )
}

export default Createusers