import { scheduleData } from "../data";
import ScheduleItem from "./ScheduleItem";

export default function Schedule() {
  return (
    <div>
      <div className="border border-gray-300 p-2 rounded-md">
        <h2 className="font-semibold">Monday, March 7</h2>
      </div>

      {/* event schedule are here */}
      <div>
        {scheduleData.map((data) => (
          <ScheduleItem key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}
