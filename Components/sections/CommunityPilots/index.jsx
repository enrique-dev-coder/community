import React, { useState } from 'react'
import PilotCard from './PilotCard'
import FadeinElement from '../../FadeinElement'
import CaseDescriptionModal from '../../CaseDescriptionModal'
import PilotCardMobile from './PilotCardMobile'
import FadeinParagraph from '../../FadeinElement'
import Link from 'next/link'
import {
  bassetAvocadoModals,
  santaanamodalLogos,
  santaMonicaLogos,
} from '../../../logoData'
import LogoGrid from './LogoGrid'
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
  const onClickRightArrow = () => {
    cardid === 3 ? setCardid(1) : setCardid(cardid + 1)
  }
  const onClickLeftArrow = () => {
    cardid === 1 ? setCardid(3) : setCardid(cardid - 1)
  }
  console.log(cardid)
  const data = [
    {
      id: 1,
      place: 'Basset Avocado',
      intro: 'Advanced Electricity Community Retro-fit',
      country: 'Los Angeles,California',
      bgModalImage: "bg-[url('/img/bassetmodal.png')]",
      mobilebgImage: "bg-[url('/img/cases/Bassetmobile.png')]",
      text: (
        <div className="mt-5 md:mt-0 md:h-full">
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
            <li>
              A mobile living laboratory to periodically perform rounds
              throughout the community, measuring and reporting real-time
              decarbonization impact
            </li>
          </ul>
          <LogoGrid imagenes={bassetAvocadoModals} />
        </div>
      ),
      desc: 'Prosumer Electricity Community Master Plan Program for Disadvantaged Communities',
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
      place: 'EPIC',
      country: 'Santa Ana, California',
      bgModalImage: "bg-[url('/img/santanamodalimage.png')]",
      mobilebgImage: "bg-[url('/img/cases/SantaAnamobile.png')]",
      intro:
        'Reimagining Affordable Mixed-Use Development in a Carbon-Constrained Future',
      text: (
        <div className=" mt-5 text-communitygray md:mt-0 md:h-full  ">
          <p className=" mb-5 mt-5 text-sm font-bold ">
            Advanced Prosumer Community - New Multi-Use Building (Affordable
            House & Retail Space) with Micro Transit
          </p>
          <p className=" mb-5 text-sm ">
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
            electric transportation.
            <b>
              The project is a new model of urban development that combines 100%
              electric affordable housing with 100% electric Micro-Transit Hubs.
            </b>{' '}
            Micro-Transit Hubs are last-mile electric vehicles serviced, owned,
            and operated by members of the community. This integrated approach
            fulfills two significant societal needs: affordable housing and
            employment. Combining affordable housing with access to
            transportation enables job creation. Beyond last mile 100%
            zero-emission delivery services,
            <b>
              the hub also connects with the city’s mass transit systems
              streamlining transportation and facilitating access in and out of
              the innovation zone.
            </b>
          </p>
          <LogoGrid imagenes={santaanamodalLogos} />
        </div>
      ),
      desc: 'Prosumer Electricity Community New 100% Electric Affordable Housing Program',
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
      place: 'Santa monica',
      country: 'California',
      intro: 'Advanced Prosumer Community',
      bgModalImage: "bg-[url('/img/santmonicamodalbg.png')]",
      mobilebgImage: "bg-[url('/img/cases/SantaMonicamobile.png')]",
      text: (
        <div className="mt-5 text-communitygray md:mt-0 md:h-full">
          <p className="mb-5 mt-5 text-sm ">
            We aim to implement version 2.0 of our California Energy Commission
            innovation zone, “The Basset-Avocado Advanced Energy Community
            (BAAEC),” and create the “Santa Monica ClimateTech Innovation Zone.”
          </p>
          <p className="mb-5 mt-5 text-sm ">
            Our vision for this “Santa Monica ClimateTech Innovation Zone” is to
            create decarbonization benefits over 50 affordable housing buildings
            (comprising 861 units) located within the three disadvantaged
            communities (CalEnviro 4.0 80+ percentile) of Santa Monica while
            mobilizing, educating, and training residents to actively take part
            in the energy transition through a set of digital and physical
            tools.
          </p>
          <p className="mb-5 mt-5 text-sm ">
            Our consortium will deploy an innovative and versatile model focused
            on providing affordable, locally produced renewable energy, energy
            services, and renewable energy-related job training within those
            disadvantaged communities to benefit both customers and the
            electricity grid.
          </p>
          <p className="mb-5 mt-5 text-sm ">
            We are creating a flagship decarbonization commercial pilot that can
            be scaled across California and throughout DAC areas in the United
            States.
          </p>
          <LogoGrid imagenes={santaMonicaLogos} />
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
      desc: 'Prosumer Electricity Community Affordable Housing, EV Infrastructure, Urban Hydro, Education & Training',
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
            CLIMATETECH INNOVATION ZONE COMMERCIAL PILOTS{' '}
          </h2>
        </FadeinElement>
        {/*Pilot Cards  for desktop */}
        <div className="mt-10 mb-20 hidden flex-col space-y-5 md:flex  md:flex-row md:space-x-4 md:space-y-0">
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
        {/*Pilot cards for mobile
         esto va a renderizar la tarjeta que sea igual al estado de ese map osea de ese conjunto de datos
        */}

        <div className="w-full md:hidden">
          {data.map(
            (d) =>
              cardid === d.id && (
                <FadeinParagraph key={d.id}>
                  <PilotCardMobile
                    mobilebgImage={d.mobilebgImage}
                    place={d.place}
                    country={d.country}
                    desc={d.desc}
                    showModal={() => onClickCard(d.id)}
                  />
                </FadeinParagraph>
              )
          )}
        </div>
        <div className="flex  w-full justify-between md:justify-center ">
          <img
            src="/img/cases/FlechaIzqueirda.png"
            alt="flecha izquierda"
            className="md:hidden"
            onClick={onClickLeftArrow}
          />
          <Link href="/approach">
            <p
              className="cursor-pointer  rounded-sm  bg-purpleCommunity px-6 py-2 text-center font-bold text-white md:mr-[80px]"
              style={{
                fontFamily: " 'Montserrat', sans-serif",
              }}
            >
              APPROACH
            </p>
          </Link>
          <img
            src="/img/cases/FlechaDerecha.png"
            alt="flecha izquierda"
            className="md:hidden"
            onClick={onClickRightArrow}
          />
        </div>
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
                  country={m.country}
                  bgModalImage={m.bgModalImage}
                />
              )
          )}
      </div>
    </div>
  )
}

export default index
