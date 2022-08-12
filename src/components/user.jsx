import React, {useState, useEffect} from "react"
import { useHistory } from "react-router-dom"
import api from "../api"
import QualitiesList from "./qualitiesList"

const User = ({id}) => {
    const history = useHistory()
    const [user, setUser] = useState()
    useEffect(() => {
        api.users.getById(id).then(data => setUser(data))
    }, [])

    const handleSave = () => {
        history.replace("/users")
    } 

    return <>
        {user? (<>
            <h2>{user.name}</h2>
            <h2>Профессия: {user.profession.name}</h2>
            <QualitiesList qualities = {user.qualities}></QualitiesList>
            <h2>Meatings: {user.completedMeetings}</h2>
            <h2>Rate: {user.rate}</h2>
            <button onClick={()=>{handleSave()}}>Назад</button>
        </>):(
            <div>Loading...</div>
        )}
    </>
}
 
export default User;