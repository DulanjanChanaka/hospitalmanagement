import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import db from '../firebase/firebase'

const Registration = () => {
    const [name, setName] = useState("")
    const[byear, setByear] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [username, setUsername] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, 'opdpatient'),{
                name,
                byear,
                phone,
                address,
                username,

            })

            alert("Added Successfull...!");
            setName("")
            setByear("")
            setPhone("")
            setAddress("")
            setUsername("")
            console.log(docRef)
        } catch (error) {

            console.error('error adding document: ', error)
            
        }
    }


    return (
        <div className='mx-4 pt-5'>
            <h3 className='font-bold text-center'>Register Patient</h3>
            <div>
                <form className='flex flex-col gap-4 pt-5 ' onSubmit={handleSubmit}>
                    
                    <input name='name' value={name} required onChange={(e)=> setName(e.target.value)} type="text" className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Name" />
                    <input name='birthyear' value={byear} required onChange={(e)=> setByear(e.target.value)} type="text" className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Birth Year" />
                    <input name='phone' value={phone} required onChange={(e)=> setPhone(e.target.value)} type="text" className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Phone " />
                    <input name='address' value={address} required onChange={(e)=> setAddress(e.target.value)} type="text" className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Address" />
                    <input name='username' value={username} required onChange={(e)=> setUsername(e.target.value)} type="text" className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="User Name" />
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Registration