const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <div className='flex mt-5'>
      {pageNumbers.map(number => (
        <div key={number}>
          <p onClick={() => paginate(number)}>{number}</p>
        </div>
      ))}
    </div>
  )
}

export default Pagination
