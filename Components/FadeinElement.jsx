import React, { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FadeinParagraph = ({ children }) => {
  //usando variantes vmaos a decrile a framer motion que anime de inicia a fin desde initial a hidden, el problema es que stas animaciones se cargan
  // al inciar la pagina por eso debemos indicar cuando queremos que s ecargen con Framer motion
  const divVariants = {
    visible: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0 },
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
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={divVariants}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}

export default FadeinParagraph
