import React from 'react'

const Modal = ({open ,setOpen , details , setEdit , setId , setAllTasks}) => {
    const saveEdit = () => {
        let indexToEdit = details['2'].findIndex(obj => obj.id === details['3']);
        details['2'][indexToEdit].task = details['1']
        setAllTasks([...details['2']])
    }
  return (
    <div className="relative z-50">
        <div className="fixed inset-0 bg-black/10 " aria-hidden="true"/>

        <div className="fixed inset-0 flex items-center justify-center p-4 ">
            <div className="flex min-h-full items-center justify-center">
            <div className="flex flex-col gap-2 bg-white px-4 pb-4 rounded-lg bg-green-900">
                <h1 className="text-lg text-black mt-2 pr-48">Edit Your Task</h1>
                <hr/>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Please edit your task here</label>
                    <input type="text" value={details['1']} onChange={(e)=>setEdit(e.target.value)} className="py-2 px-4 border border-blue-600 rounded-lg" placeholder=""/>
                </div>
                <hr/>
                <div className="flex flex-row gap-2">
                    <button onClick={() => setOpen(!open)} className="flex-1 py-2 px-4 bg-gray-500 hover:bg-gray-600 text-white font-bold text-lg rounded-full">Close</button>
                    <button onClick={() => {
                        setOpen(!open)
                        saveEdit()
                    }} className="flex-1 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-full">Save</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Modal