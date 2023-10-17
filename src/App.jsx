import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './First'
import Second from './Second'
import MyTable from './MyTable'
import Third from './Third'
import Fourth from './Fourth'

function App() {
  const [count, setCount] = useState(0)
  const sampleData = [

    { id: 1, name: 'John Doe', age: 25, city: 'New York', occupation: 'Engineer' },
  
    { id: 2, name: 'Jane Smith', age: 30, city: 'San Francisco', occupation: 'Designer' },
  
    { id: 3, name: 'Bob Johnson', age: 28, city: 'Chicago', occupation: 'Accountant' },
  
    { id: 4, name: 'Alice Brown', age: 35, city: 'Los Angeles', occupation: 'Teacher' },
  
    { id: 5, name: 'Charlie Wilson', age: 40, city: 'Houston', occupation: 'Doctor' },
  
    { id: 6, name: 'Eva Davis', age: 22, city: 'Miami', occupation: 'Artist' },
  
    { id: 7, name: 'Frank Miller', age: 32, city: 'Seattle', occupation: 'Software Engineer' },
  
    { id: 8, name: 'Grace Taylor', age: 45, city: 'Boston', occupation: 'Lawyer' },
  
    { id: 9, name: 'Eva Davis', age: 28, city: 'Denver', occupation: 'Marketing Manager' },
  
    { id: 10, name: 'Ivy Adams', age: 33, city: 'Atlanta', occupation: 'Entrepreneur' },
  
  ];
  
  const [name,setName] = useState()

  return (
    <>

            <MyTable/>
            <First/>
            <Second/>
            <Third/>  
            <Fourth/>
  
    </>
  )
}

export default App
