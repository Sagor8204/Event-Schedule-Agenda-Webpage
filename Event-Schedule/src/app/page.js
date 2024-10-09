import Schedule from "@/components/Schedule/Schedule";
import ScheduleFilter from "@/components/ScheduleFilter/ScheduleFilter";

export default function Home() {
  return (
    <div className="max-w-[1400px] mx-auto py-5 px-4">
      <main className="">
        <div className="drawer lg:drawer-open drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content mr-6">
            {/* Page content here */}
            <div className="mb-6">
              <h1 className="text-3xl">Event Schedule</h1>
              <p className="text-gray-500 text-[15px] font-semibold">
                Displaying agenda in event timezone (11:56 AM GMT+6)
              </p>
            </div>
            <Schedule />
            <div className="fixed right-5 bottom-5">
            <label
              htmlFor="my-drawer-4"
              className="drawer-button lg:hidden btn btn-primary"
            >
              Filter
            </label>
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="menu bg-white text-base-content min-h-full w-80">
              {/* Sidebar content here */}
              <ScheduleFilter />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
