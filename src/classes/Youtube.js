export default class Youtube {
  constructor (token) {
    this.token = token
    this.broadcasts = []
  }
  gup(url, name) {
  name = name.replace(/[/,"\\").replace(/[\]]/,"\\");
  var regexS = "[\\#&]"+name+"=([^&#]*)";
            var regex = new RegExp( regexS );
            var results = regex.exec( url );
            if( results == null )
                return "";
            else
                return results[1];
        }
  async createNewLiveStream () {
    try {
      const res = await this.makeRequest('https://youtube.googleapis.com/youtube/v3/liveBroadcasts?part=id','POST',{
      "snippet": {
        "scheduledStartTime": Date.now(),
        "title": "Getting Started With Screen Recorder"
      },
      "contentDetails": {
        "enableDvr": true,
        "enableAutoStart": true,
        "enableAutoStop": true
      },
      "status": {
        "privacyStatus": "unlisted",
      }
    })
    console.log(res)
    } catch (e) {
      console.log(e)
    }
  }
  async getBroadcasts () {
    try {
      const res = await fetch('https://www.googleapis.com/youtube/v3/liveBroadcasts?broadcastStatus=all', {
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      })
      const results = await res.json()
      this.broadcasts = results.items
      console.log(this.broadcasts)
      return results
    } catch (e) {
      console.log(e)
    }
  }
  createBroadcast () {}
  bindBroadCast () {}
  endBroadcast() {}
  async makeRequest(url, method, data) {
    try {
      const res = await fetch(url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache',
        headers: {
          Authorization: `token ${this.token}`
        },
        body: JSON.stringify(data)
      })
      const ret = await res.json()
      return ret
    } catch (e) {
      alert('There was an error with the request! Please try agin later.')
    }

  }
}
