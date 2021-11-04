const InputLabel = ({ id, value, setState, type }) => {
  const handleSearch = e => setState(e.target.value)

  return (
    <>
      <label htmlFor={id} className=' text-lg'>
        {value}
      </label>
      <input
        className='my-1 rounded-md border-4 w-full px-2 py-2 focus:outline-none focus:border-yellow-300'
        type={type}
        name={id}
        id={id}
        onChange={handleSearch}
    
      />
    </>
  )
}

export default InputLabel
