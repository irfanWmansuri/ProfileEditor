import { useState } from "react"

export default function EditProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState('Irfan')
    const [lastName, setLastName] = useState('Khan')
    return (
        <div className="testform">
            <form onSubmit={(e) => {
                e.preventDefault();
                setIsEditing(!isEditing);
            }}>
                <label>First name:{' '}{isEditing ? (<input value={firstName} onChange = {e =>{setFirstName(e.target.value)}}/>) : (<strong>{firstName}</strong>)}</label>
                <label>Last Name:{' '}{isEditing ? (<input value={lastName} onChange={e => {setLastName(e.target.value)}}/>) : (<strong>{lastName}</strong>)}</label>
                <br />
                <button type='submit'>{isEditing ? 'Save' : 'Edit'} Profile</button>
                <p><i>Hello {firstName} {lastName}</i></p>
            </form>
        </div>
    )
}
