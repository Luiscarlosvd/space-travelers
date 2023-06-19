import PropTypes from 'prop-types';

const Rocket = ({ img, name, description }) => {
  return (
    <div className="flex w-11/12 m-auto gap-3 mb-8">
      <img className="w-60 h-48" src={img} alt="USER" />
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-xl">{name}</h2>
        <p>
          <span className="bg-cyan-500 rounded-md text-white text-xs font-semibold px-1 mr-2">
            Reserved 
          </span>
          {description}
        </p>
        <button 
          type="button"
          className="w-36 rounded-md text-lg p-2 text-white bg-blue-500"
        >
          Reserve Rocket
        </button>
        <button 
          type="button"
          className="w-44 rounded-md text-lg p-2 text-gray-500 border border-gray-500"
        >
          Cancel Reservation
        </button>
      </div>
    </div>
  )
};

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Rocket
