import React from 'react'
import Container from '../../Container'

const ProgramRow = ({ title, img, desc }) => (
  <div className=" mb-8 flex basis-1/2">
    <img
      src={`/img/approach/${img}.png`}
      alt={title}
      className="h-[55px] w-[60px]"
    />
    <p
      className="mx-auto w-[70%] text-[12px] md:w-[85%] md:text-sm"
      style={{
        fontFamily: " 'Montserrat', sans-serif",
      }}
    >
      <b>{title}:</b> {desc}{' '}
    </p>
  </div>
)

const ProsumerPrograms = () => {
  const programData = [
    {
      title: 'Community Solar',
      img: 'solar',
      desc: 'A community solar project is a large, central solar power plant, whose electricity is shared by more than a single property (i.e. renters).',
    },
    {
      title: 'Microgrid',
      img: 'microgrid',
      desc: 'A community microgrid is a local energy grid with control capability, meaning it can disconnect from the traditional grid and operate autonomously (e.g. for critical facilities).',
    },
    {
      title: 'EV Infrastructure',
      img: 'ev',
      desc: ' Community EV mobility and infrastructure to minimize the use of fossil fuel vehicles.',
    },

    {
      title: 'Community Urban Hydro',
      img: 'urban',
      desc: 'Hydroelectric micro-generator installed within municipal water pipes to generate 100% clean electricity. This technology produces electricity 24/7 with the existing water flow, creating an alternative to community solar.',
    },
    {
      title: 'Retrofit  & New - Affordable HousingCommunity Solar',
      img: 'retrofit',
      desc: 'Prosumer homes that integrate hardware, software, and network to interconnect distributed energy resources and incentivize individuals to become market participants.',
    },
  ]
  return (
    <div className="  bg-purpleCommunityLight">
      <Container>
        <div className="flex h-auto  w-full flex-col justify-around md:h-[600px]">
          <div className=" my-10 flex justify-start md:my-0 md:justify-center">
            <h2 className="border border-purpleCommunity py-3 px-4 text-base font-medium uppercase lg:text-xl ">
              Prosumer Programs
            </h2>
          </div>
          {/*row container*/}
          <div className="flex w-full flex-col flex-wrap md:flex-row">
            {programData.map((p) => (
              <ProgramRow
                key={p.id}
                title={p.title}
                img={p.img}
                desc={p.desc}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProsumerPrograms
