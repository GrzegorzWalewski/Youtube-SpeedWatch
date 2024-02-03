const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        const video = document.querySelector('video');
        if (video) {
            check(video);
            
        }
      }
    });
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
  

function check(video) {
    observer.disconnect();
    const ytTimerVideoTimerClass = "ytp-time-duration";
        const durationElement = document.getElementsByClassName("ytp-time-duration")[0];
        if (durationElement) {
            // Create new span element
            let newSpan = document.createElement("span");
            newSpan.id = "grzojda_time";
            newSpan.textContent = "";

            // Append new span element
            durationElement.insertAdjacentElement('afterend', newSpan);
            updateTimer(video.duration, video.playbackRate);

            video.addEventListener('ratechange', () => {
                updateTimer(video.duration, video.playbackRate);
            });
            video.addEventListener('durationchange', () => {
                updateTimer(video.duration, video.playbackRate);
            });
        }

}


function timeToStr(seconds) {
    const date = new Date(0);
    date.setSeconds(seconds);
    const timeString = date.toISOString().substr(11, 8);

    return timeString;
}

function updateTimer(duration, playbackRate) {
    if (playbackRate == 1) {
        document.getElementById('grzojda_time').textContent = "";
    } else if (!isNaN(duration)) {
        document.getElementById('grzojda_time').textContent = " [" + timeToStr(Math.round(duration / playbackRate)) + "]";
    }
}

