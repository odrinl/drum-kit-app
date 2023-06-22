function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  let keyC;
  e.type == 'click' ? keyC = e.target.getAttribute('data-key') : keyC = e.keyCode;
  const audio = document.querySelector(`audio[data-key="${keyC}"]`);
  const key = document.querySelector(`div[data-key="${keyC}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = document.querySelector('.keys');
keys.addEventListener('transitionend', removeTransition);
keys.addEventListener('click', playSound);
window.addEventListener('keydown', playSound);

// // Event handler for the keydown event
// const handleKeyDown = (event) => {
//     const dataKey = event.keyCode;
//     const audioElement = document.querySelector(`audio[data-key="${dataKey}"]`);
//     const keyElement = document.querySelector(`.key[data-key="${dataKey}"]`);
  
//     if (audioElement) {
//       audioElement.currentTime = 0;
//       audioElement.play();
//       keyElement.classList.add('playing');
//       audioElement.addEventListener('ended', () => keyElement.classList.remove('playing'));
//     }
//   };
  
//   // Attach the event listener to the parent element
//   keys.addEventListener('click', handleClick);

//   // Attach the event listener to the window for the keydown event
//   document.addEventListener('keydown', handleKeyDown);

//   document.addEventListener('keydown', function (e) {
//     if (e.key === 'Escape') {
//         // Close the modal
//         lightbox.classList.remove("lb-active");
//     }
// });

// window.addEventListener('keydown', function(event) {
//     const keyCode = event.target.dataset.key;
//     const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
//     const key = document.querySelector(`div[data-key="${keyCode}"]`);
    
//     if (audio) {
//       audio.currentTime = 0;
//       audio.play();
//       key.classList.add('playing');
//     }
//   });
  
//   const keys = document.querySelectorAll('.key');
//   keys.forEach(key => {
//     key.addEventListener('transitionend', function(event) {
//       this.classList.remove('playing');
//     });
//   });


// // Attach the click event listener to each key element
// keys.forEach(key => {
//   key.addEventListener('click', handleClick);
// });

// // let keys = document.querySelectorAll(".keys");



// // // Event handler for the click event
// // const handleClick = (event) => {
// //   const clickedItem = event.target;
// //   const dataKey = clickedItem.dataset.value
// //   // Handle the click event for each item
// //   document.getElementById(`${dataKey}`).play();
  
// // };