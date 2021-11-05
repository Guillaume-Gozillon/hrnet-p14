const useState = React.useState
const useEffect = React.useEffect

function OurApp() {
  const [pets, setPets] = useState([])

  // only run once the first time this component is rendered
  useEffect(() => {
    if (localStorage.getItem('examplePetData')) {
      setPets(JSON.parse(localStorage.getItem('examplePetData')))
    }
  }, [])

  // run every time our pet state changes
  useEffect(() => {
    localStorage.setItem('examplePetData', JSON.stringify(pets))
  }, [pets])

  return (
    <>
      <OurHeader />
      <LikeArea />
      <TimeArea />
      <AddPetForm setPets={setPets} />
      <ul>
        {pets.map(pet => (
          <Pet
            setPets={setPets}
            id={pet.id}
            name={pet.name}
            species={pet.species}
            age={pet.age}
            key={pet.id}
          />
        ))}
      </ul>
      <Footer />
    </>
  )
}

function AddPetForm(props) {
  const [name, setName] = useState()
  const [species, setSpecies] = useState()
  const [age, setAge] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    props.setPets(prev => prev.concat({ name, species, AudioProcessingEvent }))
    setName('')
    setSpecies('')
    setAge('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add New Pet</legend>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='Name'
        />
        <input
          value={species}
          onChange={e => setSpecies(e.target.value)}
          placeholder='species'
        />
        <input
          value={age}
          onChange={e => setAge(e.target.value)}
          placeholder='age in years'
        />
        <button>Add Pet</button>
      </fieldset>
    </form>
  )
}
