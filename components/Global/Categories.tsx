
export default function Categories() {
  const categories = [
    "for him",
    "for her",
    "sport model",
    "dress model",
    "diamond dial",
    "motif dial",
    "arabic dial",
    "roman dial",
    "rest price",
    "two-tone",
    "yellow gold",
    "rose gold",
    "white gold",
    "<2mm+",
    "heavy hitters",
    "jubilee bracelet",
    "new for 2024",
    "oyester bracelet",
    "oyesterflex bracelet",
    "smooth bezel",
    "big moe's choice",
    "new for 2024",
    "discountinued model",
    "anniversary model",
    "limited edition",
  ];
  return (
    <div>
      <div className="flex gap-4 lg:px-6">
        <p className="px-4 py-3 mt-2 rounded-full bg-gray-100 uppercase text-black font-semibold text-10 h-fit">
          ALL CATEGORIES
        </p>
        <div className="flex flex-1 lg:flex-wrap py-2 overflow-x-auto gap-5">
          {categories.map((category, key: number) => (
            <p className="px-4 py-3 rounded-full cursor-pointer text-nowrap h-fit bg-gray-100 uppercase text-black font-semibold text-11">
              {category}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
