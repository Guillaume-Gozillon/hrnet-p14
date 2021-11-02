import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'

const BasicDatePicker = ({value, setState}) => {

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label='Date de naissance'
          value={value}
          onChange={newBirthDate => setState(newBirthDate)}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  )
}

export default BasicDatePicker
