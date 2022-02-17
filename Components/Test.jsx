import { motion, useCycle } from 'framer-motion'

const MyComponent = () => {
  const [x, cycleX] = useCycle(0, 50, 100)
  //aqui usamos este hook de framer motion para ciclar el cuadro en x moverlo 0 40 y 100
  // el primer parametro tiene los parametros el segundo lo cicla

  return (
    <motion.div
      className=" h-[200px] w-[200px] bg-purpleCommunity"
      animate={{ x: x }}
      onTap={() => cycleX()}
    />
  )
}

export default MyComponent
