export default function FilterByDateItem({data}) {
  return (
    <div className="flex gap-2 py-[2px] text-gray-500">
      <span className="text-[26px] font-semibold">{data.icon}</span>
      <span className="text-base">{data.title}</span>
    </div>
  );
}
