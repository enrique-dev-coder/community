import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper React components
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Pagination } from 'swiper'

const SlideList = ({ title, listElements }) => (
  <>
    <p className="font-bold">{title}</p>
    <ul className=" mx-auto w-11/12 list-disc">
      {listElements.map((li, i) => (
        <li key={i}>{li}</li>
      ))}
    </ul>
  </>
)

const Slide = ({ children }) => (
  //contenedor de las listas
  <div className=" mx-auto flex h-[375px] w-[300px] flex-col justify-center bg-purpleCommunity md:h-[300px] md:w-[600px]">
    <div
      className="mx-auto flex h-[80%] w-10/12 flex-col justify-center text-xs text-white md:text-sm  "
      style={{
        fontFamily: " 'Montserrat', sans-serif",
      }}
    >
      {children}
    </div>
  </div>
)

const Slider = () => {
  const SliderData = [
    {
      id: 1,
      slideListComponent: (
        <SlideList
          title="Drive Technology Innovation:"
          listElements={[
            ' Empower and direct agencies to explore and accelerate the adoption of new energy technologies.',
            'Encourage regulated utilities to pursue innovative energy technologies and offer customer choices.',
            '     Pilot emerging technologies in partnership with local agencies and utilities.',
            '   Directly support R&D through innovative Prosumer programs and develop local technologies and expertise.',
          ]}
        />
      ),
    },
    {
      id: 2,
      slideListComponent: (
        <SlideList
          title="Modernize legislation, policy, and incentives:"
          listElements={[
            ' Promote grid modernization initiatives.',
            'Implement performance incentives that reward utilities for meeting policy goals.',
            '     Foster competition between traditional utilities and third parties.',
            '  Include pilot programs in cost recovery and rate-making structures.',
          ]}
        />
      ),
    },
    {
      id: 3,
      slideListComponent: (
        <SlideList
          title="Provide funding and financing mechanisms for cleantech innovation:"
          listElements={[
            ' Encourage the adoption of financial incentives to drive the deployment of innovative energy technologies.',
            'Direct public agencies in the development of Green Bonds to finance sustainable projects.            ',
            '   Encourage State and Federal grants or programs to advance the deployment of new technologies.',
            ' Promote a Digital Marketplace for qualified private investors (crowdfunding). That may include community members.',
            'Monetizing natural capital to fund local retrofitting and all-electric new construction.',
          ]}
        />
      ),
    },
    {
      id: 4,
      slideListComponent: (
        <SlideList
          title="Prepare the workforce:"
          listElements={[
            ' Provide workforce development programs for Community College students and community members promoting energy efficiency, demand response, water conservation, renewable resources, etc.              ',
            'Partner with the industry to identify skill gaps and workforce availability.           ',
          ]}
        />
      ),
    },
    {
      id: 5,
      slideListComponent: (
        <SlideList
          title="Update communications networks and data systems:"
          listElements={[
            ' Encourage public agencies to access infrastructure efficiencies.              ',
            "Develop policies and programs to facilitate the state's transition to a 'smart state.'",
            'Meet the broadband needs of underserved communities.',
            'Incorporate cybersecurity into infrastructure upgrades.',
            'Coordinate roles and information sharing across stakeholders.',
          ]}
        />
      ),
    },
    {
      id: 6,
      slideListComponent: (
        <SlideList
          title="Engage and Educate Community Members:            "
          listElements={[
            ' Direct agencies and local organizations to develop community outreach activities needed to support the deployment of innovative energy technologies.              ',
            'Deploy Education and Workforce development programs.',
          ]}
        />
      ),
    },
  ]
  return (
    <div className="mt-[100px]">
      <div className=" mt-[150px] flex justify-center md:my-0 md:justify-center">
        <h2 className="border border-purpleCommunity py-3 px-4 text-base font-medium uppercase lg:text-xl ">
          ClimateTech Innovation Zone Benefits
        </h2>
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {SliderData.map((d) => (
          <SwiperSlide key={d.id}>
            <Slide>{d.slideListComponent}</Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
