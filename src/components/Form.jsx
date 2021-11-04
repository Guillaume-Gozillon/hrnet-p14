import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { save } from '../Redux/saveUserDataSlice'

import { stateUSA, department } from '../utils'
import ListboxSelect from './ListboxSelect'
import InputLabel from './InputLabel'
import DatePickerForm from './DatePickerForm'
import ModaleButton from './ModaleButton'
import { useEffect } from 'react'

const Form = () => {
  const dispatch = useDispatch()

  // const firstNameRedux = useSelector(state => state.firstName ? firstNameRedux : 'Guillaume')

  const [
    firstNameRedux,
    lastNameRedux,
    birthDateRedux,
    startDateRedux,
    streetRedux,
    cityRedux,
    usaStateRedux,
    zipcodeRedux,
    departmentStateRedux
  ] = useSelector(state => [
    state.firstName,
    state.lastName,
    state.birthDate,
    state.startDate,
    state.street,
    state.city,
    state.usaState,
    state.zipcode,
    state.departmentState
  ])

  // useEffect((test) => {
  //   console.log("...",firstName, test)

  //   setFirstName(firstName)
  // }, [firstName])

  const [firstName, setFirstName] = useState(firstNameRedux)
  const [lastName, setLastName] = useState(lastNameRedux)
  const [birthDateObj, setBirthDate] = useState(birthDateRedux)
  const [startDateObj, setStartDate] = useState(startDateRedux)
  const [street, setStreet] = useState(streetRedux)
  const [city, setCity] = useState(cityRedux)
  const [usaState, setUsaState] = useState(usaStateRedux)
  const [zipcode, setZipcode] = useState(zipcodeRedux)
  const [departmentState, setDepartmentState] = useState(departmentStateRedux)

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

  const submitSave = () => {
    dispatch(save(data))
  }

  return (
    <form className='flex flex-col'>
      <p>{lastName}</p>
      <p>Redux: {lastNameRedux}</p>
      {/* <InputLabel
        id='firstname'
        valueText='Prénom'
        setState={setFirstName}
        type='text'
        value={firstName}
      /> */}
      <InputLabel
        id='lastName'
        value='Nom'
        setState={setLastName}
        type='text'
      />
      <DatePickerForm value={birthDateObj} setState={setBirthDate} />
      <DatePickerForm value={startDateObj} setState={setStartDate} />
      <div className='w-full p-4 mb-3 rounded-2xl bg-yellow-50'>
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
      <ModaleButton setState={submitSave} />
    </form>
  )
}

export default Form
