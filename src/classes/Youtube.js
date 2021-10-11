export default class Youtube {
  constructor (token) {
    this.token = token
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
  createNewLiveStream () {}
  createBroadcast () {}
  bindBroadCast () {}
  endBroadcast() {}
  async makeRequest(url, data) {
    try {
      const res = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
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
