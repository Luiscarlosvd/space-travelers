import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { joinMission, leaveMission } from "../redux/missions/missionsSlice";

const MemberSpan = ({ activeMember }) => {
  return activeMember ? (
    <div className="text-xs text-white font-bold whitespace-nowrap bg-cyan-600 py-1 w-24 text-center rounded-md">Active Member</div>
  ) : (
    <div className="text-xs text-white font-bold whitespace-nowrap bg-gray-500 py-1 w-24 text-center rounded-md">Not a member</div>
  )
};

function Mission({ name, desc, activeMember, id }) {

  const dispatch = useDispatch();

  return (
    <tr>
      <td className="px-4 py-2 border border-gray-300">{name}</td>
      <td className="text-sm px-4 py-2 border border-gray-300">{desc}</td>
      <td className="px-4 py-2 border border-gray-300">
        <MemberSpan activeMember={activeMember} />
      </td>
      <td className="px-4 py-2 border border-gray-300 whitespace-nowrap">
        {
          activeMember ? (
            <button className="px-3 py-1 w-32 rounded-md border text-red-600 border-red-600" onClick={() => {dispatch(leaveMission(id))}}>Leave Mission</button>
          ) : (
            <button className="px-3 py-1 w-32 rounded-md border text-gray-600 border-gray-600" onClick={() => {dispatch(joinMission(id))}}>Join Mission</button>
          )
        }
      </td>
    </tr>
  );
}

export default Mission;

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  activeMember: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

MemberSpan.propTypes = {
  activeMember: PropTypes.bool.isRequired,
}