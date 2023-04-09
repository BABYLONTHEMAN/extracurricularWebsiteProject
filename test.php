<?php ?>
<div class="parent">
  <p>Hover over me</p>
  <p class="child">First child<a href="/about"> .</a></p>
  <p class="child">Second child</p>
</div>
<style>
body{
    background-color: powderblue;
}
.parent .child {
  display: none;
}

.parent:hover .child {
  display: block;
}

</style>



<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Language Switcher</title>
  </head>
  <body>
    <div id="content">
      <p id="greeting">Hello!</p>
      <p id="message">Welcome to my website.</p>
    </div>
    <button id="lang-switcher">Switch Language</button>
    <script>
      const language = {
        en: {
          greeting: "Hello!",
          message: "Welcome to my website."
        },
        de: {
          greeting: "Hallo!",
          message: "Willkommen auf meiner Website."
        }
      };
      let currentLang = "en";
      const switchButton = document.getElementById("lang-switcher");
      switchButton.addEventListener("click", function() {
        currentLang = currentLang === "en" ? "de" : "en";
        updateContent();
      });
      function updateContent() {
        const greeting = document.getElementById("greeting");
        const message = document.getElementById("message");
        greeting.textContent = language[currentLang].greeting;
        message.textContent = language[currentLang].message;
      }
    </script>
  </body>
</html>

<?php ?>