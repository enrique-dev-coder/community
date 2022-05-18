import React, { useState } from 'react'
import Container from '../../Container'
import PilotCardMobile from '../CommunityPilots/PilotCardMobile'
import CaseDescriptionModal from '../../CaseDescriptionModal'
import FadeinParagraph from '../../FadeinElement'
import {
  bassetAvocadoModals,
  santaanamodalLogos,
  santaMonicaLogos,
  labsLogos,
  latamLogos,
  valenciaLogos,
} from '../../../logoData'
import LogoGrid from '../CommunityPilots/LogoGrid'
const Pilots = () => {
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
    cardid === 6 ? setCardid(1) : setCardid(cardid + 1)
  }
  const onClickLeftArrow = () => {
    cardid === 1 ? setCardid(6) : setCardid(cardid - 1)
  }
  const data = [
    {
      id: 1,
      place: 'Basset Avocado',
      intro: 'Advanced Electricity Community Retro-fit',
      country: 'Los Angeles,California',
      bgModalImage: "bg-[url('/img/bassetmodal.png')]",
      mobilebgImage: "bg-[url('/img/cases/Bassetmobile.png')]",
      specialCharacteristics: true,
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
      desc: 'Virtual power plants\n  Master Plan Program for Disadvantaged Communities',
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
      specialCharData: {
        title:
          'Virtual Power Plant Master Plan Program for disadvantiged communities',
        listItems: [
          'Location: Los Ángeles, CA',
          'Population: 28K residents',
          'Community Type: Retrofit Disadvantaged Community',
          'Network: 50 homes',
          'Technology: Advanced Energy Multi- Asset',
          'Data Points: 100+',
        ],
      },
    },
    {
      id: 2,
      place: 'Santa Ana',
      country: 'California',
      bgModalImage: "bg-[url('/img/santanamodalimage.png')]",
      mobilebgImage: "bg-[url('/img/cases/SantaAnamobile.png')]",
      specialCharacteristics: true,
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
      desc: 'Virtual power plants\n  New 100% Electric Affordable Housing Program',
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
      specialCharData: {
        title: 'Virtual Power Plant Master Plan Program Affordable Housing',
        listItems: [
          'Location: Santa Ana, CA',
          'Units: 165',
          'Population: 28K residents',
          'Community Type: New construction affordable housing and commercial units',
          'Network: 3 buildings',
          'Technology: Distributed Energy Resources Deployment, Multi- Asset (100% electric + VVP + Microgrid)',
          'EV Micro Transit',
          'Data Points: 250+',
        ],
      },
    },
    {
      id: 3,
      place: 'Santa monica',
      country: 'California',
      intro: 'Advanced Prosumer Community',
      bgModalImage: "bg-[url('/img/santmonicamodalbg.png')]",
      mobilebgImage: "bg-[url('/img/cases/SantaMonicamobile.png')]",
      specialCharacteristics: true,
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
      desc: 'Virtual power plants\n  Affordable Housing, EV Infrastructure, Urban Hydro, Education & Training',
      img: '/img/cases/SantaMonica.png',
      contractor: '/img/californiastrat.png',
      status: 'Under implementation',
      specialCharData: {
        title:
          'Virtual Power Plant Master Plan Program city. wide affordable housing',
        listItems: [
          'Location: Santa Monica, CA ',
          'Units: 52',
          'Community Type: Retrofit and new construction',
          'Technology: Distributed Energy Resources Deployment, Multi- Asset (VVP), EV Micro Transit',
          'Data Points: 1000+',
        ],
      },
    },
    {
      id: 4,
      place: 'impact labs',
      country: 'Santa Monica ',
      intro: '',
      bgModalImage: "bg-[url('/img/labsmodalbg.png')]",
      mobilebgImage: "bg-[url('/img/cases/impactMobile.png')]",
      specialCharacteristics: false,
      text: (
        <div className="mt-5 text-communitygray md:mt-0 md:h-full">
          <p className="mb-5 mt-5  text-base ">
            The development/incubation of the Impact Labs app. The Impact Labs
            app provides climate action job training and workforce development
            for community colleges students.
          </p>
          <p className="mb-5 mt-5 text-sm ">
            <b>Goals:</b>
          </p>
          <ul className="mx-auto w-11/12 list-disc text-sm">
            <li>
              Provide training and education: on the future of energy,
              Disadvantaged Communities regeneration programs, key actors, etc.
            </li>
            <li>
              We aim to sensitize students on the direction forward for
              humanity. The training program will be in partnership with The
              Energy Coalition, Grid Alternatives, and other partners.
            </li>
            <li>
              On-demand hourly job opportunities: Enable Community College
              students to receive hands-on training and part-time jobs working
              towards their city's decarbonization.
            </li>
            <li>
              We aim to involve local community college students in our
              solutions and climate action.
            </li>
            <li>
              Jobs can vary from simple hourly research, problem-solving,
              surveying, solar installations, app design development, marketing
              flyers, etc.
            </li>
            <li>
              Use the ImpactLabs app for local residents/students to vote for
              projects they want to support.
            </li>
            <li>
              Amplify the community's voice to help push decarbonization
              projects forward.
            </li>
          </ul>
          <LogoGrid imagenes={labsLogos} />
        </div>
      ),
      content: [
        {
          img: '/img/icons/workforce.png',
          desc: 'Workforce Development',
        },
        {
          img: '/img/icons/education.png',
          desc: 'Education & TrainingP',
        },
      ],
      bigSpecialImage: '/img/cases/biglabimage.png',
      desc: 'Virtual power plants\n  Community engagement, Student Education and Worforce Development',
      img: '/img/cases/SantaMonica.png',
      contractor: '/img/usacontractor.png',
      status: 'Under Evaluation',
    },
    {
      id: 5,
      place: 'LA',
      country: 'Latam Plan ',
      intro: 'Advanced Prosumer Community',
      bgModalImage: "bg-[url('/img/labsmodalbg.png')]",
      mobilebgImage: "bg-[url('/img/cases/laMobile.png')]",
      specialCharacteristics: false,
      text: (
        <div className="mt-5 text-communitygray md:mt-0 md:h-full">
          <p className="mb-5 mt-5 text-sm ">
            The first step of our protocol is either based on a Cap & Trade
            policy, or on the preservation and monetization of Natural Capital.
            Both provide structured financing to decarbonize communities from
            the bottom up.
          </p>
          <p className="mb-5 mt-5 text-sm ">
            Global Carbon Parks, our subsidiary, measures, certifies and
            converts carbon sequestrations into tradable and liquid commodities.
            Through private-public partnerships, protected areas are transformed
            into natural equity. Global Carbon Parks incentivizes cities,
            regions, and countries to preserve and monetize their natural
            assets, creating contracts at any necessary legislative level.
          </p>
          <p className="mb-5 mt-5 text-sm ">
            A retro-funding mechanism within Global Carbon Parks' contracts
            funds communities transition towards net-zero. Community
            Electricity's electrification and decarbonization protocol
            orchestrate communities retrofitting.
          </p>
          <p className="mb-5 mt-5 text-sm ">
            Through this feedback-loop financing mechanism, we empower cities,
            regions, and countries to fund clean local electrification and
            partake in global decarbonization.
          </p>
          <LogoGrid imagenes={latamLogos} />
        </div>
      ),

      desc: 'Virtual power plants\n  Knowledge Transfer, Policy Cnsulting, Education/ Worforce Development',
      img: '/img/cases/SantaMonica.png',
      bigSpecialImage: '/img/latambigimage.png',
      contractor: '/img/californiastrat.png',
      status: 'Contract signed',
    },
    {
      id: 6,
      place: 'Valencia,Spain',
      country: 'Prosumer Community',
      intro: '',
      bgModalImage: "bg-[url('/img/valenciamodalimage.png')]",
      mobilebgImage: "bg-[url('/img/cases/valenciaMobile.png')]",
      specialCharacteristics: false,
      text: (
        <div className="mt-5 text-communitygray md:mt-0 md:h-full">
          <p className="mb-5 mt-5 text-sm ">
            The vision of the Valencia Prosumer Community Project is to dispatch
            solar thermal technology, battery storage, and smart thermostats to
            electrify and connect a condominium of 37 houses. We will enable a
            transactive ecosystem, making every resident of the community a
            Prosumer able to generate, use and sell their clean and local
            electricity.
          </p>

          <LogoGrid imagenes={valenciaLogos} />
        </div>
      ),
      content: [
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
      desc: 'Virtual power plants\n  Condominium Electrification, Solar Thermal, Transactive Energy Network',
      img: '/img/cases/SantaMonica.png',
      contractor: '/img/usacontractor.png',
      status: 'Under Evaluation',
    },
  ]
  return (
    <Container>
      <div className=" my-10 flex justify-center md:my-0 md:justify-center">
        <h2 className="border border-purpleCommunity py-3 px-4 text-base font-medium uppercase lg:text-xl ">
          In Progress
        </h2>
      </div>
      <FadeinParagraph>
        {/*tarjetitas para desktop*/}
        <div className="mt-[70px] hidden flex-wrap justify-between lg:flex">
          {data.map((d) => (
            <PilotCardMobile
              mobilebgImage={d.mobilebgImage}
              place={d.place}
              country={d.country}
              desc={d.desc}
              showModal={() => onClickCard(d.id)}
              specialCharacteristics={d.specialCharacteristics}
              specialCharData={d.specialCharData}
            />
          ))}
        </div>
      </FadeinParagraph>
      {/*esto es para mobile porque te muestra de una en una dependiendo del estado*/}
      <div className="w-full lg:hidden">
        {data.map(
          (d) =>
            cardid === d.id && (
              <FadeinParagraph>
                <PilotCardMobile
                  mobilebgImage={d.mobilebgImage}
                  place={d.place}
                  country={d.country}
                  desc={d.desc}
                  showModal={() => onClickCard(d.id)}
                  specialCharacteristics={d.specialCharacteristics}
                  specialCharData={d.specialCharData}
                />
              </FadeinParagraph>
            )
        )}
      </div>
      <div className="flex w-full justify-between md:justify-center lg:hidden ">
        <img
          src="/img/cases/FlechaIzqueirda.png"
          alt="flecha izquierda"
          className="md:hidden"
          onClick={onClickLeftArrow}
        />
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
                key={m.id}
                place={m.place}
                intro={m.intro}
                text={m.text}
                close={() => setModal(false)}
                content={m.content}
                contractor={m.contractor}
                status={m.status}
                country={m.country}
                bgModalImage={m.bgModalImage}
                bigSpecialImage={m.bigSpecialImage}
              />
            )
        )}
    </Container>
  )
}

export default Pilots
