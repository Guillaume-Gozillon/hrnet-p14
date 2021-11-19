const Datatable = ({ items }) => {
  return (
    <>
      {items &&
        items.map((item, i) => (
          <tr key={i}>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.birthDate}</td>
            <td>{item.startDate}</td>
            <td>{item.street}</td>
            <td>{item.city}</td>
            <td>{item.usaState}</td>
            <td>{item.zipcode}</td>
            <td>{item.departmentState}</td>
          </tr>
        ))}
    </>
  )
}

export default Datatable
