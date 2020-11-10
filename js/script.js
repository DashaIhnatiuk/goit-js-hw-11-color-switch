const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  let startBtn = null;
  let stopBtn = null;
  const buttons = document.querySelectorAll('button');
  for(const item of buttons){
      if(item.getAttribute('data-action')==='start'){
        startBtn = item;
      }else if(item.getAttribute('data-action')==='stop'){
        stopBtn = item;
      }
  }
  const body = document.querySelector('body');
  console.log(startBtn);
  console.log(stopBtn);

  if(startBtn!=null){
      startBtn.addEventListener('click', startTimer);
  }

  if(stopBtn!=null){
    stopBtn.addEventListener('click', stopTimer);
}

let timerId = null;

  function startTimer(){
    console.log("Start");
    timerId = setInterval(changeColor, 1000);
    startBtn.disabled = true;
  }

  function stopTimer(){
    console.log("Stop");
    clearInterval(timerId);
    startBtn.disabled = false;
}

function changeColor(){
    console.log("Timer");
    body.setAttribute("style", "background-color:" + colors[randomIntegerFromInterval(0, colors.length)]);;
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
//   
