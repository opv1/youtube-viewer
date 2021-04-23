import { observer } from 'mobx-react-lite'
import store from 'store/index'
import Search from 'components/Search/Search'
import Block from 'components/Block/Block'
import Loader from 'components/Loader/Loader'
import List from 'components/List/List'
import styles from 'App.module.scss'

const App = observer(() => {
  return (
    <div className={styles.app}>
      <h1 className={styles.app__title}>
        <i className='fab fa-youtube' />
        YouTube Viewer
      </h1>
      <Search />
      <Block />
      {store.loading ? <Loader /> : <>{!store.message && <List />}</>}
    </div>
  )
})

export default App
