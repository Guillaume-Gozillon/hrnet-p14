import { Link } from 'react-router-dom'
import Form from '../components/Form'

const Home = () => {
  return (
    <main>
      <h1 className='text-5xl mb-4'>HRnet</h1>
      <h2>Créer un employé</h2>
      <Link to='/employee-list' className='mb-4 underline hover:text-blue-500'>
        Afficher les employés actuels
      </Link>
      <Form />
    </main>
  )
}

export default Home
