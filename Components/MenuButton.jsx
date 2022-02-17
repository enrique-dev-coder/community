import { motion } from 'framer-motion'

const MenuToggle = ({ isOpen, close }) => (
  <div id="nav-icon1" className={`${isOpen && 'open'}`} onClick={close}>
    <span></span>
    <span></span>
    <span></span>
  </div>
)

export default MenuToggle
