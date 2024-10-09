import { FaCircle } from "react-icons/fa";

export default function ScheduleItem({ data }) {
  return (
    <div className="grid grid-cols-3 p-3">
      <div className="col-span-1">
        <span className="text-sm text-gray-500">{data.time}</span>
      </div>
      <div className="col-span-2">
        <h2 className="text-lg md:text-[22px] font-semibold mb-1">{data.event_name}</h2>
        <span
          className={`${
            data.event_type === "Applicatioin"
              ? "bg-cyan-500"
              : data.event_type === "Opening Ceremony"
              ? "bg-green-500"
              : data.event_type === "Social Time"
              ? "bg-purple-500"
              : "bg-red-500"
          } text-white text-[13px] px-2  py-1 rounded-md inline-block mb-3`}
        >
          {data.event_type}
        </span>
        <ul>
          {data.members.map((item) => (
            <li
              className="py-2 text-sm text-gray-500 flex gap-3"
              key={item.name}
            >
              <div>
                <FaCircle className="text-[9px] mt-[6px]" />
              </div>
              <div>
                <span className="text-black font-semibold">{item.name},</span>{" "}
                <span>
                  {item.title} {item.organization}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
