import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Modal from './Modal';
const List = ({tasks, setTasks}) => {
  const [open, setOpen] = useState(false);
  const [edit , setEdit] = useState()
  const [id , setId] = useState()
  const deleteTask = (idToRemove) => {
    let indexToRemove = tasks.findIndex(obj => obj.id === idToRemove);
    if (indexToRemove !== -1) {
      tasks.splice(indexToRemove, 1);
    }
    setTasks([...tasks])
  }
  return (
    <div>
       {tasks.map((elem)=>(
        <>
         <div className='border rounded-2xl bg-gray-800 mt-10 border-blue-500 w-1/2 mx-auto h-10 flex justify-between mt-5'>
            <div className='text-white text-left text-xl ml-4 py-1 flex'>
              <div className='border border-green-400 bg-green-500 h-5 w-5 rounded-full mt-1.5 mr-2'></div>
              {elem.task} 
            </div>
            <div className='py-3 flex gap-4 px-4'>
              <FaEdit className='cursor-pointer bg-white' onClick={() => {
                setOpen(!open);
                setEdit(elem.task)
                setId(elem.id)
              }}/>
              <RiDeleteBin6Line className='cursor-pointer bg-white' onClick={()=>deleteTask(elem.id)} />
            </div>
        </div>
        </>
       ))}
       {open ? <Modal open={open} setOpen={setOpen} details={{1:edit , 2:tasks , 3:id}} setAllTasks={setTasks} setId={setId} setEdit={setEdit}/> : null}
    </div>
  )
}

export default List