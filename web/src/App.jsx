import fs from 'fs'
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Model from './Model/model';
import Spinner from './Spinner/Spinner'
import axios from 'axios'
import { toast } from 'react-toastify'
import db from '../db/tasks'

function App() {

  const [tasks, setTasks] = useState(db)
  const [modopen, setModOpen] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [editdata, setEditData] = useState({})
  const handleEdit = (row) => {
    setModOpen(true)
    setEditData(row)
  }
  const deleteTask = async (row) => {
    row.spin = true
    setSpinner(true)
    try {
      const res = await axios.post(import.meta.env.VITE_DELETETASK)
      toast.success("Deleted Succfully")
      setSpinner(false)
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
  return (
    <div className='todoApp'>
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
              (tasks.length && tasks.map((val, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{val.title}</td>
                  <td>{val.status}</td>
                  <div className="operations">
                    <button disabled={val.spin} id={index} className="cancel" onClick={() => deleteTask(val)} >{(val.spin) ? <Spinner color={'red'} /> : "Delete"}</button>
                    <button disabled={val.spin} key={index} className="save-btn">Completed</button>
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

  )
}

export default App
