// continuous sending data with interval of 2000 or 2sec.
const intervalId = setInterval(()=>{
    console.log('Sending analytics...');

},2000) 

document.getElementById('stop-analytics-btn').addEventListener('click', ()=>{
    clearInterval(intervalId);
  });
