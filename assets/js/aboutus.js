document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const increment = target / 1000;
      
      const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
          counter.innerText = target;
          clearInterval(interval);
        } else {
          counter.innerText = Math.round(count);
        }
      },10);
    });
  });
  