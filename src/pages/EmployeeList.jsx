import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useSortableData } from '../utils/useSortableData'
import Datatable from '../components/Datatable'
import Pagination from '../components/Pagination'
import { search } from '../components/search'

const EmployeeList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [keyword, setKeyword] = useState('')

  const postPerPage = 3
  const data = JSON.parse(localStorage.getItem('formStorage'))
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost)

  const { items, requestSort, sortConfig } = useSortableData(currentPost)

  const getClassNamesFor = name => {
    if (!sortConfig) {
      return
    }
    return sortConfig.key === name ? sortConfig.direction : undefined
  }

  const paginate = pageNumber => setCurrentPage(pageNumber)

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
          <Datatable items={search(items, keyword)} />
          <Pagination
            postPerPage={postPerPage}
            totalPosts={data.length}
            paginate={paginate}
          />
        </tbody>
      </table>
    </main>
  )
}

export default EmployeeList
// https://www.youtube.com/watch?v=d1r0aK5awWk
