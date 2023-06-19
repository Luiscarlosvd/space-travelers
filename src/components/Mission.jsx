const MemberSpan = ({ activeMember }) => {
  return activeMember ? (
    <span className="text-xs text-white font-bold whitespace-nowrap bg-cyan-600 px-2 py-1 rounded-md">Active Member</span>
  ) : (
    <span className="text-xs text-white font-bold whitespace-nowrap bg-gray-500 px-2 py-1 rounded-md">Not a member</span>
  );
};

const ActionButton = ({ activeMember }) => {
  return activeMember ? (
    <button className="px-3 py-2 rounded-md border text-red-600 border-red-600">Leave Mission</button>
  ) : (
    <button className="px-3 py-1 rounded-md border text-gray-600 border-gray-600">Join Mission</button>
  )
}

function Mission({ name, desc, dark, activeMember }) {
  return (
    <tr className={dark ? "bg-gray-200" : ""}>
      <td className="px-4 py-2 border border-gray-300">{name}</td>
      <td className="text-sm px-4 py-2 border border-gray-300">{desc}</td>
      <td className="px-4 py-2 border border-gray-300">
        <MemberSpan activeMember={activeMember} />
      </td>
      <td className="px-4 py-2 border border-gray-300 whitespace-nowrap">
        <ActionButton activeMember={activeMember} />
      </td>
    </tr>
  );
}

export default Mission;
