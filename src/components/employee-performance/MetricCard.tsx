import React from "react";

type Props = {
  title: string;
  value: React.ReactNode;
  icon?: React.ReactNode;
  accent?: "indigo" | "orange" | "green";
};

export default function MetricCard({
  title,
  value,
  icon,
  accent = "indigo",
}: Props) {
  const accentBg =
    accent === "indigo"
      ? "bg-indigo-50 text-indigo-500"
      : accent === "orange"
      ? "bg-orange-50 text-orange-500"
      : "bg-green-50 text-green-500";

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
      <div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-xl font-bold mt-2">{value}</div>
      </div>
      <div
        className={`w-10 h-10 rounded-md flex items-center justify-center ${accentBg}`}
      >
        {icon}
      </div>
    </div>
  );
}
