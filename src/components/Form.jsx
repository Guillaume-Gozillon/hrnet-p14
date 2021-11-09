import { useEffect, useState } from 'react'
import { stateUSA, department } from '../utils/utils'
import ListboxSelect from './ListboxSelect'
import InputLabel from './InputLabel'
import DatePickerForm from './DatePickerForm'
import ModaleButton from './ModaleButton'

const Form = () => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [birthDateObj, setBirthDate] = useState(null)
  const [startDateObj, setStartDate] = useState(null)
  const [street, setStreet] = useState()
  const [city, setCity] = useState()
  const [usaState, setUsaState] = useState()
  const [zipcode, setZipcode] = useState()
  const [departmentState, setDepartmentState] = useState()
  const birthDate = JSON.stringify(birthDateObj)
  const startDate = JSON.stringify(startDateObj)

  console.log(firstName);

  const [formStorage, setFormStorage] = useState([])

  useEffect(() => {
    if (localStorage.getItem('formStorage')) {
      setFormStorage(JSON.parse(localStorage.getItem('formStorage')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('formStorage', JSON.stringify(formStorage))
  }, [formStorage])

  return (
    <form className='flex flex-col'>
      <InputLabel
        id='firstname'
        valueText='Prénom'
        setState={setFirstName}
        type='text'
        value='Prénom'
      />
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
      <ModaleButton
        setFormStorage={setFormStorage}
        firstName={firstName}
        lastName={lastName}
        birthDate={birthDate}
        startDate={startDate}
        street={street}
        city={city}
        usaState={usaState}
        zipcode={zipcode}
        departmentState={departmentState}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setBirthDate={setBirthDate}
        setStartDate={setStartDate}
        setStreet={setStreet}
        setCity={setCity}
        setUsaState={setUsaState}
        setZipcode={setZipcode}
        setDepartmentState={setDepartmentState}
      />
    </form>
  )
}
export default Form
// https://codepen.io/learnwebcode/pen/Exaqbvx?editors=1010
