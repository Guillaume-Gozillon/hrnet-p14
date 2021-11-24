export const search = (rows, keyword) => {
    return rows.filter(
      row =>
        row.firstName.toLowerCase().indexOf(keyword.toLowerCase()) > -1 ||
        row.lastName.toLowerCase().indexOf(keyword.toLowerCase()) > -1
    )
  }