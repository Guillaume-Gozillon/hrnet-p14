import Form from '../components/Form'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main>
      <div className='flex justify-around items-center'>
        <h1 className='text-6xl font-semibold mb-4 text-yellow-800'>HRnet</h1>
        <Link
          to='/employee-list'
          className='mb-4 underline hover:text-blue-500'
        >
          Afficher les employés actuels
        </Link>
      </div>
      <Form />
    </main>
  )
}

export default Home
