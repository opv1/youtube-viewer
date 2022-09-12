import React from 'react'
import styles from 'components/Video/Video.module.scss'

const Video = ({ video }) => {
  return (
    <div className={styles.video}>
      <div className={styles.video__image}>
        <a href={video.link} target='_blank' rel='noreferrer'>
          <img
            src={`https://i4.ytimg.com/vi/${
              video.guid.split(':')[2]
            }/mqdefault.jpg`}
            alt='img'
          />
        </a>
      </div>
      <div className={styles.video__footer}>
        <p>{video.title}</p>
      </div>
    </div>
  )
}

export default Video
