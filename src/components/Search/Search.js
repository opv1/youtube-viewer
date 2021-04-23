import React, { useRef } from 'react'
import store from 'store/index'
import styles from 'components/Search/Search.module.scss'

const Search = () => {
  const inputRef = useRef('')

  const handlerSubmit = (event) => {
    event.preventDefault()
    store.fetchVideos(inputRef.current.value)
  }

  return (
    <form className={styles.search} onSubmit={handlerSubmit}>
      <input
        className={styles.search__input}
        ref={inputRef}
        type='text'
        placeholder='Enter favorite channel ID...'
      />
      <button className={styles.search__button} type='submit'>
        Get videos
      </button>
    </form>
  )
}

export default Search
