import { Link } from 'react-router-dom'

const EmployeeList = () => {
  const userDataTest = JSON.parse(localStorage.getItem('userData'))
  console.log(userDataTest)

  return (
    <main>
      <h1 className='text-5xl mb-4'>HRnet</h1>
      <h2>Liste des employés</h2>
{/* 
      {userDataTest &&
        userDataTest.map((item, index) => (
          <p key={index}>{item.firstName}</p>
        ))} */}

      <Link to='/' className='mb-4 underline hover:text-blue-500'>
        Back home
      </Link>
    </main>
  )
}

export default EmployeeList
