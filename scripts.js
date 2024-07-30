function toggleMobileMenu() {
  document.getElementById("menu").classList.toggle("active");
}

function runAnimation() {
  var lineDrawing = anime({
      targets: '#brandmark-animation path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeOutSine',
      duration: 2000,
      delay: function (el, i) { return i * 100; },
      loop: false,
      begin: function (anim) {
          document.querySelector('#brandmark-animation path').setAttribute("stroke", "#FFFFFF");
          document.querySelector('#brandmark-animation path').setAttribute("fill", "none");
      },
      complete: function (anim) {
          anime({
              targets: '#brandmark-animation path',
              fill: '#FFFFFF',
              easing: 'easeInOutSine',
              duration: 2000,
          });
      },
      autoplay: true,
  });
}

$(window).on("load", function() {
  runAnimation();
  setTimeout(function() {
      $(".loader-wrapper").fadeOut("slow");
  }, 3000); // loader animation duration
});

function readmoreToggle() {
  var ellipses = document.getElementById("ellipses");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readmoreButton");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    ellipses.style.display = "none";
    moreText.style.display = "inline";
    setTimeout(() => {
      moreText.style.opacity = 1;
    }, 10); // Small delay to trigger transition
    btnText.innerHTML = "Read less";
    btnText.classList.add("toggled");
  } else {
    ellipses.style.display = "inline";
    moreText.style.opacity = 0;
    setTimeout(() => {
      moreText.style.display = "none";
    }, 300); // toggle timeout transition duration
    btnText.innerHTML = "Read more";
    btnText.classList.remove("toggled");
  }
}


// // script.js
// const slidingSection = document.getElementById('slidingSection');

// // Function to check if an element is in view
// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//   );
// }

// // Function to handle scroll event
// function handleScroll() {
//   if (isInViewport(slidingSection)) {
//     slidingSection.classList.add('show');
//   }
// }

// // Event listener for scroll event
// window.addEventListener('scroll', handleScroll);




















































//   Title blurb animation----vv


//   class TextScramble {
//     constructor(el) {
//       this.el = el
//       this.chars = '!<>-_\\/[]{}—=+*^?#________'
//       this.update = this.update.bind(this)
//     }
//     setText(newText) {
//       const oldText = this.el.innerText
//       const length = Math.max(oldText.length, newText.length)
//       const promise = new Promise((resolve) => this.resolve = resolve)
//       this.queue = []
//       for (let i = 0; i < length; i++) {
//         const from = oldText[i] || ''
//         const to = newText[i] || ''
//         const start = Math.floor(Math.random() * 40)
//         const end = start + Math.floor(Math.random() * 40)
//         this.queue.push({ from, to, start, end })
//       }
//       cancelAnimationFrame(this.frameRequest)
//       this.frame = 0
//       this.update()
//       return promise
//     }
//     update() {
//       let output = ''
//       let complete = 0
//       for (let i = 0, n = this.queue.length; i < n; i++) {
//         let { from, to, start, end, char } = this.queue[i]
//         if (this.frame >= end) {
//           complete++
//           output += to
//         } else if (this.frame >= start) {
//           if (!char || Math.random() < 0.28) {
//             char = this.randomChar()
//             this.queue[i].char = char
//           }
//           output += `<span class="dud">${char}</span>`
//         } else {
//           output += from
//         }
//       }
//       this.el.innerHTML = output
//       if (complete === this.queue.length) {
//         this.resolve()
//       } else {
//         this.frameRequest = requestAnimationFrame(this.update)
//         this.frame++
//       }
//     }
//     randomChar() {
//       return this.chars[Math.floor(Math.random() * this.chars.length)]
//     }
//   }
  
  
//   const phrases = [
//   //   'Hi!',
//   //   'My name is Elliott',
//   //   'I specialize in... ',
//     'Mobile-First Design',
//     'Quality Assurance Testing',
//     'SEO Best Practices',
//     'UX/UI Methodologies',
//     'Agile Development'
//   ]
  
//   const el = document.querySelector('.text')
//   const fx = new TextScramble(el)
  
//   let counter = 0
//   const next = () => {
//     fx.setText(phrases[counter]).then(() => {
//       setTimeout(next, 1000)
//     })
//     counter = (counter + 1) % phrases.length
//   }
  
//   next()

//   const tween = KUTE.fromTo(
//     '#blob1', 
//     {path: '#blob1'},
//     {path: '#blob2'},
    
//     {repeat: 999, duration: 3000, yoyo: true }
// )
// tween.start()

