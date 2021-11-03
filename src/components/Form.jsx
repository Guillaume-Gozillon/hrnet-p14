import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { save } from '../Redux/saveUserDataSlice'

import { stateUSA, department } from '../utils'
import ListboxSelect from './ListboxSelect'
import InputLabel from './InputLabel'
import DatePickerForm from './DatePickerForm'
import ModaleButton from './ModaleButton'

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
      <DatePickerForm value={birthDateObj} setState={setBirthDate} />
      <DatePickerForm value={startDateObj} setState={setStartDate} />
      <div className='w-full border-8 border-yellow-200 p-4 mb-3 rounded-2xl bg-yellow-50'>
        <div className='name'>
          <InputLabel id='street' value='Adresse' setState={setStreet} />
        </div>
        <div>
          <InputLabel id='city' value='Ville' setState={setCity} />
        </div>
        <ListboxSelect value='État' data={stateUSA} setState={setUsaState} />
        <InputLabel
          id='zipcode'
          value='Code postale'
          setState={setZipcode}
          type='number'
        />
      </div>
      <ListboxSelect
        value='Secteur'
        data={department}
        setState={setDepartmentState}
      />
      {/* <button
        className='text-lg font-medium text-yellow-900 border-4 border-yellow-200 bg-yellow-100 mt-4 p-2 rounded-2xl hover:bg-yellow-300 hover:text-white focus:text-white focus:outline-none focus:font-bold focus:ring-2 focus:bg-yellow-300 focus:ring-opacity-50'
        onClick={submitSave}
      >
        Sauvegarder
      </button> */}
      <ModaleButton setState={submitSave} />
    </form>
  )
}

export default Form
