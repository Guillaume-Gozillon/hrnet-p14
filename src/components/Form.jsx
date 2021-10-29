import ListboxExemple from '../components/Listbox'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { save } from '../Redux/saveUserDataSlice'

import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'

const Form = () => {
  const dispatch = useDispatch()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDateObj, setBirthDate] = useState(null)
  const [startDateObj, setStartDate] = useState(null)

  const handleFirstname = e => setFirstName(e.target.value)
  const handleLastname = e => setLastName(e.target.value)

   const birthDate = JSON.stringify(birthDateObj)
   const startDate = JSON.stringify(startDateObj)

  const data = { firstName, lastName, birthDate , startDate }

  const submitSave = e => {
    e.preventDefault()
    dispatch(save(data))
  }

  return (
    <form className='flex flex-col'>
      <label htmlFor='firstname' className='mb-1 text-lg'>
        Prénom
      </label>
      <input
        className='mb-3 rounded-md border-solid border-4'
        type='text'
        name='firstname'
        id='firstname'
        onChange={handleFirstname}
      />
      <label htmlFor='lastname' className='mb-1 text-lg'>
        Nom
      </label>
      <input
        className='mb-3 rounded-md border-solid border-4'
        type='text'
        name='lastname'
        id='lastname'
        onChange={handleLastname}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label='Date de naissance'
          value={birthDateObj}
          onChange={newBirthDate => setBirthDate(newBirthDate)}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label='Date de démarrage'
          value={startDateObj}
          onChange={newStartDate => setStartDate(newStartDate)}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
      <div className='w-full'>
        <div className='name'>
          <label htmlFor='lastname' className='mb-1 text-lg'>
            Nom
          </label>
          <input
            className='mb-3 rounded-md border-solid border-4'
            type='text'
            name='lastname'
            id='lastname'
            onChange={handleFirstname}
          />
        </div>
        <div>
          <label htmlFor='lastname' className='mb-1 text-lg'>
            Nom
          </label>
          <input
            className='mb-3 rounded-md border-solid border-4'
            type='text'
            name='lastname'
            id='lastname'
            onChange={handleLastname}
          />
        </div>
      </div>
      <ListboxExemple />
      <button onClick={submitSave}>Sauvegarder</button>
    </form>
  )
}

export default Form
