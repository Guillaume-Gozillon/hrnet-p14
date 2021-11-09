import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const EmployeeList = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    if (localStorage.getItem('formStorage')) {
      setData(JSON.parse(localStorage.getItem('formStorage')))
    }
  }, [])

  console.log(data)

  return (
    <main>
      <h1 className='text-5xl mb-4'>HRnet</h1>
      <h2>Liste des employés</h2>

      {data && data.map((item, index) => <p key={index}>{item.firstName}</p>)}

      <Link to='/' className='mb-4 underline hover:text-blue-500'>
        Back home
      </Link>
    </main>
  )
}

export default EmployeeList
