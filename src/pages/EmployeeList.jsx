import { Link } from 'react-router-dom'

const EmployeeList = () => {
  const userData = JSON.parse(localStorage.getItem('userData'))
  console.log(userData)

  return (
    <main>
      <h1 className='text-5xl mb-4'>HRnet</h1>
      <h2>Liste des employés</h2>
      {userData && userData.map((item, index) => (
        <p key={index}>{item.firstName}</p>)
      )}
      <Link to='/' className='mb-4 underline hover:text-blue-500'>
        Back home
      </Link>
    </main>
  )
}

export default EmployeeList
