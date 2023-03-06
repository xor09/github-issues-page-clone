import React, {useContext} from 'react';
import {UserContext} from '../../App';
import './Pagination.css'

const Pagination = () => {
    const {issuesPerPage,  issuesLength, currentPage, setCurrentPage, setToIssue, setFromIssue} = useContext(UserContext);
    let pageNumbers = [];
    for(let i=1; i<=Math.ceil(issuesLength/issuesPerPage); ++i){
        pageNumbers.push(i);
    }

    const setter = (pageNumber) =>{
        const toIssueNo = Math.min(issuesPerPage*pageNumber, issuesLength);
        const fromIssueNo = toIssueNo - issuesPerPage;
        setCurrentPage(pageNumber);
        setFromIssue(fromIssueNo);
        setToIssue(toIssueNo);
    }

    return (
        <div>
            {
               pageNumbers.map((value, index) => {
                return currentPage === value ? 
                <button className='page-index active' key={index} onClick={ () => setter(value)}> {value} </button>
                : <button className='page-index disabled' key={index} onClick={ () => setter(value)}> {value} </button>
               })
            }
        </div>
    );
}

export default Pagination;
