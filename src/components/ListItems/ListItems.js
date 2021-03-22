import React, { useState } from 'react';
import './ListItems.css';
import getItem from "../../api/getItem";

const ListItems = (props) => {
    const textInputRef = React.createRef();
    const[items, setItems] = useState([])

    const lookupItem = async () => {
        const itemNumber = textInputRef.current.value

        if(!itemNumber) {
            return
        }

        const itemInfo = await getItem(itemNumber)
        if(itemInfo){
            setItems([...items, itemInfo])
            props.onAddItem(itemInfo)
        }
    }

    const list = items.map(i => (
        <div key={i.number} className={'list-item'}>
            <div className={'item'}>{i.number}</div>
            <div className={'item'}>{i.description}</div>
            <div className={'item'}>1</div>
            <div className={'item'}>{i.price}</div>
        </div>
    ))

    return (
        <div className="list-items">
            <div>
                <input placeholder={'Enter item number'} ref={textInputRef}/>
                <button onClick={lookupItem}>Search</button>
            </div>
            {list}
        </div>
    )
}


export default ListItems;
