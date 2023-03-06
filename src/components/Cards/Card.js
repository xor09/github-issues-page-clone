import React, {useContext}  from 'react';
import {UserContext} from '../../App';
import './Card.css'

const Card = ({title, issueNumber, userName, detail}) => {
    const {setVisible, setDetail} = useContext(UserContext);

    const setter = (detail) =>{
        setVisible(true);
        setDetail(detail)
    }
    return (
        <div className='card-wrapper' onClick={()=>setter(detail)}>
            <div className='title'>
                {title}
            </div>
            <div className='subtitle'>
                <span>#{issueNumber}</span> created by {userName}
            </div>
             
        </div>
    );
}

export default Card;
