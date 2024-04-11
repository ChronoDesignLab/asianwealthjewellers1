import Image from "next/image";
import Logo from '../../Assets/Images/logo.png'
export default function Footer() {
  const links = [
    {
      title: "Company",
      links: ["Watches", "Authenticity", "Celebrities", "Why Big Moe"],
    },
    {
      title: "Explore",
      links: ["Roles", "Audemar Piguet", "Patek Philippe", "Richard Mille"],
    },
    {
      title: "Company",
      links: ["Instagram", "TikTok", "YouTube", "Watch Group"],
    },
    {
      title: "Privacy",
      links: ["Terms & Conditions", "Privacy Policy", "Cookies Policy"],
    },
  ];
  return (
    <div className="pt-20 bg-black text-white">
      <div className="grid container border-b pb-7 gap-5 padding grid-col-1 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
        <div className="flex justify-center">
          <Image src={Logo} alt="" height={0} width={0} className="h-48 pb-5 object-contain"/>
        </div>
        {links.map((link, key) => (
          <div className="">
            <p className="mb-4 font-semibold">{link.title}</p>
            <div className="flex flex-col gap-3">
              {link.links.map((data, key) => (
                <p className="text-10">{data}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="container padding text-10 text-gray-400 flex flex-col lg:flex-row py-5 justify-between gap-5 lg:gap-0 lg:items-center">
        <p>2024 All Rights Reserved | Big Moe Watches</p>
        <p className="">
          Made in Dubai <span className="text-10">AE</span>
        </p>
      </div>
    </div>
  );
}
