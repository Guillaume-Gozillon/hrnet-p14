import './style/app.scss'
import Home from './pages/Home'
import EmployeeList from './pages/EmployeeList'
import { Switch, Route } from 'react-router'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const App = () => {
  const test = useSelector(state => state.whenOpen)
  console.log(test)

  const products = [
    { id: 1, name: 'Cheese', price: 4.9, stock: 20 },
    { id: 2, name: 'Milk', price: 1.9, stock: 32 },
    { id: 3, name: 'Yoghurt', price: 2.4, stock: 12 },
    { id: 4, name: 'Heavy Cream', price: 3.9, stock: 9 },
    { id: 5, name: 'Butter', price: 0.9, stock: 99 },
    { id: 6, name: 'Sour Cream ', price: 2.9, stock: 86 },
    { id: 7, name: 'Fancy French Cheese 🇫🇷', price: 99, stock: 12 }
  ]
  const [data, setData] = useState(null)
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('formStorage')) {
      setData(JSON.parse(localStorage.getItem('formStorage')))
      setIsFetching(true)
    }
  }, [test])

  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/employee-list' exact>
          {data !== null ? (
            <EmployeeList
              products={products}
              data={data}
              isFetching={isFetching}
              test={test}
            />
          ) : null}
        </Route>
      </Switch>
    </div>
  )
}

export default App
