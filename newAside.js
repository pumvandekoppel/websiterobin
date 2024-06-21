let dividers = document.getElementsByClassName("divider")
let asides = document.getElementsByTagName("aside")
  
let callback = (entries, observer) => {
    entries.forEach((entry) => {
        
        // Each entry describes an intersection change for one observed
        // target element:
        //   entry.boundingClientRect
        //   entry.intersectionRatio
        //   entry.intersectionRect
        //   entry.isIntersecting
        //   entry.rootBounds
        //   entry.target
        //   entry.time

        if (entry.isIntersecting) {
            console.log("ja!")
            asides[i].style.marginBottom = "calc(68px + (100vh - 6vw))"
            asides[i+1].style.marginTop = "0"
        } else {
          }
    });
};

let options = {
    root: null,
    rootMargin: "-65px",
    threshold: 1.0,
  };

let observer = new IntersectionObserver(callback, options);

for (let i = 0; i < dividers.length; i++) {
    // voor elke horizontale lijn
    console.log('trst')
    console.log(dividers[i])
    let target = dividers[i]
    observer.observe(dividers[i]);
  }
