export default function VisualMap() {
  const floors = [
    {
      level: "Floor 4",
      units: [
        { id: "A", status: "paid" },
        { id: "B", status: "paid" },
        { id: "C", status: "rented" },
        { id: "D", status: "paid" },
        { id: "E", status: "paid" },
        { id: "F", status: "debt" },
      ],
    },
    {
      level: "Floor 3",
      units: [
        { id: "A", status: "paid" },
        { id: "B", status: "rented" },
        { id: "C", status: "paid" },
        { id: "D", status: "paid" },
        { id: "E", status: "debt" },
        { id: "F", status: "paid" },
      ],
    },
    {
      level: "Floor 2",
      units: [
        { id: "A", status: "rented" },
        { id: "B", status: "paid" },
        { id: "C", status: "paid" },
        { id: "D", status: "paid" },
        { id: "E", status: "debt" },
        { id: "F", status: "rented" },
      ],
    },
    {
      level: "Floor 1",
      units: [
        { id: "A", status: "paid" },
        { id: "B", status: "debt" },
        { id: "C", status: "rented" },
        { id: "D", status: "paid" },
        { id: "E", status: "paid" },
        { id: "F", status: "debt" },
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-emerald-500";
      case "debt":
        return "bg-rose-500";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 overflow-x-auto">
      <div className="flex justify-between items-start min-w-[700px] mb-6">
        <div>
          <h3 className="font-semibold text-slate-800">Building map</h3>
        </div>

        {/* Legend */}
        <div className="flex space-x-4 text-sm text-slate-600">
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></span>
            Paid
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-rose-500 mr-2"></span>Debt
          </div>
        </div>
      </div>

      {/* Building Grid */}
      <div className="min-w-[700px] space-y-3">
        {floors.map((floor) => (
          <div key={floor.level} className="flex items-center">
            <span className="w-16 text-sm text-slate-600 font-medium">
              {floor.level}
            </span>
            <div className="flex-1 grid grid-cols-6 gap-2">
              {floor.units.map((unit) => (
                <div
                  key={`${floor.level}-${unit.id}`}
                  className={`${getStatusColor(unit.status)} text-white text-center py-3 rounded-lg font-medium text-sm shadow-sm transition hover:opacity-90 cursor-pointer`}
                >
                  {unit.id}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
