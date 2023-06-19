import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMissions } from "../redux/missions/missionsSlice";
import Mission from "./Mission";

function MissionsList() {
  const missions = useSelector((store) => store.missions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <section>
      <table className="table-auto mx-16 border border-gray-300">
        <thead>
          <tr>
            <th className="py-3 border border-gray-300">Mission</th>
            <th className="py-3 border border-gray-300">Description</th>
            <th className="py-3 border border-gray-300">Status</th>
            <th className="py-3 border border-gray-300"></th>
          </tr>
        </thead>
        <tbody>
          {missions.missionsArr.map((mission, idx) => (
            <Mission
              key={mission.id}
              name={mission.name}
              desc={mission.description}
              dark={idx % 2 === 0 ? true : false}
              activeMember={mission.activeMember}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default MissionsList;
