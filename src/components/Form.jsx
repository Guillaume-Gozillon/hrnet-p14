import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { save } from '../Redux/saveUserDataSlice'

import { stateUSA, department } from '../utils'
import ListboxSelect from './ListboxSelect'
import InputLabel from './InputLabel'
import BasicDatePicker from './BasicDatePicker'

const Form = () => {
  const dispatch = useDispatch()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDateObj, setBirthDate] = useState(null)
  const [startDateObj, setStartDate] = useState(null)
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [usaState, setUsaState] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [departmentState, setDepartmentState] = useState('')

  const birthDate = JSON.stringify(birthDateObj)
  const startDate = JSON.stringify(startDateObj)

  const data = {
    firstName,
    lastName,
    birthDate,
    startDate,
    street,
    city,
    usaState,
    zipcode,
    departmentState
  }

  console.log(data)

  const submitSave = e => {
    e.preventDefault()
    dispatch(save(data))
  }

  return (
    <form className='flex flex-col'>
      <InputLabel
        id='firstname'
        value='Prénom'
        setState={setFirstName}
        type='text'
      />
      <InputLabel
        id='lastName'
        value='Nom'
        setState={setLastName}
        type='text'
      />
      <BasicDatePicker value={birthDateObj} setState={setBirthDate} />
      <BasicDatePicker value={startDateObj} setState={setStartDate} />
      <div className='w-full border-8'>
        <div className='name'>
          <InputLabel id='street' value='Adresse' setState={setStreet} />
        </div>
        <div>
          <InputLabel id='city' value='Ville' setState={setCity} />
        </div>
        <ListboxSelect data={stateUSA} setState={setUsaState} />
        <InputLabel
          id='zipcode'
          value='Code postale'
          setState={setZipcode}
          type='number'
        />
      </div>
      <ListboxSelect data={department} setState={setDepartmentState} />
      <button onClick={submitSave}>Sauvegarder</button>
    </form>
  )
}

export default Form
