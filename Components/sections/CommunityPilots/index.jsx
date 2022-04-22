import React, { useState } from 'react'
import PilotCard from './PilotCard'
import FadeinElement from '../../FadeinElement'
import CaseDescriptionModal from '../../CaseDescriptionModal'
const index = () => {
  const [modal, setModal] = useState(false)
  //renderizar el modal dependiendo del id
  const [cardid, setCardid] = useState(1)
  //fucnion de click en el learnmore de la tarjeta
  //cuando des click tomas el id de la tarjeta  para cambiar el estado, luego se renderiza el modal
  //comparando el id del data con el del estado
  const onClickCard = (id) => {
    setModal(true)
    setCardid(id)
  }
  const data = [
    {
      id: 1,
      place: 'Basset avocado, california',
      intro: 'Advanced Electricity Community Retro-fit',
      text: (
        <div className="mt-5 h-[300px]  overflow-y-auto md:mt-0 md:h-full">
          <p className="mb-5 text-xs text-communitygray md:mt-5 md:text-sm">
            The Basset-Avocado Advanced Energy Community (BAAEC) is the master
            prosumer pilot. The award-winning consortium is deploying an
            innovative and versatile model focused on providing affordable,
            locally produced renewable energy and energy services at scale
            within a disadvantaged community. The BAAEC, a 28,000-resident
            community will serve enrolled participants using a complex system
            comprised of seven main components:
          </p>
          <ul className="mx-auto mb-5 w-10/12 list-disc text-xs text-communitygray md:text-sm">
            <li>
              {' '}
              A digital application to engage and guide community members
              towards decarbonization: “people first”
            </li>
            <li>
              A smart community solar and storage system to offset annual
              electricity load
            </li>
            <li>
              A campus microgrid resilience hub to provide clean backup power to
              the community in emergencies, severe heat days, or blackouts
            </li>
            <li>
              A prosumer network and a virtual power plant integrating 50
              single-family homes equipped with solar photovoltaic and battery
              storage to demonstrate a Blockchain community network pilot
            </li>
            <li>
              A mobile grid that includes a community-operated EV vanpooling
              service and a network of fast EV charging stations to decrease the
              use of fossil fuel vehicles, reduce carbon emissions, and improve
              air quality
            </li>
            <li>
              An indoor-outdoor smart pollution sensor network including an
              IoT-based NOx emissions monitoring system to measure and improve
              emissions from fossil fuel vehicles still operating within the
              community
            </li>
          </ul>
          <p className="text-xs text-communitygray md:text-sm">
            A mobile living laboratory to periodically perform rounds throughout
            the community, measuring and reporting real-time decarbonization
            impact
          </p>
        </div>
      ),
      desc: 'Advanced Electricity Community Master Plan Program for Disadvantaged Communities',
      img: '/img/cases/Basset.png',
      content: [
        {
          img: '/img/icons/Community Solar.png',
          desc: 'Community Solar',
        },
        {
          img: '/img/icons/Resiliency hub.png',
          desc: 'Resilency hub microgid',
        },
        {
          img: '/img/icons/Prosumer home.png',
          desc: 'Prosumer homes with solar,storage and peer-to-market VPP; peer-to-peer simulation',
        },
        { img: '/img/icons/HPWH.png', desc: 'HPWH' },
        {
          img: '/img/icons/Energy Efficiency.png',
          desc: 'Energy efficiency (EE)',
        },
        {
          img: '/img/icons/Blockchain.png',
          desc: 'Blockchain Super Node',
        },
        {
          img: '/img/icons/Carbon Management.png',
          desc: 'Carbon Management',
        },
        {
          img: '/img/icons/Smart Thermostat.png',
          desc: 'Smart Thermostat',
        },
      ],
      contractor: '/img/energycommission.png',
      status: 'Under implementation',
    },
    {
      id: 2,
      place: 'SANTA ANA, CALIFORNIA',
      intro:
        'Reimagining Affordable Mixed-Use Development in a Carbon-Constrained Future',
      text: (
        <div className=" mt-5 h-[300px] overflow-y-auto text-communitygray  md:h-[425px]">
          <p className="mt-5 mb-5 text-sm ">
            The vision for the Santa Ana Environmental Justice Innovation Zone
            project is to create decarbonization benefits in disadvantaged
            communities (DACs) while providing affordable, reliable energy in a
            way that benefits both customers and the electricity grid. The goal
            of the project is to demonstrate and quantify the benefits of
            aggregated assets in a flagship mixed-use multifamily development.
          </p>
          <p className="mb-5 text-sm">
            The project is a multi-parcel low-rise design in Santa Ana. The
            proposed design will replace an underutilized, 1960’s C-class office
            complex with 160 apartments in 4 stories.
          </p>
          <p className="text-sm">
            The emerging energy transition and the urge to decarbonize highlight
            the need for innovative smart social housing with integrated
            electric transportation. The project is a new model of urban
            development that combines 100% electric affordable housing with 100%
            electric Micro-Transit Hubs. Micro-Transit Hubs are last-mile
            electric vehicles serviced, owned, and operated by members of the
            community. This integrated approach fulfills two significant
            societal needs: affordable housing and employment. Combining
            affordable housing with access to transportation enables job
            creation. Beyond last mile 100% zero-emission delivery services, the
            hub also connects with the city’s mass transit systems streamlining
            transportation and facilitating access in and out of the innovation
            zone.
          </p>
        </div>
      ),
      desc: 'New 100% Electric Affordable Housing Program',
      content: [
        {
          img: '/img/icons/EV Van Pooling.png',
          desc: 'EV Van pooling',
        },
        {
          img: '/img/icons/Smart Thermostat.png',
          desc: 'Smart Thermostat',
        },
        {
          img: '/img/icons/Prosumer home.png',
          desc: 'Prosumer homes with solar,storage and peer-to-market VPP',
        },
        {
          img: '/img/icons/Energy Efficiency.png',
          desc: 'Energy efficiency (EE)',
        },
        {
          img: '/img/icons/Blockchain.png',
          desc: 'Blockchain Super Node',
        },
        {
          img: '/img/icons/Carbon Management.png',
          desc: 'Carbon Management',
        },
      ],
      img: '/img/cases/SantaAna.png',
      contractor: '/img/energycommission.png',
      status: 'Design phase won',
    },
    {
      id: 3,
      place: 'Santa monica, california',
      intro: 'Advanced Prosumer Community',
      text: (
        <div className=" mt-5 h-[300px] overflow-y-auto text-communitygray  md:h-[425px]">
          <p className="mb-5 mt-5 text-sm ">
            We aim to implement version 2.0 of our CEC winning project “The
            Basset-Avocado Advanced Energy Community (BAAEC)” and create “Santa
            Monica Prosumer Community”. Our consortium will deploy an innovative
            and versatile model focused on providing affordable, locally
            produced renewable energy and energy services at scale within a
            disadvantaged community creating a flagship decarbonization and
            innovation zone. The “Santa Monica Prosumer Community” will serve
            enrolled participants using a comprehensive system comprised of
            seven main components:
          </p>
          <ul className="mx-auto w-10/12 list-disc text-sm">
            <li>
              A prosumer network and a customer-focused, grid aware virtual
              power plant integrating 10-20 Santa Monica Community Corp’s
              affordable housing (multi-family) buildings equipped with solar
              photovoltaic, smart thermostats, and battery storage allowing
              residents to provide grid services (demand-flexibility and surplus
              electricity sale to wholesale, retail, and local energy markets).{' '}
            </li>
            <li>
              A campus microgrid resilience hub at Santa Monica Community
              College to provide clean primary and backup power to the community
              in daily operations, and sufficient capacity for emergencies,
              severe heat days, or blackouts
            </li>
            <li>
              Pending another grant (Inclusive Innovation Prize Grant): We will
              leverage the Impact Labs mobile app. The app involves Community
              College students in the decarbonization efforts of their own
              community (i.e. surveys, marketing flyers, focus groups, etc).
              Providing workforce development, training, and rewarding community
              college students for being involved in the decarbonization efforts
              of their own community. A “Santa Monica College Microgrid” is an
              exciting start.
            </li>
            <li>
              LA’s Community College District’s commitment to renewable energy
              by 2030. We want to make Santa Monica College the living
              laboratory and flagship project to be replicated across the other
              19 Community Colleges in LA County.
            </li>
            <li>
              Smart community solar to provide clean localized electricity to
              approximately 200-300 renters.
            </li>
            <li>
              An indoor-outdoor smart pollution sensor network including an
              IoT-based NOx emissions monitoring system to measure and improve
              emissions.
            </li>
            <li>
              An operating system that interconnects all community assets using
              a blockchain backbone that creates an impact index to report
              decarbonization impact in real-time.{' '}
            </li>
            <li>
              An urban micro-hydro technology to power EV Bus stations and a
              network of fast EV charging stations to decrease the use of fossil
              fuel vehicles, reduce carbon emissions, and improve air quality
            </li>
            <li>
              A digital application to engage and guide community members
              towards decarbonization: “people first”. The application will also
              reward community members for green action.{' '}
            </li>
          </ul>
        </div>
      ),
      content: [
        {
          img: '/img/icons/Smart Thermostat.png',
          desc: 'Smart Thermostat',
        },
        {
          img: '/img/icons/Prosumer home.png',
          desc: 'Prosumer homes with solar,storage and peer-to-market VPP',
        },
        {
          img: '/img/icons/Energy Efficiency.png',
          desc: 'Energy efficiency (EE)',
        },
        {
          img: '/img/icons/Blockchain.png',
          desc: 'Blockchain Super Node',
        },
        {
          img: '/img/icons/Carbon Management.png',
          desc: 'Carbon Management',
        },
      ],
      desc: 'Affordable Housing Retro-fit Program',
      img: '/img/cases/SantaMonica.png',
      contractor: '/img/californiastrat.png',
      status: 'Under implementation',
    },
  ]
  return (
    <div className="relative  mb-20 max-w-[1440px] overflow-x-hidden lg:ml-auto lg:w-[95%]  lg:pt-14 xl:pt-0">
      <div className="mx-auto flex w-4/5 flex-col items-center justify-center lg:w-full">
        <FadeinElement>
          <h2 className=" mx-auto mb-24 border-2 border-purpleCommunity  px-6  py-2 text-center text-[20px] uppercase lg:w-[45%] lg:text-2xl">
            PROSUMER COMMUNITY COMMERCIAL PILOTS
          </h2>
        </FadeinElement>
        <div className="mt-10 mb-20 flex flex-col space-y-5 md:flex-row md:space-x-4 md:space-y-0">
          {data.map((d) => (
            <PilotCard
              key={d.id}
              place={d.place}
              desc={d.desc}
              img={d.img}
              showModal={() => onClickCard(d.id)}
            />
          ))}
        </div>
        <p
          className="cursor-pointer  rounded-sm bg-purpleCommunity px-6 py-2 text-center font-bold text-white md:mr-[80px]"
          style={{
            fontFamily: " 'Montserrat', sans-serif",
          }}
        >
          More pilots
        </p>
        {modal &&
          data.map(
            (m) =>
              //aqui te va a renderizar el modal igual al id del estado
              //lo que se va a cambiar es el estado conforme al id
              cardid === m.id && (
                <CaseDescriptionModal
                  place={m.place}
                  intro={m.intro}
                  text={m.text}
                  close={() => setModal(false)}
                  content={m.content}
                  contractor={m.contractor}
                  status={m.status}
                />
              )
          )}
      </div>
    </div>
  )
}

export default index
