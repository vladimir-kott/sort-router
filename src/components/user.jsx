import React, {useState, useEffect} from "react"
import { useHistory } from "react-router-dom"
import api from "../api"
import Qualitie from "./qualitie"

const User = ({id}) => {
    const history = useHistory()
    const [user, setUser] = useState(api.users.getById(id))
    useEffect(() => {
        api.users.getById(id).then(data => setUser(data))
    }, [])
    console.log(user)
    console.log(user.profession)
    let profession = user.profession
    let qualities = user.qualities
    console.log(qualities)

    const handleSave = () => {
        history.replace("/users")
    } 

    return <>
        <h2>{user.name}</h2>
        <h2>Профессия: {/*profession.name*/}</h2>
        <Qualitie qualities = {qualities}>{/*qualities.name*/}</Qualitie>
        <h2>Meatings: {user.completedMeetings}</h2>
        <h2>Rate: {user.rate}</h2>
        <button onClick={()=>{handleSave()}}>Назад</button>
    </>
}
 
export default User;