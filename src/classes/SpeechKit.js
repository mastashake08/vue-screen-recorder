export default class SpeechKit {

  constructor () {
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    let SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList
    let language = window.navigator.userLanguage || window.navigator.language
    this.resultList = {}
    this.recognition = new SpeechRecognition()
    this.recognition.lang = language
    this.grammarList = new SpeechGrammarList()
    this.synth = window.speechSynthesis
    this.recognition.continuous = true;
    this.recognition.interimResults = true;

    this.recognition.onstart = function() {
      console.log('Starting')
     }
     let ctx = this
    this.recognition.onresult = function(event) {
      console.log(event.results[0].isFinal)
      if(event.results[0].isFinal)
      ctx.resultList = event.results
    }
    this.recognition.onerror = function(event) {
      console.log(event)
     }
    this.recognition.onspeechend = function() {
      console.log('Speech Done', this.resultList)
     }
   }

  listen () {
    this.recognition.start()
  }

  stopListen () {
    this.recognition.stop()
  }

  speak (text) {
    let speech = new SpeechSynthesisUtterance(text)
    this.synth.speak(speech)
  }

  returnList () {
    return this.resultList
  }

  getText () {
    let text = ''
    for(let i = 0; i < this.resultList.length; ++i) {
      text += this.resultList[i][0].transcript + '\n'
    }
    let transcript = new Blob([text], { type: "text/plain"})
    return transcript

  }
}
