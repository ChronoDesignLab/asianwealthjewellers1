import Image from "next/image";


type Props = {
  number: number
  all: boolean
}

export default function Celebs({number, all}: Props) {
  const celebs = [
    [
      "https://assets-global.website-files.com/64c794410a6c56562470f505/65422327193924f414e72d96_cristiano-ronaldo-p-500.jpeg",
      "Cristiano Ronaldo",
      "Football Player",
    ],
    [
      "https://assets-global.website-files.com/64c794410a6c56562470f505/65433a32face5936c349ff68_lionel-messi-p-500.jpeg",
      "Lionel Messi",
      "Football Player",
    ],
    [
      "https://assets-global.website-files.com/64c794410a6c56562470f505/65433f1a31607f41932e455e_kylie-jenner-p-500.jpeg",
      "Kylie Jenner",
      "Influencer",
    ],
    [
      "https://assets-global.website-files.com/64c794410a6c56562470f505/654496bb755664b087524894_nicki-minaj-2-p-500.jpeg",
      "Nicki Minaj",
      "Rapper",
    ],
    [
      "https://assets-global.website-files.com/64c794410a6c56562470f505/6544a40f98e1086524e9cdab_lebron-james-p-500.jpeg",
      "LeBron James",
      "Basketball Player",
    ],
    [
      "https://assets-global.website-files.com/64c794410a6c56562470f505/6545b4ada25af460db672b42_karim-benzema-p-500.jpeg",
      "Karim Benzema",
      "Football Player",
    ],
    [
      "https://assets-global.website-files.com/64c794410a6c56562470f505/6546338d923be1849cfc0ff6_sergioramos-p-500.jpeg",
      "Sergio Ramos",
      "Football Player",
    ],
    [
      "https://assets-global.website-files.com/64c794410a6c56562470f505/6547349af99638ec69909569_luka-modric-3-p-500.jpeg",
      "Luka Modric",
      "Football Player",
    ],
    [
      "https://assets-global.website-files.com/64c794410a6c56562470f505/65433da071f4b7c650f80755_dwayne-the-rock-johnson-4-p-500.jpeg",
      'Dwayne "The Rock" Johnson',
      "Actor",
    ],
    [
      "https://assets-global.website-files.com/64c794410a6c56562470f505/65434352d5b7e7acb8160323_justin-bieber-p-500.jpeg",
      "Justin Bieber",
      "Artist",
    ],
    [
      "https://assets-global.website-files.com/64c794410a6c56562470f505/654346767616ecf55a779ba0_virat-kohli-p-500.jpeg",
      "Virat Kohli",
      "Cricket Player",
    ],
    [
      "https://assets-global.website-files.com/64c794410a6c56562470f505/6537a7cc2ad3c17f9847f49e_339639893_206511135346255_2266949522524042438_n-p-500.jpg",
      "Jennifer Lopez",
      "Artist",
    ],
    [
      "https://assets-global.website-files.com/64c794410a6c56562470f505/6546f5386be1ebd0e0afb988_luis-suarez-4-p-500.jpeg",
      "Luis Suarez",
      "Rapper",
    ],
    [
      "https://assets-global.website-files.com/64c794410a6c56562470f505/655209f2e262b98c96042d68_victor-cruz-p-500.jpeg",
      "Victor Cruz",
      "American Football Player",
    ],
    [
      "https://assets-global.website-files.com/64c794410a6c56562470f505/6548d173870ea1ca1e24c28b_lil-wayne-p-500.jpeg",
      "Lil Wayne",
      "Rapper",
    ],
    ['https://assets-global.website-files.com/64c794410a6c56562470f505/654498e7827bfb495b6612cc_neymar-jr-p-500.jpeg', 'Neymar Jr.', 'Football Player'],
    ['https://assets-global.website-files.com/64c794410a6c56562470f505/65449fc8f9e97ad2f3d1acec_zendaya-p-500.jpeg', 'Zendaya', 'Actress'],
    ['https://assets-global.website-files.com/64c794410a6c56562470f505/65449b23664c2bbad9eb5ee4_kevin-hart-p-500.jpeg', 'Kevin Hart', 'Actor'],
    ['https://assets-global.website-files.com/64c794410a6c56562470f505/6544a5b6ebf8db4d9395d6fc_rihanna-p-500.jpeg', 'Rihanna', 'Artist'],
    ['https://assets-global.website-files.com/64c794410a6c56562470f505/6544a9f15ece5f06d4b9d442_chris-brown-p-500.jpeg', 'Chris Brown', 'Artist'],
    ['https://assets-global.website-files.com/64c794410a6c56562470f505/6545a8690ff6dbc7c1fee680_drake-p-500.jpeg', 'Drake', 'Artist'],
    ['https://assets-global.website-files.com/64c794410a6c56562470f505/6545a9ec675e9e74d19153c0_david-beckham-p-500.jpeg', 'David Beckham', ' Football Player'],
    ['https://assets-global.website-files.com/64c794410a6c56562470f505/6545babefee1e0e34e663937_maluma-p-500.jpeg', 'Maluma', 'Artist'],
    ['https://assets-global.website-files.com/64c794410a6c56562470f505/6545bc7da53114ab947b9a7e_theweeknd-5-p-500.jpeg', 'The Weeknd', 'Artist'],
    ['https://assets-global.website-files.com/64c794410a6c56562470f505/6545cd334436aab32bc46d0c_mohammed-salah-p-500.jpeg', 'Mohammed Salah', 'Football Player'],
    ['https://assets-global.website-files.com/64c794410a6c56562470f505/653f7c549202e8d8d9d82165_274206526_2073389266155015_6466947030184531437_n-p-500.jpg', 'Tom Holland', 'Actor'],
    ['https://assets-global.website-files.com/64c794410a6c56562470f505/6545b6bf57c2b86670f8a082_vincenzo-montella-6-p-500.jpeg', 'Vicenzo Montella', 'Football Player'],
    ['https://assets-global.website-files.com/64c794410a6c56562470f505/6545c80fe0417e0063c9022c_willsmith-p-500.jpeg', 'Will Smith', 'Actor']
  ];

  return (
    <div className="container padding border-b-2 pb-12">
      <div className={`grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
        {celebs.map((celeb, key) => (
          <div className={`${all ? '' : `${key + 1 > number && 'hidden'}`}`}>
            <div className="h-[400px] overflow-hidden">
              <Image
                src={`${celeb[0]}`}
                height={0}
                width={0}
                unoptimized
                alt=""
                className="h-full cursor-pointer hover:scale-125 duration-300 delay-200 w-full object-cover"
              />
            </div>
            <div className="mt-2">
              <p className="text-lg font-semibold text-black">{celeb[1]}</p>
              <p className="text-sm">{celeb[2]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
