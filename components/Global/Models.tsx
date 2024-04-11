import Image from "next/image"

type Props = {
  brand: string
}

export default function Models({brand}: Props) {
  const models = [
    {
      img: 'https://assets-global.website-files.com/64c794410a6c56562470f505/65589929e7571c0eed765c4a_15500ST.OO.1220ST.01-p-500.png',
      model: 'royal oak',
      brand: 'audemars'
    },
    {
      img: 'https://assets-global.website-files.com/64c794410a6c56562470f505/655c5d7a76b49634a6b9eb85_26420SO.OO.A002CA.01-p-500.png',
      model: 'royal oak offshore',
      brand: 'audemars'
    },
    {
      img: 'https://assets-global.website-files.com/64c794410a6c56562470f505/655c5cf7f90ba63887e2e6b9_26631IO.OO.D002CA.01-p-500.png',
      model: 'Code 11.59',
      brand: 'audemars'
    },
    {
      img: 'https://assets-global.website-files.com/64c794410a6c56562470f505/655c5cf7f90ba63887e2e6b9_26631IO.OO.D002CA.01-p-500.png',
      model: 'royal oak concept',
      brand: 'audemars'
    },
    {
      img: 'https://assets-global.website-files.com/64c794410a6c56562470f505/656025fb3507df1d0d36970e_126000-0006-p-500.png',
      model: 'oyster perpetual',
      brand: 'rolex'
    },
    {
      img: 'https://assets-global.website-files.com/64c794410a6c56562470f505/65646b9909421d2717c6b76f_126710BLRO-0001-p-500.png',
      model: 'gmt-master ii',
      brand: 'rolex'
    },
    {
      img: 'https://assets-global.website-files.com/64c794410a6c56562470f505/65646b230205349234d880d7_116500LN-0001-p-500.png',
      model: 'daytona',
      brand: 'rolex'
    },
    {
      img: 'https://assets-global.website-files.com/64c794410a6c56562470f505/656023997d58fa8a0938c223_124060-0001-p-500.png',
      model: 'submariner',
      brand: 'rolex'
    },
    {
      img: 'https://assets-global.website-files.com/64c794410a6c56562470f505/656030ee7881f7af6f614b03_126334-0002-p-500.png',
      model: 'datejust 41',
      brand: 'rolex'
    },
    {
      img: 'https://assets-global.website-files.com/64c794410a6c56562470f505/655c3c95d965533d3b875217_5712G-001-p-500.png',
      model: 'nautilus',
      brand: 'patek'
    },
    {
      img: 'https://assets-global.website-files.com/64c794410a6c56562470f505/6559761a3bc1231f65fe7569_5968A-001-p-500.png',
      model: 'aquanut',
      brand: 'patek'
    },
    {
      img: 'https://assets-global.website-files.com/64c794410a6c56562470f505/655c419a3150c5d70f05fc47_7010R-011-p-500.png',
      model: 'lady nautilus',
      brand: 'patek'
    },
    {
      img: 'https://assets-global.website-files.com/64c794410a6c56562470f505/655974e49e1b7a6a4542f34a_5227G-010-p-500.png',
      model: 'calatrava',
      brand: 'patek'
    },
    {
      img: 'https://assets-global.website-files.com/64c794410a6c56562470f505/655c40893150c5d70f05344f_5935A-001-p-500.png',
      model: 'complications',
      brand: 'patek'
    },
    {
      img: 'https://assets-global.website-files.com/64c794410a6c56562470f505/656aada523ce6101335d97f1_rm-005-rose-gold-p-500.png',
      model: 'rm 005',
      brand: 'richard'
    },
    {
      img: 'https://assets-global.website-files.com/64c794410a6c56562470f505/656da8d23d2e0df6c42421df_rm-12-01-red-quartz-p-500.png',
      model: 'rm 012',
      brand: 'richard'
    },
    {
      img: 'https://assets-global.website-files.com/64c794410a6c56562470f505/656da8a6a7612d2c8f709398_rm-19-02-diamond-fleur-p-500.png',
      model: 'rm 19',
      brand: 'richard'
    },
    {
      img: 'https://assets-global.website-files.com/64c794410a6c56562470f505/656da8c680360a51c262cb76_rm-016-rose-gold-diamonds.png',
      model: 'rm 016',
      brand: 'richard'
    },
    {
      img: 'https://assets-global.website-files.com/64c794410a6c56562470f505/656da87dc29d8a8dcda20775_rm-27-04-rafael-nadal-p-500.png',
      model: 'rm 027',
      brand: 'richard'
    },
  ]
  const newModels = models.filter(el => el.brand === brand)
  return (
    <div className="container2">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
            {newModels.map((model, key) => (
                <div className="" key={key}>
                    <div className="h-60">
                      <Image src={model.img} unoptimized alt={model.brand} height={0} width={0} className="h-full w-full object-cover "/>
                    </div>
                    <p className="font-semibold text-base text-center uppercase text-black mt-7">{model.model}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
