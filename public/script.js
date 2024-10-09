setTimeout(function() {
    document.getElementById("loader-container").style.display = "none"; // Hide loader
    document.getElementById("content").style.display = "block"; // Show content
  }, 3000);
function countdown(seconds) {
    function updateDisplay(remainingTime) {
      const countdownNumber = document.getElementById("countdown-number");
      countdownNumber.textContent = remainingTime;
      if (remainingTime <= 5 && remainingTime >= 1) {
        countdownNumber.style.color = "red";
      } else {
        countdownNumber.style.color = "green";  
      }
    }

    function count() {
      if (seconds >= 0) {
        updateDisplay(seconds);
        seconds--;
        setTimeout(count, 1000); // Call count() after 1 second
      } else {
        document.getElementById("countdown-display").innerHTML = "Countdown is over!";
      }
    }

    count(); // Start the countdown
  }

  // Call the countdown function with 30 seconds
  countdown(33);
