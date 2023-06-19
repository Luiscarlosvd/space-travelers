import PropTypes from 'prop-types';

function FilteredList({ array, title }) {
  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-3xl font-bold">{title}</h2>
      <ul>
        {array.map(item => {
            return (
              <li key={item.id} className="text-xl font-medium border py-3 px-6 pb-6">{item.name}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

FilteredList.propTypes = {
  array: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default FilteredList