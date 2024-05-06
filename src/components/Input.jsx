import React, { useState } from 'react'
import List from './List'

const Input = () => {
    let [task , setTask] = useState('')
    let [allTasks , setAllTasks] = useState([])
    const addTask = async () =>{
        let obj = {
          id : allTasks.length+1 ,
          task : task
        }
        setAllTasks([...allTasks , obj])
        console.log(obj)
    }
  return (
    <>
    <div className='mt-10'>
        <input type="text" placeholder='Enter the task Here' onChange={(e)=>setTask(e.target.value)}  className='border rounded px-2 text-xl h-10 border-gray-300 focus:outline-none focus:border-blue-500'/>
        <button onClick={addTask} className='border h-10 w-20 rounded px-4 py-2 mx-4 text-center bg-blue-600 hover:bg-blue-900 text-white'>Add</button>
    </div>
    <List tasks = {allTasks} setTasks={setAllTasks}/>
    </>
  )
}

export default Input