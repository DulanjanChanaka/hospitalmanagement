import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import db from '../firebase/firebase'

const ClinicRegister = () => {
    const [name, setName] = useState("")
    const [bookno, setBookno] = useState("")
    const [team, setTeam] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = async (e)=>{
      e.preventDefault();
      try {
        const docRef = await addDoc(collection(db, "clinicpatient"),{
          name,
          bookno,
          team,
          phone,
        })
        alert("Patient added successfull...!")
        setName("")
        setBookno("")
        setTeam("")
        setPhone("")
      } catch (error) {
        console.error('error adding document: ', error)
      }
    }

  return (
    <div>
        <form className='flex flex-col gap-5 mx-3 pt-5 ' onSubmit={handleSubmit} >
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
            <input type="text" value={bookno} onChange={(e) => setBookno(e.target.value)} placeholder='Enter Book No' className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
            <input type="text" value={team} onChange={(e) => setTeam(e.target.value)} placeholder='Enter Team No' className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Enter Phone No' className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
        </form>
    </div>
  )
}

export default ClinicRegister