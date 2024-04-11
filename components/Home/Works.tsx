import SourceMeAWatch from "../Global/SourceMeAWatch";
import Title from "../Global/Title";

export default function Works({ dark }: { dark: boolean }) {
  const data = [
    [
      "You Want It",
      "Share the details of the watch you are looking for with our watch expert through WhatsApp.",
    ],
    [
      "We Source It",
      "Our team will source the watch you want, providing you with the latest price and availability. If the price matches your budget, we will request a deposit to make your order.",
    ],
    [
      "We Deliver It",
      "Once your order is confirmed, our team will source the watch and deliver the watch to you in as little as 48 hours.",
    ],
  ];
  return (
    <div
      className={`flex flex-col  justify-center items-center py-20 ${
        !dark ? "bg-gray-100 text-black" : " text-white"
      }`}
    >
      <Title color="black" title="How it Works" />
      <div className="grid container mt-24 gap-10 grid-cols-1 lg:grid-cols-3 padding">
        {data.map((item, key) => (
          <div className="">
            <p className="text-11 font-semibold mb-10">0{key + 1}</p>
            <p className="text-3xl font-semibold mb-3">{item[0]}</p>
            <p>{item[1]}</p>
          </div>
        ))}
      </div>
      <div className="center mt-24">
        <SourceMeAWatch bgColor="black" color="white" />
      </div>
    </div>
  );
}
