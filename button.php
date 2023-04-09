<?php ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Language Switcher</title>
    <style>
      .container {
        display: flex;
        justify-content: flex-start;
      }
      .button {
        order: 1;
      }
      .button.right {
        order: 2;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <button class="button" id="en-button">English</button>
      <button class="button right" id="de-button">Deutsch</button>
    </div>
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
      const enButton = document.getElementById("en-button");
      const deButton = document.getElementById("de-button");
      enButton.addEventListener("click", function() {
        currentLang = "en";
        updateContent();
      });
      deButton.addEventListener("click", function() {
        currentLang = "de";
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