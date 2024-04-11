import Image from "next/image";

export default function DetailsImages() {
  const images = [
    "https://assets-global.website-files.com/64c794410a6c56562470f505/653180cb4697c169a4b2e985_377643680_644691831130906_4669995358485320390_n-p-500.jpg",
    "https://assets-global.website-files.com/64c794410a6c56562470f505/653180cb405246945c081c9c_376768491_319634744086491_7818712447466068579_n-p-500.jpg",
    "https://assets-global.website-files.com/64c794410a6c56562470f505/6531a15a97ec4911f00ea67b_350908641_576263681298692_4674791037936578134_n-p-500.jpg",
    "https://assets-global.website-files.com/64c794410a6c56562470f505/6531a15a223aedfb9fd9a6b7_346067883_980955700015967_1003726914322663732_n-p-500.jpg",
  ];
  return (
    <div>
      <div className="h-96 bg-gray-100 relative py-16">
        <Image
          src={
            "https://assets-global.website-files.com/64c794410a6c56562470f505/65646b9909421d2717c6b76f_126710BLRO-0001.png"
          }
          alt=""
          height={0}
          width={0}
          className="h-full w-full object-contain"
          unoptimized
        />
        <p className="text-10 px-4 py-[10px] rounded-full bg-white text-black font-semibold absolute top-5 right-5 shadow-md">
          ASIAN WEALTH JEWELLER'S CHOICE
        </p>
      </div>
      <div className="grid gap-2 grid-cols-2 mt-2">
        {images.map((data, key) => (
          <div className="h-48 ">
            <Image
              src={`${data}`}
              alt=""
              height={0}
              width={0}
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
