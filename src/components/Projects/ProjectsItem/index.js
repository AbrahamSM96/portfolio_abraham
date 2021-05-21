import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import styles from './ProjectsItem.module.css'
import { useAppContext } from '../../../context/state'

export default function ProjectsItem() {
  const { data, load, error } = useAppContext()
  const { projects = {} } = data
  const { projectsArray = [] } = projects
  return (
    <div className={styles._content}>
      {load ? (
        <SkeletonTheme color="#d3d3d3" highlightColor="#706f6f">
          <Skeleton
            count={6}
            width={240}
            height={250}
            style={{
              margin: '1rem .5rem'
            }}
          />
        </SkeletonTheme>
      ) : (
        <>
          {projectsArray.map(({ id, project, img, url }) => (
            <div key={id} className={styles._projectCard}>
              <a href={url}>
                <figure className={styles._projectCard_figure}>
                  <img
                    className={styles._projectCard_img}
                    src={img}
                    alt={project}
                  />
                </figure>
              </a>
              <h2 className={styles._projectCard_title}>{project}</h2>
            </div>
          ))}
        </>
      )}
    </div>
  )
}
