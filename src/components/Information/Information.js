import React, {useContext} from 'react';
import {UserContext} from '../../App';
import Card from '../Cards/Card'
import Details from '../Details/Details'
import './Information.css'

const Information = () => {
    const {issues, toIssue, fromIssue, isVisible} = useContext(UserContext);
    return (
        <div className='info-wrapper'>
        {
            isVisible ? 
            <Details/> :
            issues.slice(fromIssue, toIssue).map((value, index) => {
                return <Card key={index} title={value.title} issueNumber={value.number} userName={value.user.login} detail={value.body}/>
            }) 
        }

        </div>
    );
}

export default Information;
