import { Check, UserPlus, ArrowRight, Phone, FileText } from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Deal closed with Global Industries - $300,000",
    when: "1 hour ago",
    by: "Assigned to Sarah Miller",
    bg: "bg-green-100",
    icon: <Check className="w-4 h-4 text-emerald-600" />,
  },
  {
    id: 2,
    title: "New qualified lead: TechCorp Manufacturing",
    when: "3 hours ago",
    by: "Auto-assigned to John Davis",
    bg: "bg-blue-100",
    icon: <UserPlus className="w-4 h-4 text-sky-600" />,
  },
  {
    id: 3,
    title: "Lead moved to Proposal: ABC Steel Works",
    when: "4 hours ago",
    by: "Updated by Lisa Wang",
    bg: "bg-yellow-100",
    icon: <ArrowRight className="w-4 h-4 text-amber-600" />,
  },
  {
    id: 4,
    title: "Follow-up call completed: Industrial Solutions",
    when: "5 hours ago",
    by: "Completed by John Davis",
    bg: "bg-purple-100",
    icon: <Phone className="w-4 h-4 text-violet-600" />,
  },
  {
    id: 5,
    title: "Proposal sent to BuildTech Corp",
    when: "6 hours ago",
    by: "Sent by Sarah Miller",
    bg: "bg-amber-100",
    icon: <FileText className="w-4 h-4 text-amber-600" />,
  },
];

export default function EmployeeAuditLog() {
  return (
    <div className="p-6">
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
        <div className="px-8 py-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            Recent Activity
          </h1>
        </div>
        <div className="border-t" />
        <div className="">
          <div className="bg-white rounded-lg p-6">
            <ul className="space-y-6">
              {activities.map((a) => (
                <li key={a.id} className="flex items-start gap-4">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${a.bg}`}
                  >
                    {a.icon}
                  </div>

                  <div className="flex-1">
                    <div className="text-lg text-gray-900 font-medium">
                      {a.title}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {a.when} • {a.by}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
