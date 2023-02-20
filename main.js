let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #c43854;">Desarrollo sitios web y productos de cosmética natural</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
