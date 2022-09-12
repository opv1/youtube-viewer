import React from 'react'
import { observer } from 'mobx-react-lite'
import store from 'store/index'
import Video from 'components/Video/Video'
import styles from 'components/List/List.module.scss'

const List = observer(() => {
  return (
    <ul className={styles.list}>
      {store.videos.length !== 0
        ? store.videos.map((video) => (
            <Video key={video.pubDate} video={video} />
          ))
        : null}
    </ul>
  )
})

export default List
