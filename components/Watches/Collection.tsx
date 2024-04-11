import TempB from "../Global/TempB";
import Title from "../Global/Title";
import { watches } from "../Global/TypeA";

export default function Collection() {
  const items = [
    {
      name: "Rolex, GMT-Master II",
      price: "50,000 - 80,000 AED",
      text: "Comes with Box & Papers",
      img: "https://assets-global.website-files.com/64c794410a6c56562470f505/65653ce28288cf246fb4786d_126710BLNR-0002-p-500.png",
    },
    {
      name: "Rolex, GMT-Master II",
      price: "80,000 - 100,000 AED",
      text: "Comes with Box & Papers",
      img: "https://assets-global.website-files.com/64c794410a6c56562470f505/65646b9909421d2717c6b76f_126710BLRO-0001-p-500.png",
    },
    {
      name: "Rolex, Submariner",
      price: "50,000 - 80,000 AED",
      text: "Comes with Box & Papers",
      img: "https://assets-global.website-files.com/64c794410a6c56562470f505/65653b3afcb90a40f0370bc2_126610LN-0001-p-500.png",
    },
    {
      name: "Rolex, Datejust 41",
      price: "50,000 - 80,000 AED",
      text: "Comes with Box & Papers",
      img: "https://assets-global.website-files.com/64c794410a6c56562470f505/656030ee7881f7af6f614b03_126334-0002-p-500.png",
    },
  ];
  return (
    <div className="mt-20  container2">
      <Title color="black" title="Our Watch Collection" />
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-12 gap-2">
        {items.map((watch, key) => (
          <TempB watch={watch} key={key} />
        ))}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-12 gap-2">
        {items.map((watch, key) => (
          <TempB watch={watch} key={key} />
        ))}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-12 gap-2">
        {items.map((watch, key) => (
          <TempB watch={watch} key={key} />
        ))}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-12 gap-2">
        {items.map((watch, key) => (
          <TempB watch={watch} key={key} />
        ))}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-12 gap-2">
        {items.map((watch, key) => (
          <TempB watch={watch} key={key} />
        ))}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-12 gap-2">
        {items.map((watch, key) => (
          <TempB watch={watch} key={key} />
        ))}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-12 gap-2">
        {items.map((watch, key) => (
          <TempB watch={watch} key={key} />
        ))}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-12 gap-2">
        {items.map((watch, key) => (
          <TempB watch={watch} key={key} />
        ))}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-12 gap-2">
        {items.map((watch, key) => (
          <TempB watch={watch} key={key} />
        ))}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-12 gap-2">
        {items.map((watch, key) => (
          <TempB watch={watch} key={key} />
        ))}
      </div>
    </div>
  );
}
