function FilteredList({ array, title }) {
  return (
    <div>
      <h2 className="">{title}</h2>
      <ul>
        {
          array.map(item => {
            return (
              <li>{item.name}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default FilteredList