export default class Youtube {
  constructor (url) {
    var win =   window.open(`${url}/login/youtube`, "windowname1", 'width=800, height=600');
    var pollTimer = window.setInterval(function() {
        try {
          console.log(window.location);
                if(window.location.hash && window.location.hash.substring(1) !== 'about:blank' ) {
                  console.log(win);
                  window.clearInterval(pollTimer);
                    var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
                    this.token = hash;
                    console.log(this.token)
                    win.close();
                } else {
                    // No hash found
                    console.log('No Hash')
                }


        } catch(e) {
          alert(e.message)
        }
    }, 500);
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
