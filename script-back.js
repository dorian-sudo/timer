document.addEventListener('DOMContentLoaded', (event) => {
    const titles = ["⩇⩇:⩇⩇", "⌨"];
    let current = 0;

    // Fonction pour faire clignoter le titre
    function blinkTitle() {
      document.title = titles[current];
      current = (current + 1) % titles.length;
    }

    // Clignoter toutes les secondes
    setInterval(blinkTitle, 500);
  });