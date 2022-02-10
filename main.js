// Selectors
const container = document.querySelector('.container');
const text = document.querySelector('#text');

// ---Breathing---
// 7500 millisecond in total time. This is changeable
// breatheTime and holdBreathTime will not be hard coded.
// breatheTime 1500ms x 2 = 3000 or 3sec
// holdBreathTime 1.5sec
// Call breathe animation

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdBreathTime = totalTime / 5;

breathingAnimation();

// ---Breathing Animation---
// Two classes grow (expand) and shrink the container
// Need to remove and add the grow/shrink classes
// setTimeOut takes two parameters (function, timeout: waiting before executing function)
// After breathing (timeout = 3sec), instruction 'Hold'
// After holding your breath, another settimeout to breathe out
// While breathing out, shrink the container with shrink class
// setinterval takes 2 paramaters (function,interval(to run the function) )

function breathingAnimation () {
  text.innerHTML = 'Breathe in...'
  container.className = 'container grow'

  setTimeout(() => {
    text.innerText = 'Hold it'

    setTimeout(() => {
      text.innerText = 'Breathe out...'
      container.className = 'container shrink'
    }, holdBreathTime);

  }, breatheTime);
};

setInterval(breathingAnimation, totalTime);
