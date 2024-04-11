export default function MoreWatchDetails() {
    const details  = [
        ['watch size', '40mm'],
        ['dial color', 'black'],
        ['movement', 'automatic'],
        ['case material', 'stainless steel'],
        ['bezel material', 'ceramic'],
        ['BRACELET MATERIAL', 'Stainless Steel'],
        ['comes with', 'Box & Paper'],
        ['water resistant', '100 meters / 330 feet'],
    ]
  return (
    <div className="container3 mt-5 padding">
        <p className="font-semibold text-2xl text-black mb-5">Watch Details</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
            {details.map((detail, key) => (
                <div className="border-b py-2 lg:py-4">
                    <p className="uppercase mb-1 text-11">{detail[0]}</p>
                    <p className="text-xl text-gray-800 capitalize">{detail[1]}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
