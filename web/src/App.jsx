import fs from 'fs'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import './index.css'
import Model from './Model/model';
import Spinner from './Spinner/Spinner'
import axios, { all } from 'axios'
import { toast } from 'react-toastify'

function App() {
  const navigate = useNavigate();
  const [alltasks, setAllTasks] = useState([])
  const [modopen, setModOpen] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [editdata, setEditData] = useState({})
  const [todoTasks, setTodoTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  useEffect(() => {
    let todotsk = alltasks.filter((obj) => obj.status == 0)
    let donetsk = alltasks.filter((obj) => obj.status != 0)
    setDoneTasks(donetsk)
    setTodoTasks(todotsk)
  }, [alltasks])
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get(import.meta.env.VITE_GETTASKS)
        console.log(response)
        setAllTasks(response.data.rows)
      }
      catch (e) {
        console.log(e.message)
      }
    }
    isLogged();
    getData();
  }, [])
  useEffect(() => {
    const token = localStorage.getItem('TID');
    if (token == undefined) {
      navigate('/auth')
    }
  }, [])
  const handleEdit = (row) => {
    setModOpen(true)
    setEditData(row)
  }
  const handleComplete = async (row) => {
    try {
      let response = await axios.post(import.meta.env.VITE_UPDATETASK, { ...row, ["status"]: 1 })
      toast.success("Completed")
      window.location.reload();
    }
    catch (e) {
      toast.error(e.message)
    }
  }
  const deleteTask = async (row) => {
    row.spin = true
    setSpinner(true)
    try {
      const res = await axios.post(import.meta.env.VITE_DELETETASK, row)
      toast.success("Deleted Successfully")
      setSpinner(false)
      window.location.reload()

    }
    catch (e) {
      toast.error(e.message)
      setSpinner(false)
    }
    row.spin = false
  }


  const handleNewTask = () => {
    setModOpen(true)
    setEditData({})
  }

  const isLogged = () => {
    const TUID = localStorage.getItem('TUID')
    // if (TUID == null) {
    //   navigate('/auth')
    // }
    console.log(TUID)
  }
  return (
    < div className='todoApp' >
      <div className="title">
        <h1 className='heading'>TO-DO App</h1>
      </div>
      <div className="newContainer">
        <div className="new-button">
          <button className='newtask-btn' onClick={() => handleNewTask()}>New Task</button>
        </div>
        {
          modopen && <Model closeModel={setModOpen} data={editdata} />
        }
      </div>
      <div className="task-container">
        <div className="todoTasks">
          <div className="taskListing">
            <div className="bar">
            </div>
            <table>
              <thead>
                <th>No</th>
                <th>Title</th>
                <th></th>
                <th></th>
                <th></th>
              </thead>
              <div className="lineBreak">

              </div>
              <tbody>
                {
                  (todoTasks.length > 0 && todoTasks.map((val, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{val.title}</td>
                      <div className="operations">
                        <button disabled={val.spin} id={index} className="cancel" onClick={() => deleteTask(val)} >{(val.spin) ? <Spinner color={'red'} /> : "Delete"}</button>
                        <button disabled={val.spin} key={index} onClick={() => handleComplete(val)} className="save-btn">Completed</button>
                        <button onClick={() => handleEdit(val)} className="edit-btn">Edit</button>
                      </div>
                    </tr>
                  )))
                }
              </tbody>
            </table>
            <div className="bar">
            </div>
          </div>
        </div>
        <div className="doneTasks">
          <div className="taskListing">
            <div className="bar">
            </div>
            <table>
              <thead>
                <th>No</th>
                <th>Title</th>
                <th></th>
                <th></th>
                <th></th>
              </thead>
              <div className="lineBreak">

              </div>
              <tbody>
                {
                  (doneTasks.length > 0 && doneTasks.map((val, index) => (
                    <tr key={index}>
                      <td style={{ fontStyle: "italic", color: 'gray' }} >{index + 1}</td>
                      <td style={{ textDecoration: "line-through", fontStyle: "italic", color: 'gray' }} >{val.title}</td>
                      <div className="operations">
                        <button disabled={val.spin} id={index} className="cancel" onClick={() => deleteTask(val)} >{(val.spin) ? <Spinner color={'red'} /> : "Delete"}</button>
                      </div>
                    </tr>
                  )))
                }
              </tbody>
            </table>
            <div className="bar">
            </div>
          </div>
        </div>


      </div>
    </div >

  )
}

export default App
