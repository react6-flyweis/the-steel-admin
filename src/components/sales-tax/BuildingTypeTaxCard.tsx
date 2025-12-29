import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BuildingTypeData {
  type: string;
  value: number;
  color: string;
}

const buildingTypeData: BuildingTypeData[] = [
  { type: "PEMB", value: 5802.5, color: "#3B82F6" },
  { type: "Storage", value: 3765.0, color: "#10B981" },
  { type: "Shed", value: 2693.25, color: "#F59E0B" },
  { type: "Commercial", value: 5527.5, color: "#EF4444" },
];

const totalTaxByBuilding = buildingTypeData.reduce(
  (sum, item) => sum + item.value,
  0
);

export default function BuildingTypeTaxCard() {
  return (
    <Card className="bg-white">
      <CardHeader className="border-b">
        <CardTitle>Tax Distribution by Building Type</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {buildingTypeData.map((item) => {
            const percentage = (
              (item.value / totalTaxByBuilding) *
              100
            ).toFixed(0);
            const width = `${(item.value / totalTaxByBuilding) * 100}%`;
            return (
              <div key={item.type} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm font-medium text-gray-900">
                      {item.type}
                    </span>
                  </div>
                  <div className="text-right text-gray-900 font-semibold">
                    ${item.value.toLocaleString()}
                  </div>
                </div>

                <div>
                  <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-2 rounded-full"
                      style={{ width, backgroundColor: item.color }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <div>{percentage}% of total</div>
                    <div />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
