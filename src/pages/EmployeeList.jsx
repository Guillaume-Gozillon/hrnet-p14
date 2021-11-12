import { Link } from 'react-router-dom'
import { useEffect, useState, useMemo } from 'react'

const EmployeeList = () => {
  const [data, setData] = useState(null)
  const [sortConfig, setSortConfig] = useState(null)

  useEffect(() => {
    if (localStorage.getItem('formStorage')) {
      setData(JSON.parse(localStorage.getItem('formStorage')))
    }
  }, [])

  const sortedItems = useMemo(() => {
    let sortableItems = [data]
    if (sortConfig !== null) {
      sortedData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0
      })
    }
    return sortableItems
  }, [data, sortConfig])

  const requestSort = key => {
    let direction = 'ascending'
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  // console.log(sortedData)
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
            <th>
              <button type='button' onClick={() => requestSort('Name')}>
                Name
              </button>
            </th>
            <th>
              <button type='button' onClick={() => setSortConfig('price')}>
                Price
              </button>
            </th>
            <th>Date de naissance</th>
            <th>Date de démarrage</th>
            <th>Rue</th>
            <th>Ville</th>
            <th>État</th>
            <th>Code postale</th>
            <th>Secteur d'activité</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, key) => (
              <tr key={key}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                {/* <td>{item.birthDate}</td>
                <td>{item.startDate}</td>
                <td>{item.street}</td>
                <td>{item.city}</td>
                <td>{item.usaState}</td>
                <td>{item.zipcode}</td>
                <td>{item.departmentState}</td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  )
}

export default EmployeeList
