import { useState, useMemo } from 'react'

export const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config)

  /**
   * useMemo pour mémoriser en cache les valeurs de la fonction
   *
   * @param {Array} localStorage data
   * @return {Array} retourne un tableau trié
   */

  const sortedItems = useMemo(() => {
    let sortableItems = [...items]
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0
      })
    }
    return sortableItems
  }, [items, sortConfig])

  // On verifie l'obj et on donne la valeur ascending ou descending
  const requestSort = key => {
    let direction = 'ascending'
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  return { items: sortedItems, requestSort, sortConfig }
}
