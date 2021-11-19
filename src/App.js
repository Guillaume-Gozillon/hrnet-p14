import './style/app.scss'
import Home from './pages/Home'
import EmployeeList from './pages/EmployeeList'
import { Switch, Route } from 'react-router'

const App = () => {
  const data = JSON.parse(localStorage.getItem('formStorage'))

  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/employee-list' exact>
          {data && <EmployeeList data={data} />}
        </Route>
      </Switch>
    </div>
  )
}

export default App
