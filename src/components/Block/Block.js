import React from 'react'
import { observer } from 'mobx-react-lite'
import store from 'store/index'
import styles from 'components/Block/Block.module.scss'

const Block = observer(() => {
  return (
    <div className={styles.block}>
      <span className={styles.block__example}>
        Example ID channel: 'UCuvTObpdx__W966kbdIZ4_Q'
      </span>
      {store.message && (
        <span className={styles.block__message}>{store.message}</span>
      )}
      {!store.loading && !store.message && store.channelName && (
        <span className={styles.block__author}>
          Videos from {store.channelName}
        </span>
      )}
    </div>
  )
})

export default Block
