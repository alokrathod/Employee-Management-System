import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTasks = () => {

  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 border border-gray-600 backdrop-blur-sm rounded-xl'>
      <div className='bg-red-400 mt-3 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5'>New Tasks</h3>
        <h5 className='text-lg font-medium w-1/5'>Active Tasks</h5>
        <h5 className='text-lg font-medium w-1/5'>Completed Tasks</h5>
        <h5 className='text-lg font-medium w-1/5'>Failed Tasks</h5>
      </div>
      <div>
        {userData.employees.map((elem, idx) => {

          return (<div key={idx} className='border-2 border-emerald-500 mt-3 py-2 px-4 flex justify-between rounded'>
                    <h2 className='text-lg font-medium w-1/5 text-white-600'>{elem.name}</h2>
                    <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskCounts.newTask}</h3>
                    <h5 className='text-lg font-medium w-1/5 text-yellow-600'>{elem.taskCounts.active}</h5>
                    <h5 className='text-lg font-medium w-1/5 text-green-600'>{elem.taskCounts.completed}</h5>
                    <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
                  </div>
          )
        })} 
      </div>    
    </div>
  )
}

export default AllTasks
