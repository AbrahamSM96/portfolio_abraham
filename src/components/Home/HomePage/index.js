import { useRouter } from 'next/router'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
//import { IoIosArrowForward } from 'react-icons/io'
import { useAppContext } from '../../../context/state'
import ArrowAnimation from '../../ArrowAnimation'
import styles from './HomePage.module.css'

export default function HomePage() {
  const router = useRouter()
  const { data, load, error } = useAppContext()
  const { hero = {} } = data
  const { title, subtitle, contentTitle, url } = hero

  // const SIZE = '25px'
  // Siguiente
  //               <IoIosArrowForward
  //                 size={SIZE}
  //                 style={{ position: 'relative', top: '0.50em' }}
  //               />
  return (
    <>
      <div className={styles._container}>
        <div className={styles._content}>
          {load ? (
            <SkeletonTheme color="#d3d3d3" highlightColor="#706f6f">
              <div className={styles._content} style={{ margin: '0' }}>
                <Skeleton
                  count={2}
                  width={340}
                  height={30}
                  style={{
                    margin: '1rem',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                />
                <Skeleton
                  width={340}
                  height={70}
                  style={{ marginTop: '2rem' }}
                />
                <Skeleton
                  width={150}
                  height={150}
                  style={{ marginTop: '2rem' }}
                />
              </div>
            </SkeletonTheme>
          ) : (
            <>
              <h1 className={styles._h1}>{title}</h1>
              <h2>{subtitle}</h2>
              <p className="">{contentTitle}</p>
              {load ? (
                <SkeletonTheme color="#d3d3d3" highlightColor="#706f6f">
                  <Skeleton
                    width={150}
                    height={150}
                    style={{ marginTop: '2rem' }}
                  />
                </SkeletonTheme>
              ) : (
                <figure className={styles._figure}>
                  <img src={url} alt={title} className={styles._img} />
                </figure>
              )}
            </>
          )}

          <ArrowAnimation route={() => router.push('/skills')} />
        </div>
      </div>
    </>
  )
}
