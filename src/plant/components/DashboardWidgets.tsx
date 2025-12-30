import ProfitIcon from "../assets/ProfitIcon.svg";
import HashIcon from "../assets/HashIcon.svg";
import InvoiceDueIcon from "../assets/InvoiceDueIcon.svg";
import ExpensesIcon from "../assets/ExpensesIcon.svg";

const DashboardWidgets = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col h-full">
        <h2 className="md:text-lg font-light text-black-400 mb-6">
          Financial Overview
        </h2>
        <div className="flex flex-col gap-4">
          {/* Card 1 */}
          <div className="border border-gray-100 rounded-lg p-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-medium text-gray-900">$8,458,798</h3>
              <p className="text-sm text-gray-500 mt-1">
                Total Equipment Value
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-500">
              <img src={ProfitIcon} alt="ProfitIcon" className="size-4" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-100 rounded-lg p-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-medium text-gray-900">$48,988,78</h3>
              <p className="text-sm text-gray-500 mt-1">Available Equipment</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-500">
              {<img src={InvoiceDueIcon} alt="revenue" className="size-5" />}
            </div>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-100 rounded-lg p-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-medium text-gray-900">$980,097</h3>
              <p className="text-sm text-gray-500 mt-1">In Use Equipment</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500">
              <img src={ExpensesIcon} alt="ProfitIcon" className="size-4" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="border border-gray-100 rounded-lg p-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-medium text-gray-900">$980,097</h3>
              <p className="text-sm text-gray-500 mt-1">
                Under Maintenance Equipment
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-500">
              <img src={HashIcon} alt="ProfitIcon" className="size-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Column 2: Recent Messages / RFIs */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col h-full">
        <h2 className="md:text-md font-medium text-black-400 mb-6">
          Recent Messages / RFIs
        </h2>
        <div className="flex flex-col gap-6">
          {/* Message 1 */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900 leading-tight">
                Mixer needed at Pune site ASAP.
              </h4>
              <p className="text-xs text-gray-400 mt-1">Team Steel company</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-xs text-gray-400">2:00 PM</span>
                <span className="text-[10px] font-medium bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full">
                  High priority
                </span>
              </div>
            </div>
          </div>

          {/* Message 2 */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-500 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900 leading-tight">
                Invoice Received from team
              </h4>
              <p className="text-xs text-gray-400 mt-1">Team Steel company</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-xs text-gray-400">4:30 PM</span>
                <span className="text-[10px] font-medium bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded-full">
                  Medium priority
                </span>
              </div>
            </div>
          </div>

          {/* Message 3 */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-500 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900 leading-tight">
                Meeting with construction team
              </h4>
              <p className="text-xs text-gray-400 mt-1">Team Steel company</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-xs text-gray-400">Tomorrow 2:00 PM</span>
                <span className="text-[10px] font-medium bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full">
                  High priority
                </span>
              </div>
            </div>
          </div>

          {/* Message 4 */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-500 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900 leading-tight">
                Invoice Received from team
              </h4>
              <p className="text-xs text-gray-400 mt-1">Team Steel company</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-xs text-gray-400">4:30 PM</span>
                <span className="text-[10px] font-medium bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded-full">
                  Medium priority
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Column 3: PLANT DEPARTMENT ALERTS */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
        <div className="p-6 pb-0 grow">
          <h2 className="md:text-md font-medium text-black-400 mb-6">
            PLANT DEPARTMENT ALERTS
          </h2>
          <div className="flex flex-col gap-6">
            {/* Alert 1 */}
            <div className="flex gap-3 items-start">
              <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
              <div>
                <p className="text-sm text-gray-800 leading-relaxed font-medium">
                  <span className="text-gray-500 mr-1">⚠️</span>
                  Excavator CAT 320D — Breakdown reported. Immediate service
                  required.
                </p>
                <p className="text-xs text-gray-400 mt-1">2 minutes ago</p>
              </div>
            </div>

            {/* Alert 2 */}
            <div className="flex gap-3 items-start">
              <div className="w-2 h-2 mt-1.5 rounded-full bg-yellow-400 flex-shrink-0"></div>
              <div>
                <p className="text-sm text-gray-800 leading-relaxed font-medium">
                  <span className="text-gray-500 mr-1">⚠️</span>
                  Cement stock below minimum level.
                </p>
                <p className="text-xs text-gray-400 mt-1">2 minutes ago</p>
              </div>
            </div>

            {/* Alert 3 */}
            <div className="flex gap-3 items-start">
              <div className="w-2 h-2 mt-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
              <div>
                <p className="text-sm text-gray-800 leading-relaxed font-medium">
                  <span className="text-orange-500 mr-1">🟠</span>
                  Maintenance overdue for Generator 25kVA.
                </p>
                <p className="text-xs text-gray-400 mt-1">2 minutes ago</p>
              </div>
            </div>

            {/* Alert 4 */}
            <div className="flex gap-3 items-start">
              <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
              <div>
                <p className="text-sm text-gray-800 leading-relaxed font-medium">
                  <span className="text-gray-500 mr-1">⚠️</span>
                  Excavator CAT 320D — Breakdown reported. Immediate service
                  required.
                </p>
                <p className="text-xs text-gray-400 mt-1">2 minutes ago</p>
              </div>
            </div>

            {/* Alert 5 */}
            <div className="flex gap-3 items-start">
              <div className="w-2 h-2 mt-1.5 rounded-full bg-yellow-400 flex-shrink-0"></div>
              <div>
                <p className="text-sm text-gray-800 leading-relaxed font-medium">
                  <span className="text-gray-500 mr-1">⚠️</span>
                  Cement stock below minimum level.
                </p>
                <p className="text-xs text-gray-400 mt-1">2 minutes ago</p>
              </div>
            </div>

            {/* Alert 6 */}
            <div className="flex gap-3 items-start">
              <div className="w-2 h-2 mt-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
              <div>
                <p className="text-sm text-gray-800 leading-relaxed font-medium">
                  <span className="text-orange-500 mr-1">🟠</span>
                  Maintenance overdue for Generator 25kVA.
                </p>
                <p className="text-xs text-gray-400 mt-1">2 minutes ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-gray-100 mt-4">
          <button className="w-full text-center text-[#2563EB] font-medium text-sm hover:underline">
            Resolve Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardWidgets;
