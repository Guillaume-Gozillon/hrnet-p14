import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSortableData } from '../utils/useSortableData'
import Datatable from '../components/Datatable'

const EmployeeList = () => {
  const [keyword, setKeyword] = useState('')

  const data = JSON.parse(localStorage.getItem('formStorage'))
  const { items, requestSort, sortConfig } = useSortableData(data)

  // initialise l'objet de direction en récuperant la valeur a trier
  const getClassNamesFor = name => {
    if (!sortConfig) {
      return
    }
    return sortConfig.key === name ? sortConfig.direction : undefined
  }

  console.log(data)

  const search = rows => {
    return rows.filter(
      row =>
        row.firstName.toLowerCase().indexOf(keyword.toLowerCase()) > -1 ||
        row.lastName.toLowerCase().indexOf(keyword.toLowerCase()) > -1 ||
        row.city.toLowerCase().indexOf(keyword.toLowerCase()) > -1
    )
  }

  return (
    <main className='w-11/12'>
      <div className=' flex justify-around items-center'>
        <h1 className='text-6xl font-semibold mb-4 text-yellow-800'>HRnet</h1>
        <Link to='/' className='mb-4 underline hover:text-blue-500'>
          Back home
        </Link>
        <div className='flex flex-col'>
          <label htmlFor='keyword' className=' text-base'>
            Recherche rapide
          </label>
          <input
            type='text'
            name='keyword'
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            className='border-4 border-light-yellow-500 border-opacity-100 my-1 rounded-md w-full px-2  focus:outline-none focus:border-yellow-300'
          />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th
              onClick={() => requestSort('firstName')}
              className={getClassNamesFor('firstName')}
            >
              Prénom
            </th>
            <th
              onClick={() => requestSort('lastName')}
              className={getClassNamesFor('lastName')}
            >
              Nom
            </th>
            <th
              onClick={() => requestSort('birthDate')}
              className={getClassNamesFor('birthDate')}
            >
              Date d'arrivée
            </th>
            <th
              onClick={() => requestSort('startDate')}
              className={getClassNamesFor('startDate')}
            >
              Date de démarrage
            </th>
            <th
              onClick={() => requestSort('street')}
              className={getClassNamesFor('street')}
            >
              Adresse
            </th>
            <th
              onClick={() => requestSort('city')}
              className={getClassNamesFor('city')}
            >
              Ville
            </th>
            <th
              onClick={() => requestSort('usaState')}
              className={getClassNamesFor('usaState')}
            >
              État
            </th>
            <th
              onClick={() => requestSort('zipcode')}
              className={getClassNamesFor('zipcode')}
            >
              Code postale
            </th>
            <th
              onClick={() => requestSort('departmentState')}
              className={getClassNamesFor('departmentState')}
            >
              Secteur d'activité
            </th>
          </tr>
        </thead>
        <tbody>
          <Datatable items={search(items)} />
        </tbody>
      </table>
    </main>
  )
}

export default EmployeeList
// https://www.youtube.com/watch?v=d1r0aK5awWk
