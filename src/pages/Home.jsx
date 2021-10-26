import ListboxExemple from '../components/Listbox'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main>
      <h1>HRnet</h1>
      <Link to='/employee-list'>EMPLOYEE</Link>
      <input type='text' name='' id='' />
      <input type='text' name='' id='' />
      <input type='text' name='' id='' />
      <ListboxExemple />
    </main>
  )
}

export default Home
