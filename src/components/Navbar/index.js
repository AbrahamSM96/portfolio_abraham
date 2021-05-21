import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import styles from './Navbar.module.css'
import { useAppContext } from '../../context/state'

export default function Navbar() {
  const router = useRouter()
  const refHamburguer = useRef(null)
  const refContainerLinks = useRef(null)
  const refAnchor = useRef(null)
  const { data, load, error } = useAppContext()
  const { hero = {} } = data
  const { url } = hero

  const toggleHamburguer = () => {
    refHamburguer.current.classList.toggle(styles._active_hamburguer)
    refContainerLinks.current.classList.toggle(styles._active_container)
  }
  const toggleCloseMenu = () => {
    refContainerLinks.current.getElementsByTagName('a')
    console.log(refContainerLinks.current.getElementsByTagName('a'))
    refHamburguer.current.classList.remove(styles._active_hamburguer)
    refContainerLinks.current.classList.remove(styles._active_container)
  }
  useEffect(() => {}, [])
  const homePath = router.pathname === '/' ? styles._linksPath : ''
  const skillPath = router.pathname === '/skills' ? styles._linksPath : ''
  const projectPath = router.pathname === '/projects' ? styles._linksPath : ''
  const aboutPath = router.pathname === '/about' ? styles._linksPath : ''

  return (
    <>
      <nav className={styles._nav}>
        <div>
          <figure className={styles._logo_figure}>
            {load ? (
              <SkeletonTheme color="#d3d3d3" highlightColor="#706f6f">
                <Skeleton height={30} width={30} />
              </SkeletonTheme>
            ) : (
              <Link href="/" as={`${process.env.ASSET_PREFIX}/`}>
                <img src={url} alt="Logo" className={styles._logo_img} />
              </Link>
            )}
          </figure>
        </div>
        <div
          className={styles._container_links}
          ref={refContainerLinks}
          onClick={toggleCloseMenu}
        >
          <Link href="/" as={`${process.env.ASSET_PREFIX}/`}>
            <a className={homePath} ref={refAnchor}>
              Home
            </a>
          </Link>
          <Link href="/skills" as={`${process.env.ASSET_PREFIX}/skills`}>
            <a className={skillPath} ref={refAnchor}>
              Skills
            </a>
          </Link>
          <Link href="/projects" as={`${process.env.ASSET_PREFIX}/projects`}>
            <a className={projectPath} ref={refAnchor}>
              Projects
            </a>
          </Link>
          <Link href="/about" as={`${process.env.ASSET_PREFIX}/about`}>
            <a className={aboutPath} ref={refAnchor}>
              About
            </a>
          </Link>
        </div>
        <div
          className={styles._hamburguer}
          onClick={() => toggleHamburguer()}
          ref={refHamburguer}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  )
}
