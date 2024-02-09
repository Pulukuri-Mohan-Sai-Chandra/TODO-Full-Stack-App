import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Model from './Model/model';
import db from '../db/tasks.json'
import Spinner from './Spinner/Spinner'

function App() {

  const [tasks, setTasks] = useState(db)
  const [modopen, setModOpen] = useState(false);
  const [spinner, setSpinner] = useState(false)
  const deleteTask = async (row) => {
    row.spin = true
    setSpinner(true)
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        alert("Deleted")
        resolve('ok')
      }, 2000)
    })
    let temp = tasks.filter((tsk) => tsk.title !== row.title)
    setSpinner(false)
    row.spin = false
    setTasks(temp)
  }

  return (

    <div className='todoApp'>
      <div className="title">
        <h1 className='heading'>TO-DO App</h1>
      </div>
      <div className="newContainer">
        <button className='newTask' onClick={() => setModOpen(true)}>New Task</button>
        {
          modopen && <Model closeModel={setModOpen} />
        }
      </div>
      <div className="taskListing">
        <div className="bar">
        </div>
        <table>
          <thead>
            <th>No</th>
            <th>Title</th>
            <th>Status</th>
            <th></th>
            <th></th>
          </thead>
          <div className="lineBreak">

          </div>
          <tbody>
            {
              (tasks && tasks.map((val, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{val.title}</td>
                  <td>{val.status}</td>
                  <div className="operations">
                    <button disabled={val.spin} id={index} className="cancel" onClick={() => deleteTask(val)} >{(val.spin) ? <Spinner color={'red'} /> : "Delete"}</button>
                    <button disabled={val.spin} key={index} className="save-btn">Completed</button>
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
