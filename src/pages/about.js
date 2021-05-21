import React from 'react'
import { motion } from 'framer-motion'
import AboutContainer from 'src/components/About/AboutContainer'
import Footer from 'src/components/Footer'
const content = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 }
  }
})
export default function about({ isFirstMount }) {
  return (
    <>
      <motion.section exit={{ opacity: 0 }}>
        <motion.div
          initial="initial"
          animate="animate"
          variants={content(isFirstMount)}
          className="space-y-12"
        >
          <AboutContainer />
          <Footer />
        </motion.div>
      </motion.section>
    </>
  )
}
