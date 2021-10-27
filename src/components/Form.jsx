import ListboxExemple from '../components/Listbox'
import { useState } from 'react'

import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'

const Form = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [value, setValue] = useState(null)
  const [test, setTest] = useState(null)

  const handleFirstname = e => setFirstName(e.target.value)
  const handleLastname = e => setLastName(e.target.value)
  // const handleFirstname = e => setFirstName(e.target.value)
  // const handleLastname = e => setLastName(e.target.value)

  const submitSave = e => {
    e.preventDefault()
    console.log(`Prénom: ${firstName}`, `Nom: ${lastName}`, value, test)
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
          value={value}
          onChange={newValue => {
            setValue(newValue)
          }}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label='Autre test'
          test={test}
          onChange={newTest => {
            setTest(newTest)
          }}
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
            onChange={handleLastname}
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
