export function formatCurrency(n: number) {
  return n.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export type PerformanceDatum = { name: string; value: number; color: string };

type Props = {
  top: PerformanceDatum;
  total: number;
  name?: string;
  title?: string;
  avatarSrc?: string;
};

export default function TopPerformerCard({
  top,
  total,
  name = "John Smith",
  title = "Senior Sales Manager",
  avatarSrc = "/assets/images/customers/1.jpg",
}: Props) {
  return (
    <div className="relative bg-green-50 rounded-lg p-4 shadow-sm overflow-hidden">
      <div className="absolute top-3 right-3 text-yellow-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l2.39 4.85L19 8.18l-3.25 2.81L16.78 16 12 13.77 7.22 16l1.03-4.99L5 8.18l4.61-.33L12 2z" />
        </svg>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={avatarSrc}
            alt={name}
            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
          />
          <span className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow">
            <span className="block w-3 h-3 rounded-full bg-green-500 border-2 border-white"></span>
          </span>
        </div>

        <div>
          <div className="text-sm font-semibold">{name}</div>
          <div className="text-xs text-gray-600">{title}</div>
        </div>
      </div>

      <div className="mt-4 bg-white rounded-md p-4 flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-500">Top Earner of the Month</div>
          <div className="text-2xl font-bold mt-2 text-green-600">
            {formatCurrency(top.value)}
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {Math.round((top.value / total) * 100)}% of total revenue
          </div>
        </div>
        <div className="ml-4 shrink-0">
          <div className="px-3 py-2 bg-green-100 text-green-700 rounded-md font-medium text-right">
            {formatCurrency(top.value)}
          </div>
        </div>
      </div>

      <div className="mt-3 text-sm text-green-700">🎉 Congratulations!</div>
    </div>
  );
}
