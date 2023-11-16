import { useState, useEffect } from "react"

export default function SelectedContact ({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState([{ id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" }])

    useEffect(()=> {
        const fetchContact = async() => {
            try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
            const result = await response.json()
            console.log(result)
            setContact(result);
            }catch(error){console.error(error)}
        }
        fetchContact()
    },[])
    return ( 
        <>
           <div>`Name: {contact.name}`</div>
           <div>`Email: {contact.email}`</div>
           <button onClick={() => {setSelectedContactId(null)}}>Back</button>
        </> 
    )
    
}