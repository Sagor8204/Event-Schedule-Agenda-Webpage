export default function FilterByTrackItem({ data }) {
  const { title } = data;
  return (
    <div className="flex justify-between py-1 cursor-pointer">
      <div className="flex items-center gap-3">
        <span
          className={`rounded-full w-3 h-3 ${
            title === "Application"
              ? "bg-cyan-500"
              : title === "Committee Meeting"
              ? "bg-yellow-500"
              : title === "Meetings"
              ? "bg-red-500"
              : title === "Opening Ceremony"
              ? "bg-green-500"
              : title === "Plenary/Keynote"
              ? "bg-green-600"
              : title === "Social Time"
              ? "bg-purple-500"
              : title === "Sponsor"
              ? "bg-yellow-500"
              : title === "Technology"
              ? "bg-green-500"
              : title === "Trainings / Workshops"
              ? "bg-red-500"
              : "bg-black"
          }`}
        ></span>
        <span className="text-gray-500 text-base">{title}</span>
      </div>
      <input checked type="checkbox" className="accent-purple-700" />
    </div>
  );
}
