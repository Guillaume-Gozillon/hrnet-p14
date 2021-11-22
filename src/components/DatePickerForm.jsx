import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'

const DatePickerForm = ({ value, setState, label }) => {
  return (
    <div className='my-3'>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          className='test'
          label={label}
          value={value}
          onChange={newBirthDate => setState(newBirthDate)}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  )
}

export default DatePickerForm
