const InputLabel = ({ id, value, setState, type }) => {
  const handleSearch = e => setState(e.target.value)

  return (
    <>
      <label htmlFor={id} className='mb-1 text-lg'>
        {value}
      </label>
      <input
        className='mb-3 rounded-md border-solid border-4'
        type={type}
        name={id}
        id={id}
        onChange={handleSearch}
      />
    </>
  )
}

export default InputLabel
