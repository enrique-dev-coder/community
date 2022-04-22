import React from 'react'
import Fadeinelement from '../FadeinElement'
const Media = () => {
  const media = [
    {
      img: '/img/flipcards/cision.png ',
      desc: 'Los Angeles Disadvantaged Community to Host The Largest Advanced Energy Community Built on Blockchain.',
      link: 'https://www.prweb.com/releases/los_angeles_disadvantaged_community_to_host_the_largest_advanced_energy_community_built_on_blockchain/prweb17128919.htm',
    },
    {
      img: '/img/flipcards/microgrid.png ',
      desc: 'California Demonstration Brings Prosumers into Energy Markets.',
      link: 'https://microgridknowledge.com/prosumer-electricity-markets-california/',
    },
    {
      img: '/img/flipcards/Energy.png',
      desc: '‘Feasible community-scale decarbonisation’: LA neighbourhood gets blockchain-backed energy solution.',
      link: 'https://www.energy-storage.news/feasible-community-scale-decarbonisation-la-neighbourhood-gets-blockchain-backed-energy-solution/',
    },
    {
      img: '/img/flipcards/yahoo-logo-2.png',
      desc: 'Los Angeles Disadvantaged Community to Host The Largest Advanced Energy Community Built on Blockchain.',
      link: 'https://finance.yahoo.com/news/los-angeles-disadvantaged-community-host-130000331.html',
    },
    {
      img: '/img/flipcards/medium.png',
      desc: 'Community Electricity and Energy Web Announce Partnership to Bring Decentralized Tech to Disadvantaged Communities Across the Americas.',
      link: 'https://medium.com/energy-web-insights/community-electricity-and-energy-web-announce-partnership-to-bring-decentralized-tech-to-2f105150a3db',
    },
    {
      img: '/img/flipcards/verge.png',
      desc: 'Biden climate plan would spend $2 trillion in bid to boost economy, 40% to be allocated to Disadvantaged Communities.',
      link: 'https://www.theverge.com/2020/7/14/21324575/joe-biden-jobs-climate-change-plan-energy-elections',
    },
    {
      img: '/img/flipcards/sei.png',
      desc: 'Los Angeles hosts world’s largest blockchain-enabled advanced energy community.',
      link: 'https://www.smart-energy.com/industry-sectors/smart-grid/los-angeles-hosts-worlds-largest-blockchain-enabled-advanced-energy-community/',
    },
    {
      img: '/img/flipcards/vox.png',
      desc: 'Biden can’t move the needle on environmental justice without these 2 things.',
      link: 'https://www.vox.com/22151188/biden-transition-epa-pollution-environmental-justice-data-anti-racist-policy',
    },
    {
      img: '/img/flipcards/coindesk.png',
      desc: 'California Agency Backs Green-Energy Pilot Using RSK’s Bitcoin Smart Contracts.',
      link: 'https://www.coindesk.com/business/2020/08/07/california-agency-backs-green-energy-pilot-using-rsks-bitcoin-smart-contracts/',
    },
  ]
  return (
    <div className=" bg-purpleCommunityLight pt-20 pb-1">
      <div
        className="container relative mx-auto mb-20 w-4/5 max-w-6xl "
        id="media"
      >
        <Fadeinelement>
          <h2 className="mx-auto mb-10 w-full border-2  border-purpleCommunity py-2 text-center text-xl uppercase text-communitygray lg:w-1/12">
            Media
          </h2>
        </Fadeinelement>
        {/*flipcards section*/}
        <div className="grid grid-cols-4 gap-4 lg:grid-cols-12">
          {media.map((m, i) => (
            <div
              key={i}
              className=" col-span-2 flex cursor-pointer flex-col justify-center border border-purpleCommunityLight shadow-sm lg:col-span-4"
            >
              <div className="flip-card">
                <div className="inner">
                  <div className="front">
                    <img
                      src={m.img}
                      alt={m.desc}
                      className="w-[200px] grayscale"
                    />
                  </div>
                  <div className="back flex flex-col justify-around">
                    <p
                      className="  lg:text-md text-center  text-sm text-black"
                      style={{
                        fontFamily: " 'Montserrat', sans-serif",
                      }}
                    >
                      {m.desc} <br />
                      <div className="mx-auto mt-4 w-3/5 cursor-pointer border border-purpleCommunity uppercase">
                        <a
                          href={m.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read more
                        </a>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              {/* <img src={m.img} alt={m.desc} className="mx-auto  w-[200px]" />*/}
            </div>
          ))}
        </div>
        <p className="mt-10 cursor-pointer text-center text-lg  font-medium uppercase text-purpleCommunity underline">
          Learn more
        </p>
      </div>
    </div>
  )
}

export default Media
