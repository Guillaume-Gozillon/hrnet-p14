import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { useState } from 'react'
import DatePicker from '@mui/lab/DatePicker'

const BasicDatePicker = () => {
  const [value, setValue] = useState(null)

  return (
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
  )
}

export default BasicDatePicker
