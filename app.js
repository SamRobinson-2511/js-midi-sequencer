let steps = 16;


function init(){
  WebMidi.enable(err => {
    if(err){
      console.log('there was an error', err)
    }
    console.table(WebMidi.outputs)
    WebMidi.outputs.forEach(output => {
      if(output.name == "IAC Driver Bus 1")
      window.output=output;
    })
  }, true)
  startLoop()
}

function stop(){
  console.log('stopped')
}

function startLoop(){
  let note = 'C4';
  let attack = 0.5; 
  let duration = 500;
  let channel = 1;
  let step = 1;
  setInterval(()=>{
    output.playNote(note, channel, {duration, attack})
    console.log(note, attack, duration, channel, step)
  }, 1000)
}