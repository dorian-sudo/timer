function updateClock() {
    const locale = 'fr-FR';
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Europe/Paris' };
    document.getElementById('clock').innerText = new Intl.DateTimeFormat(locale, options).format(new Date());
  }
  
  setInterval(updateClock, 1000);
  updateClock();
  
  function formatText(command) {
    document.execCommand(command, false, null);
  }
  
  function changeFontSize(delta) {
    var editableDiv = document.getElementById('editableDiv');
    var currentSize = window.getComputedStyle(editableDiv, null).getPropertyValue('font-size');
    var newSize = parseFloat(currentSize) + delta;
    editableDiv.style.fontSize = newSize + 'px';
  }
    
  document.getElementById('editableDiv').addEventListener('blur', function() {
    if (!this.textContent.trim()) {
      this.innerHTML = '';
    }
  });
  
  document.querySelectorAll('.editor-buttons button').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('editableDiv').focus();
    });
  });

  function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
  
  function toggleFormatButtons() {
    var formatButtons = document.getElementById('formatButtons');
    var toggleButton = document.querySelector('.toggle-buttons');
    if (formatButtons.style.display === 'none') {
      formatButtons.style.display = 'flex';
      toggleButton.classList.remove('hide');
    } else {
      formatButtons.style.display = 'none';
      toggleButton.classList.add('hide');
    }
  }
  document.getElementById('editableDiv').addEventListener('blur', function() {
    if (!this.textContent.trim() && !document.fullscreenElement) {
      this.innerHTML = '';
    }
  });
  
  document.getElementById('editableDiv').addEventListener('focus', function() {
    if (!this.textContent.trim() && document.fullscreenElement) {
      this.setAttribute('placeholder', '');
    }
  });
  


  function getDomain(url) {
    const domain = new URL(url).hostname;
    const parts = domain.split('.');
    return parts.slice(0, -1).join('.');
  }
  
  const url = "https://www.exemple.com";
  const domainWithoutExtension = getDomain(url);
  console.log(domainWithoutExtension);
  