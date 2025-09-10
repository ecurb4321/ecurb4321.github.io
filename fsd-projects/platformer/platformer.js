$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(500, 620, 290, 20);
    createPlatform(800, 500, 600, 10, "red");
    createPlatform(500, 390, 290, 20, "blue");
    createPlatform(1100, 390, 300, 20, "pink");
    createPlatform(800, 260, 300, 20, "orange");
    // TODO 3 - Create Collectables
    createCollectable("database", 600, 200, 0.5, 0);
    createCollectable("diamond", 950, 200, 0.5, 0);
    createCollectable("steve", 1250, 300, 0.5, 0);

    // TODO 4 - Create Cannons
    createCannon("right", 510, 2000);
    createCannon("top", 1050, 1500);
    createCannon("left", 300, 2000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
