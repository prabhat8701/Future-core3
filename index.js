document.addEventListener("mousemove", function(e) {
    const pointer = document.getElementById("custom-pointer");
    pointer.style.left = e.pageX - 35 + "px"; /* Adjust for the size of the pointer */
    pointer.style.top = e.pageY - 35 + "px"; /* Adjust for the size of the pointer */
  });

  document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.h1');

    const options = {
      root: null,
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    elements.forEach(element => {
      observer.observe(element);
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.card-holder');

    const options = {
      root: null,
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    elements.forEach(element => {
      observer.observe(element);
    });
});
  
document.addEventListener("DOMContentLoaded", function() {
  const speakers1Elements = document.querySelectorAll('.speakers-1 .speaker-info');
  const speakers2Elements = document.querySelectorAll('.speakers-2 .speaker-info');

  const options = {
    root: null,
    threshold: 0.1
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const speakerInfoElements = entry.target.querySelectorAll('.speaker-info');
        
        if (entry.target.classList.contains('speakers-1')) {
          // Animate speakers-1 in reverse order
          speakerInfoElements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add('animate');
            }, (speakerInfoElements.length - index - 1) * 200); // Reverse order
          });
        } else if (entry.target.classList.contains('speakers-2')) {
          // Animate speakers-2 in normal order
          speakerInfoElements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add('animate');
            }, index * 200); // Normal order
          });
        }
        
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, options);

  document.querySelectorAll('.speakers-1, .speakers-2').forEach(element => {
    observer.observe(element);
  });
});

  