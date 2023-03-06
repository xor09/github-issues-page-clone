import React, {useContext} from 'react';
import {UserContext} from '../../App';
import './Details.css'


const Details = () => {
    const {setVisible, detail} = useContext(UserContext);
    return (
        <div className='details-wrapper'>
            <div className='details-header'>
                <button onClick={()=>setVisible(false)}>X</button>
            </div>
            <div className='details-body'>
                <div dangerouslySetInnerHTML={{__html: detail}} />
            </div>
        </div>
    );
}

export default Details;
