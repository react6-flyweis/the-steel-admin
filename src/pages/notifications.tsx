export default function Notifications() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-900">Notifications</h1>
      <p className="mt-2 text-sm text-gray-600">
        All recent notifications will appear here.
      </p>
      <div className="mt-6 space-y-3">
        {/* Placeholder content; real notifications should be fetched and rendered here */}
        <div className="rounded-lg border border-gray-100 p-4">
          <p className="text-sm text-gray-900 font-medium">
            No notifications yet
          </p>
          <p className="text-xs text-gray-500">You're all caught up.</p>
        </div>
      </div>
    </div>
  );
}
