import { IoSearchSharp } from "react-icons/io5";
import { filterByDate, filterByTrack } from "../data";
import FilterByTrackItem from "./FilterByTrackItem";
import FilterByDateItem from "./FilterByDateItem";

export default function ScheduleFilter() {
  return (
    <div className="min-w-[200px] pt-1">
      {/* search Input */}
      <div className="flex items-center border border-gray-300 rounded-md p-2 mb-8">
        <IoSearchSharp className="text-lg mr-1 text-gray-500" />
        <input type="text" placeholder="Search" className="outline-none" />
      </div>

      {/* filter by date */}
      <div className="border border-gray-300 p-3 rounded-md mb-4">
        <h3 className="text-base text-gray-500 ">Filter by date</h3>
        <div className="px-[2px]">
          {filterByDate.map((data) => (
            <FilterByDateItem key={data.title} data={data} />
          ))}
        </div>
      </div>

      {/* filter by track */}
      <div className="border border-gray-300 rounded-md p-3">
        <h3 className="text-base text-gray-500 ">Filter by track</h3>
        <div>
          {filterByTrack.map((data) => (
            <FilterByTrackItem key={data.title} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
