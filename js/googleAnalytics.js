// Sprawdzenie, czy użytkownik już zaakceptował
var cookieAccepted = localStorage.getItem('cookieAccepted');
    
if (!cookieAccepted) {
  // Wyświetlanie banera
  document.getElementById('cookie-banner').style.display = 'block';

  // Obsługa kliknięcia w przycisk "Zgadzam się"
  document.getElementById('accept-button').addEventListener('click', function() {
    // Zapisanie informacji o akceptacji w pamięci lokalnej
    localStorage.setItem('cookieAccepted', true);

    // Ukrycie banera
    document.getElementById('cookie-banner').style.display = 'none';

    // Wczytanie skryptów Google Analytics i Google AdSense
    loadAnalyticsScript();
  });
} else {
  // Jeśli użytkownik już zaakceptował, wczytaj skrypty bez wyświetlania banera
  loadAnalyticsScript();
}

// Wczytanie skryptu Google Analytics
function loadAnalyticsScript() {
  var analyticsScript = document.createElement('script');
  analyticsScript.async = true;
  analyticsScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-93FXQNJDZY';
  document.head.appendChild(analyticsScript);

  analyticsScript.onload = function() {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-93FXQNJDZY');
  };
}