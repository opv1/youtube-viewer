import { makeAutoObservable } from 'mobx'

class Store {
  baseUrl =
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D'
  loading = false
  message = ''
  channelName = ''
  videos = []

  constructor() {
    makeAutoObservable(this)
  }

  async fetchVideos(channelId) {
    try {
      if (!channelId) throw new Error('Please enter channel ID')

      this.loading = true
      this.message = ''

      const data = await fetch(`${this.baseUrl}${channelId}`).then((res) =>
        res.json()
      )

      if (!data.items)
        throw new Error('Videos not found, please check the entered channel ID')

      this.channelName = data.feed.author
      this.videos = data.items
    } catch (err) {
      this.message = err.message
    } finally {
      this.loading = false
    }
  }
}

export default new Store()
