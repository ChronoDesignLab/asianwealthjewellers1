import { BsGoogle, BsStar, BsStarFill } from "react-icons/bs";
import ClientComp from "../Global/Client";
import Title from "../Global/Title";
import { FcGoogle } from "react-icons/fc";


export default function Client() {

  const clientReviews = [
    {
      name: "John Doe",
      review: "I absolutely love the selection of watches on this website. The variety is amazing, and the prices are reasonable too!",
      rating: 4.5,
      abbr: "JD"
    },
    {
      name: "Jane Smith",
      review: "The user interface of the website is fantastic. It's so easy to navigate and find the perfect watch. I highly recommend it!",
      rating: 5,
      abbr: "JS"

    },
    {
      name: "Mike Johnson",
      review: "The customer service provided by this website is top-notch. They were quick to respond to my queries and helped me choose the right watch. Great experience overall!",
      rating: 4,
      abbr: "MJ"
    },
    {
      name: "Emily Davis",
      review: "I've made multiple purchases from this website, and each time I've been impressed with the quality of the watches. They always exceed my expectations!",
      rating: 4.8,
      abbr: "ED"
    },
    {
      name: "Sarah Thompson",
      review: "This watch website has a wide range of brands and styles to choose from. I found the perfect watch for my husband's birthday. He loved it!",
      rating: 4.2,
      abbr: "ST"
    },
    {
      name: "David Wilson",
      review: "The shipping was incredibly fast. I ordered a watch yesterday, and it arrived today. I'm impressed with the efficiency!",
      rating: 4.7,
      abbr: "DW"
    },
    {
      name: "Linda Brown",
      review: "I had a minor issue with the watch I received, but the customer support team was quick to resolve it. They provided excellent assistance!",
      rating: 4.3,
      abbr: "LB"
    },
    {
      name: "Robert Jackson",
      review: "The prices on this website are unbeatable. I compared them with other online stores, and this site consistently offered the best deals!",
      rating: 4.9,
      abbr: "RJ"
    },
    {
      name: "Michelle Lee",
      review: "I'm a watch collector, and this website has a great collection of limited edition watches. I'm thrilled with my recent purchase!",
      rating: 4.6,
      abbr: "ML"
    },
    {
      name: "Christopher Harris",
      review: "The website provides detailed product descriptions and high-resolution images, making it easy to make informed decisions. Impressive!",
      rating: 4.4,
      abbr: "CH"
    }
  ];
  
  return (
    <div className="py-10">
      <Title color="black" title="What Our Client Say" />
      <div className="h-[370px] mt-10 relative grid grid-cols-2">
        <div className=""></div>
        <div className="bg-gray-100"></div>
        <div className="h-80 py-3 px-10 absolute bottom-4 grid grid-flow-col auto-cols-[250px] sm:auto-cols-[300px] overflow-x-auto gap-5 left-0 w-full ">
          {clientReviews.map((client, key) => (
            <div key={key} className="relative shadow-md shadow-gray-300 rounded-sm bg-white p-3">
              <div className="flex w-full py-1 justify-end">
                <FcGoogle className="text-2xl"/>  
              </div>
              <p></p>
              <div className="flex w-full gap-2 items-center">
                <div className="h-10 w-10 rounded-full border-2 bg-black text-white center">
                  <p>{client.abbr}</p>
                </div>
                <div className="">
                  <p className="text-13">
                    {client.name}
                  </p>
                  <p className="font-semibold text-black text-sm">First time buyer</p>
                </div>
              </div>
              <div className="leading-loose mt-4">
                <p>
                  {client.review}
                </p>
              </div>
              <div className="absolute flex gap-2 bottom-5 left-5">
                {[1,2,3,4,5].map(() => (
                  <BsStarFill className="text-amber-500 text-base"/>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
