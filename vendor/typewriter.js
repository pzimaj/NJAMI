let title = document.getElementById("title");

let typewriter = new Typewriter(title, {
    loop: true
});

typewriter.typeString("Welcome to Njami!")
    .pauseFor(4500)
    .deleteAll()
    .start();