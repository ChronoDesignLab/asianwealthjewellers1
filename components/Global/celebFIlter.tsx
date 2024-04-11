export default function CelebFilter() {
  const celebs = [
   ["actor", ''],
   ["football player", ''],
   ["actress", ''],
   ["artise", ''],
   ["rapper", ''],
   ["basketball player", ''],
   ["influencer", ''],
   ["youtuber", ''],
   ["cricket player", ''],
   ["f1 driver", ''],
   ["american football player", ''],
   ["boxer", ''],
   ["tennis player", ''],
   ["golfer", ''],
   ["tv host", ''],
   ["entrepeneur", ''],
   ["athlete", ''],
  ];
  return (
      <div className="flex container2  gap-4 px-6">
        <p className="px-8 py-4 mt-2 rounded-full bg-gray-100 uppercase text-black font-semibold text-10 h-fit">
          RESET FILTER
        </p>
        <div className="flex flex-1 lg:flex-wrap py-2 overflow-x-auto gap-5">
          {celebs.map((celeb, key: number) => (
            <p className="p-3 px-7 rounded-full cursor-pointer text-nowrap h-fit bg-gray-100 uppercase text-black font-semibold text-11">
              {celeb}
            </p>
          ))}
        </div>
      </div>
  );
}
