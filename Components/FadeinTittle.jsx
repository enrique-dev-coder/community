import React, { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FadeinTitle = ({ children }) => {
  //usando variantes vmaos a decrile a framer motion que anime de inicia a fin desde initial a hidden, el problema es que stas animaciones se cargan
  // al inciar la pagina por eso debemos indicar cuando queremos que s ecargen con Framer motion
  const titleVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  }
  const controls = useAnimation()
  const [ref, inView] = useInView()

  //la idea es que con el useEffect cargemos cuando queremos que se use el hook , el ref es el que enlaza al elemento y el inview es para detectar cuando este a la vista
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <motion.h2
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={titleVariants}
      className="border-2 px-14  py-4 text-center text-xl uppercase lg:w-[40%]  lg:text-2xl xl:w-[35%]"
      style={{ border: '2px solid #9885f7' }}
    >
      {children}
    </motion.h2>
  )
}

export default FadeinTitle
