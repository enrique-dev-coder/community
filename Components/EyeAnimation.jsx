import Lottie from 'react-lottie'
import animationData from '../public/static/eye.json'

const EyeAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <div>
      <Lottie option={defaultOptions} height={200} width={200} />
    </div>
  )
}

export default EyeAnimation
