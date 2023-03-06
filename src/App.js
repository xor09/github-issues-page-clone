import './App.css';
import React,{useState, useEffect, createContext} from 'react';
import Information from './components/Information/Information'; 
import Pagination from './components/Pagination/Pagination'
import axios from 'axios';

export const UserContext = createContext();

function App() {
  const [issues, setIssues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [toIssue, setToIssue] = useState(5);
  const [fromIssue, setFromIssue] = useState(0);
  const [isVisible, setVisible] = useState(false);
  const [detail, setDetail] = useState(``);


  useEffect(() => {
      const fetchData = async () => {
        const info = await axios.get("https://api.github.com/repos/jerryjliu/gpt_index/issues")
        setIssues(info.data);
      }
      fetchData()
  }, []);

  const issuesPerPage = 5;
  const issuesLength = issues.length;

  return (
    <UserContext.Provider value={{
      issues, currentPage, setCurrentPage, issuesPerPage, issuesLength, toIssue, setToIssue, 
      fromIssue, setFromIssue, isVisible, setVisible, detail, setDetail
    }}>
      <div className="App">
        <h1> ISSUES </h1>
        {
          issues.length ? <Information/> : <p>Loading...</p>
        }
        {
          !isVisible ? <Pagination/> : ""
        }
      </div>
    </UserContext.Provider>
  );
}

export default App;
