import TilesData from "../data/TilesData";
export default function Tiles() {
  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 cursor-default gap-4">
      {TilesData().map((item) => (
        <div
          key={item.id}
          className={`p-3 text-white flex justify-start rounded-md flex-col gap-3 sm:col-span-1 shadow-md
            ${item.color === 'blue' ? 'bg-blue-600 hover:bg-blue-500' : ''}
            ${item.color === 'red' ? 'bg-red-600 hover:bg-red-500' : ''}
            ${item.color === 'orange' ? 'bg-orange-600 hover:bg-orange-500' : ''}
            ${item.color === 'green' ? 'bg-green-600 hover:bg-green-500' : ''}`}
        >
          <p className="text-xl font-semibold">{item.title}</p>
          <p className="text-3xl">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
