import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const EmployeeList = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    if (localStorage.getItem('formStorage')) {
      setData(JSON.parse(localStorage.getItem('formStorage')))
    }
  }, [])

  const handleFirstname = () => console.log('Prénom')
  const handleLastname = () =>
    data.forEach(el => {
      console.log(el.firstName)
    })

  useEffect(() => {
    const nombres = [4, 2, 5, 1, 3]
    nombres.sort(function (a, b) {
      return a - b
    })
    console.log(nombres)

    // data.forEach(el => {
    //   console.log(el.firstName)
    // })
  }, [data])

  console.log(data)

  return (
    <main className='w-11/12'>
      <div className=' flex justify-around items-center'>
        <h1 className='text-6xl font-semibold mb-4 text-yellow-800'>HRnet</h1>
        <Link to='/' className='mb-4 underline hover:text-blue-500'>
          Back home
        </Link>
      </div>
      <h2>Liste des employés</h2>
      <table>
        <thead>
          <tr>
            <th onClick={handleFirstname}>Prénom</th>
            <th onClick={handleLastname}>Nom</th>
            <th onClick={handleLastname}>Date de naissance</th>
            <th onClick={handleLastname}>Date de démarrage</th>
            <th onClick={handleLastname}>Rue</th>
            <th onClick={handleLastname}>Ville</th>
            <th onClick={handleLastname}>État</th>
            <th onClick={handleLastname}>Code postale</th>
            <th onClick={handleLastname}>Secteur d'activité</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, key) => (
              <tr key={key}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.birthDate}</td>
                <td>{item.startDate}</td>
                <td>{item.street}</td>
                <td>{item.city}</td>
                <td>{item.usaState}</td>
                <td>{item.zipcode}</td>
                <td>{item.departmentState}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  )
}

export default EmployeeList
