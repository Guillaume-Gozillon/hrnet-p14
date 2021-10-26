import './style/app.scss'
import Home from './pages/Home'
import EmployeeList from './pages/EmployeeList'
import { Switch, Route } from 'react-router'

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/employee-list' exact>
          <EmployeeList />
        </Route>
      </Switch>
    </div>
  )
}

export default App
