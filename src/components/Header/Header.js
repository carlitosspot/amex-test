import React, {useState} from 'react';
import getUser from "../../api/getUser";
import './header.css';


const Header = () => {
    const[user, setUser] = useState({})
    const textInputRef = React.createRef();

    const handleUserName = async (e) => {
        const userName = textInputRef.current.value
        const userInfo = await getUser(userName)
        if(userInfo){
            setUser(userInfo)
        } else {
            setUser({})
        }
    }

    return (
        <header className="header">
           <input type={'text'} ref={textInputRef} placeholder={'Enter customer number'}/>
            <button onClick={handleUserName}>Lookup Customer</button>
            <div>name: {user?.name} </div>
            <div>company name: {user?.companyName} </div>
        </header>
    )
}


export default Header;
