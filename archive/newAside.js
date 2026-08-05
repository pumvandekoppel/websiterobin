let dividers = document.getElementsByClassName("divider")
let asides = document.getElementsByTagName("aside")
let scrollSection = document.getElementsByTagName("main")[0]

let options = {
    root: scrollSection,
    rootMargin: "-65px",
    threshold: 1.0,
  };
  
const onIntersect = (entries, observer) => {
  entries.forEach((entry) => console.log(entry))
  // asides[0].style.backgroundColor = "yellow"

}
  
let observer = new IntersectionObserver(onIntersect, options);

const targetEl = dividers[0]

observer.observe(targetEl)

// for (let i = 0; i < dividers.length; i++) {
//     // voor elke horizontale lijn
//     console.log(dividers[i])
//     target = dividers[i]
//     observer.observe(target)
//   }
