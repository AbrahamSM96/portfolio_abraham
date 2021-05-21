import React from 'react'
import { motion } from 'framer-motion'
import ProjectsContainer from 'src/components/Projects/ProjectsContainer'
const content = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 }
  }
})
export default function Projects({ isFirstMount }) {
  return (
    <>
      <motion.section exit={{ opacity: 0 }}>
        <motion.div
          initial="initial"
          animate="animate"
          variants={content(isFirstMount)}
          className="space-y-12"
        >
          <ProjectsContainer />
        </motion.div>
      </motion.section>
    </>
  )
}
