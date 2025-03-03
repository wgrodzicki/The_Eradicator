// Game script

// Wait until the page loads
window.addEventListener("load", function() {

    /** @type {HTMLCanvasElement} **/ // Suggest canvas methods

    // Handle canvas
    const canvas = document.getElementById("game-canvas");
    const context = canvas.getContext("2d");
    canvas.width = 1392;
    canvas.height = 1000;

    // INITIAL GAME SCREEN

    // Display game title
    let title = document.getElementById("title");
    context.drawImage(title, 0, 0, canvas.width, canvas.height);
    context.textAlign = "center";

    // Black &...
    context.fillStyle = "black";
    context.font = "120px Luminari, Papyrus, serif";
    context.fillText("The Eradicator", canvas.width / 2, canvas.height / 2.5);
    // ...& white for shade effect
    context.fillStyle = "white";
    context.font = "120px Luminari, Papyrus, serif";
    context.fillText("The Eradicator", canvas.width / 2 + 3, canvas.height / 2.5 + 3);

    // Black &...
    context.fillStyle = "black";
    context.font = "60px Luminari, Papyrus, serif";
    context.fillText("created by", canvas.width / 2, canvas.height / 2);
    // ...& white for shade effect
    context.fillStyle = "white";
    context.font = "60px Luminari, Papyrus, serif";
    context.fillText("created by", canvas.width / 2 + 3, canvas.height / 2 + 3);

    // Black &...
    context.fillStyle = "black";
    context.font = "60px Luminari, Papyrus, serif";
    context.fillText("Wojciech Grodzicki", canvas.width / 2, canvas.height / 1.65);
    // ...& white for shade effect
    context.fillStyle = "white";
    context.font = "60px Luminari, Papyrus, serif";
    context.fillText("Wojciech Grodzicki", canvas.width / 2 + 3, canvas.height / 1.65 + 3);

    // Display game border
    let border = document.getElementById("border-game");
    context.drawImage(border, 0, 0, canvas.width, canvas.height);

    // STARTING THE GAME

    // Variable to control game starting
    let gameStarted = false;

    // Check if user clicks the starting button
    let buttonStartContainer = document.getElementById("start-button-container");
    let buttonStart = document.getElementById("start-button"); // Starting button not clicked
    let buttonStartClicked = document.getElementById("start-button-clicked"); // Starting button clicked
    let buttonStartText = document.getElementById("start-button-text");
    buttonStartContainer.addEventListener("click", function() {

        // Check if game started
        if (gameStarted == false) {

            // Animate button
            buttonStart.style.display = "none";
            buttonStartClicked.style.display = "initial";
            buttonStartText.style.marginTop = "-1%";

            // Lock the starting button until game over
            gameStarted = true;

            // RESIZING THE SCREEN

            // Get the main 3 columns
            let leftColumn = document.getElementById("left-column");
            let centralColumn = document.getElementById("central-column");
            let rightColumn = document.getElementById("right-column");

            // Resize the started game screen depending on the device
            if (navigator.maxTouchPoints <= 0) {
                leftColumn.className = "d-none";
                centralColumn.className = "col-xl-8 col-lg-8 col-md-8 col-sm-8";
                rightColumn.className = "d-none"; 
            }
            else {
                leftColumn.className = "col-xl-2 col-lg-2 col-md-2 col-sm-2";
                centralColumn.className = "col-xl-8 col-lg-8 col-md-8 col-sm-8";
                rightColumn.className = "col-xl-2 col-lg-2 col-md-2 col-sm-2 d-none d-sm-block";
            }

            // MOBILE USER INPUT & PLAYER CONTROLS

            // Put all buttons from the game screen into an array
            let sideColumnElements = [];
            sideColumnElements[0] = document.getElementById("row-start-button");
            sideColumnElements[1] = document.getElementById("row-back-button");
            sideColumnElements[2] = document.getElementById("form-score-button");
            sideColumnElements[3] = document.getElementById("row-view-button");
            sideColumnElements[4] = document.getElementById("row-logout-button");
            sideColumnElements[5] = document.getElementById("row-delete-button");
            sideColumnElements[6] = document.getElementById("row-instruction");
            sideColumnElements[7] = document.getElementById("row-credits-button");

            // Prepare an array for default display settings of the buttons
            let sideColumnElementDisplay = [];

            // Mobile controls
            let mobileUp = false;
            let mobileLeft = false;
            let mobileRight = false;
            let mobileAttack = false;

            // // Check if new game started and the device supports touch events
            if (gameStarted == true && navigator.maxTouchPoints > 0) {

                // Display a message if the device is oriented vertically
                if (window.innerWidth < window.innerHeight) {
                    alert("Rotate your device.");
                }

                // Save default display settings of the buttons and then hide them
                for (let i = 0; i < sideColumnElements.length; i++) {
                    if (sideColumnElements[i] != null) {
                        sideColumnElementDisplay[i] = sideColumnElements[i].style.display;
                        sideColumnElements[i].style.display = "none";
                    }
                }

                // Set the appropriate display of mobile buttons
                document.getElementById("row-mobile-up").style.display = "flex";
                document.getElementById("row-mobile-lateral").style.display = "flex";
                document.getElementById("row-mobile-attack").style.display = "flex";

                // Get clicked and unclicked mobile buttons
                let buttonMobileUp = document.getElementById("arrow-up-button");
                let buttonMobileUpClicked = document.getElementById("arrow-up-button-clicked");

                let buttonMobileLeft = document.getElementById("arrow-left-button");
                let buttonMobileLeftClicked = document.getElementById("arrow-left-button-clicked");

                let buttonMobileRight = document.getElementById("arrow-right-button");
                let buttonMobileRightClicked = document.getElementById("arrow-right-button-clicked");

                let buttonMobileAttack = document.getElementById("attack-button");
                let buttonMobileAttackClicked = document.getElementById("attack-button-clicked");

                // Handle user input (touching mobile buttons)
                buttonMobileUp.addEventListener("touchstart", function(event) {
                    event.preventDefault(); // Prevent the default browser behaviour to enable the mobile controls
                    buttonMobileUpClicked.style.display = "flex";
                    mobileUp = true;
                });
                buttonMobileUp.addEventListener("touchend", function(event) {
                    event.preventDefault();
                    buttonMobileUpClicked.style.display = "none";
                    mobileUp = false;
                });

                buttonMobileLeft.addEventListener("touchstart", function(event) {
                    event.preventDefault();
                    buttonMobileLeftClicked.style.display = "flex";
                    mobileLeft = true;
                });
                buttonMobileLeft.addEventListener("touchend", function(event) {
                    event.preventDefault();
                    buttonMobileLeftClicked.style.display = "none";
                    mobileLeft = false;
                });

                buttonMobileRight.addEventListener("touchstart", function(event) {
                    event.preventDefault();
                    buttonMobileRightClicked.style.display = "flex";
                    mobileRight = true;
                });
                buttonMobileRight.addEventListener("touchend", function(event) {
                    event.preventDefault();
                    buttonMobileRightClicked.style.display = "none";
                    mobileRight = false;
                });

                buttonMobileAttack.addEventListener("touchstart", function(event) {
                    event.preventDefault();
                    buttonMobileAttackClicked.style.display = "flex";
                    mobileAttack = true;
                });
                buttonMobileAttack.addEventListener("touchend", function(event) {
                    event.preventDefault();
                    buttonMobileAttackClicked.style.display = "none";
                    mobileAttack = false;
                });
            }

            // GENERAL SETTINGS & MODIFIERS

            // Put layers from index.html into an array
            const backgroundLayers = [];
            backgroundLayers[0] = document.getElementById("layer-0");
            backgroundLayers[1] = document.getElementById("layer-1");
            backgroundLayers[2] = document.getElementById("layer-2");
            backgroundLayers[3] = document.getElementById("layer-3");
            backgroundLayers[4] = document.getElementById("layer-4");
            backgroundLayers[5] = document.getElementById("layer-5");
            backgroundLayers[6] = document.getElementById("layer-6");
            backgroundLayers[7] = document.getElementById("layer-7");
            backgroundLayers[8] = document.getElementById("layer-8");
            backgroundLayers[9] = document.getElementById("layer-9");
            backgroundLayers[10] = document.getElementById("layer-10");
            const layers = [];

            // Variable to control general game speed
            let gameSpeedMod = 150;

            // Variable to control background movement speed
            let backgroundSpeedMod = 10;

            // Background music
            let music = new Audio();
            music.src = "/static/background/music.mp3";
            music.volume = 0.1;

            // Variables to control player movement speed
            let playerSpeedMod = 400;
            let playerJumpSpeedMod = 2800;

            // Player attacks trackers
            let attackGround = false;
            let attackJump = false;

            // Variables to control dragon movement speed
            let dragonSpeedMod = 60;
            let dragonVerticalMod = 70;

            // Variables to time dragon spawning
            let dragonTimer = 0;
            let dragonInterval = 2500; // Dragon spawning frequency

            // Array for active dragons
            let dragons = [];

            // Dragon wings sound
            let dragonWingSound = new Audio();
            dragonWingSound.src = "/static/enemies/wings.wav";
            dragonWingSound.volume = 0.15;

            // Array for triggered explosions
            let explosions = [];

            // Variables to control the display of level messages
            let levelTimer = 1000;
            let levelTimerDefault = 1000;
            let levelOneDisplayed = false;
            let levelTwoDisplayed = false;
            let levelThreeDisplayed = false;
            let levelFourDisplayed = false;
            let levelFiveDisplayed = false;

            // Game state trackers
            let gameOver = false;
            let score = 0;
            document.getElementById("score-value").value = "0"; // Update the score form
            let level = 0;
            let lastTime = 0; // Variable to keep track of game frames duration

            // BACKGROUND

            // Class for parallax background layers
            class Background {
                constructor(gameWidth, gameHeight, image, speed) {
                    // Size and placement
                    this.gameWidth = gameWidth;
                    this.gameHeight = gameHeight;
                    this.width = 1392;
                    this.height = 1000;
                    this.x = 0;
                    this.y = 0;
                    // Get the layer file from index.html
                    this.image = image;
                    // Layer speed
                    this.speed = speed;
                }
                // Displays the layer
                draw(context) {
                    // Draw the image twice, one next to the other
                    context.drawImage(this.image, this.x, this.y, this.width, this.height);
                    // Place the 2nd image immediately behind the 1st one
                    context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
                }
                // Animates the layer
                update(deltaTime) {
                    // Check if the player is attacking
                    if (attackGround == false) {
                        // Animate the background if not
                        this.x -= this.speed * (deltaTime / 1000);
                        if (this.x <= -this.width) {
                            this.x = 0;
                        }
                    }
                }
            }

            // USER INPUT

            // Class to handle user input
            class InputHandler {
                constructor() {
                    // Array to store information about currently pressed keys
                    this.keys = [];

                    // Listen for the user pressing keys
                    window.addEventListener("keydown", event => {

                        // Check if any key is pressed and whether it's not in the array yet
                        if ((event.key == " " ||
                            event.key == "ArrowUp" ||
                            event.key == "ArrowLeft" ||
                            event.key == "ArrowRight")
                            && this.keys.indexOf(event.key) == -1) {
                            // Add the currently pressed key to the array if so
                            this.keys.push(event.key);
                        }
                    });

                    // Listen for the user releasing keys
                    window.addEventListener("keyup", event => {

                        // Check if any key is released
                        if (event.key == " " ||
                            event.key == "ArrowUp" ||
                            event.key == "ArrowLeft" ||
                            event.key == "ArrowRight") {
                            // Remove the currently released key from the array if so
                            this.keys.splice(this.keys.indexOf(event.key), 1);
                        }
                    });
                }
            }

            // PLAYER CHARACTER

            // Class for the player character
            class Player {
                constructor(gameWidth, gameHeight) {
                    // Size and placement
                    this.gameWidth = gameWidth;
                    this.gameHeight = gameHeight;
                    this.width = 256;
                    this.height = 128;
                    this.x = -40; // Put the player as close to the right border as possible
                    this.y = this.gameHeight - (this.height + 120); // Put the player on the grass
                    // Get the sprite image from index.html
                    this.image = document.getElementById("player");
                    // Get the spell sound effect
                    this.spellSound = new Audio();
                    this.spellSound.src = "/static/player/spell.mp3";
                    // Get the death sound effect
                    this.deathSound = new Audio();
                    this.deathSound.src = "/static/player/death.mp3";
                    this.deathSound.volume = 0.5;
                    // Get step sounds
                    this.stepSound = new Audio();
                    this.stepSound.src = "/static/player/steps.wav";
                    this.stepSoundFast = new Audio();
                    this.stepSoundFast.src = "/static/player/steps_fast.wav";
                    this.stepSoundSlow = new Audio();
                    this.stepSoundSlow.src = "/static/player/steps_slow.wav";
                    // Get jump sound
                    this.jumpSound = new Audio();
                    this.jumpSound.src = "/static/player/jump.mp3";
                    this.jumpSound.volume = 0.8;
                    // Properites to navigate through the sprite sheet
                    this.frameX = 0;
                    this.frameY = 0;
                    this.maxFrame = 7; // How many horizontal character frames there are on the sprite sheet
                    this.fps = 12; // How quickly to switch between character frames on the sprite sheet horizontally
                    this.frameInterval = 1000 / this.fps; // How long should a single character frame on the sprite sheet last
                    this.frameTimer = 0; // Counter to keep track of game frames (from 0 to frameInterval)
                    // Set player's horizontal speed
                    this.speed = 0;
                    // Properites to handle jumping
                    this.jumpSpeed = 0; // Vertical speed
                    this.gravity = 7000; // Gravitational force to pull the player back to the ground
                }
                // Displays the player
                draw(context) {
                    // Draw the image, using frameX and frameY to crop it / switch between character frames on the sprite sheet
                    context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
                }
                // Animates the player
                update(userInput, deltaTime, dragons, mobileUp, mobileLeft, mobileRight, mobileAttack) {

                    // COLLISSION DETECTION

                    // Iterate over all active dragons
                    dragons.forEach(dragon => {
                        // Dragon's hit box
                        let dragonFront = dragon.x + (dragon.width / 8); // Dragon's hit box front
                        let dragonRear = dragon.x + (dragon.width - (dragon.width /5)); // Dragon's hit box rear
                        let dragonTop = dragon.y + (dragon.height / 2); // Dragon's hit box top
                        let dragonBottom = dragon.y + (dragon.height - (this.height / 8)); // Dragon's hit box bottom
                        // Player's hit box
                        let playerFront = this.x + (this.width - (this.width / 2.1)); // Player's hit box front
                        let playerRear = this.x + (this.width / 3.5); // Player's hit box rear
                        let playerTop = this.y + (this.height / 10); // Player's hit box top
                        let playerBottom = this.y + this.height; // Player's hit box bottom

                        // Player hit
                        if (dragonFront > playerFront ||
                            dragonRear < playerRear ||
                            dragonBottom < playerTop ||
                            dragonTop > playerBottom
                            ) {
                            // No collission
                        }
                        else {
                            // Collission otherwise
                            gameOver = true;
                        }

                        // Player attack
                        if (attackGround == true || attackJump == true) {
                            let groundAttackTop = this.y + this.height / 8; // Top range of the ground attack
                            let groundAttackBottom = this.y + this.height / 2; // Bottom range of the ground attack
                            let groundAttackRange = this.x + 2 * (this.width / 2.4); // Horizontal range of the ground attack
                            let jumpAttackTop = this.y; // Top range of the jump attack
                            let jumpAttackBottom = this.y + 0.75 * this.height; // Bottom range of the jump attack
                            let jumpAttackRange = this.x + this.width / 2.5 + this.width / 3.2; // Horizontal range of the jump attack

                            // Check if player attacks from the ground
                            if (attackGround == true) {

                                // Check if dragon's in range
                                if (dragonBottom > groundAttackTop && dragonTop < groundAttackBottom &&
                                    (dragon.x < groundAttackRange && dragon.x > playerFront)) {
                                    // Kill the dragon and trigger explosion
                                    explosions.push(new Explosion(dragon.x, dragon.y));
                                    dragon.killed = true;
                                }
                            }

                            // Check if player attacks while jumping
                            if (attackJump == true) {

                                // Check if dragon's in range
                                if (dragonBottom > jumpAttackTop && dragonTop < jumpAttackBottom && (dragon.x < jumpAttackRange && dragon.x > playerFront)) {
                                    // Kill the dragon and trigger explosion
                                    explosions.push(new Explosion(dragon.x, dragon.y));
                                    dragon.killed = true;
                                }
                            }

                            // Increase score if dragon killed
                            if (dragon.killed == true) {
                                score++;
                                document.getElementById("score-value").value = score;
                            }
                        }
                    });

                    // PLAYER ANIMATION

                    // Check if current character frame should finish
                    if (this.frameTimer > this.frameInterval) {

                        // Check if it's the last character frame (horizontally) on the sprite sheet
                        if (this.frameX >= this.maxFrame) {
                            // Switch to the first character frame on the sprite sheet if so
                            this.frameX = 0;

                            // Check if the player is attacking
                            if (attackGround == true) {
                                // Finish the attack if so
                                attackGround = false;
                                // Stop the spell sound effect
                                this.spellSound.pause();
                            }
                            if (attackJump == true) {
                                // Finish the attack if so
                                attackJump = false;
                                // Stop the spell sound effect
                                this.spellSound.pause();
                            }
                        }
                        else {
                            // Otherwise, keep switching character frames on the sprite sheet
                            this.frameX++;
                        }
                        // Reset the game frame counter
                        this.frameTimer = 0;
                    }
                    else {
                        // Otherwise keep increasing the game frame counter
                        this.frameTimer += deltaTime;
                    }

                    // PLAYER CONTROLS

                    // Check if user pressed the right arrow key or the right mobile button
                    if ((userInput.keys.indexOf("ArrowRight") != -1 || mobileRight == true) && attackGround == false) {
                        // Increase horizontal speed if so
                        this.speed = playerSpeedMod * (deltaTime / 1000);
                    }
                    // Check if user pressed the left arrow key or the left mobile button
                    else if ((userInput.keys.indexOf("ArrowLeft") != -1 || mobileLeft == true) && attackGround == false) {
                        // Decrease horizontal speed if so
                        this.speed = playerSpeedMod * -(deltaTime / 1000);
                    }
                    // Check if user pressed the spacebar key or the round mobile button while on the ground
                    else if ((userInput.keys.indexOf(" ") != -1 || mobileAttack == true) && this.onGround() == true) {
                        // Initiate the appropriate attack
                        attackGround = true;
                    }
                    else {
                        // Otherwise, don't move
                        this.speed = 0;
                    }

                    // The two conditions below have to be independent from those above to allow simultaneous jumping and moving horizontally
                    // Check if user pressed the up arrow key or the up mobile button while on the ground
                    if ((userInput.keys.indexOf("ArrowUp") != -1 || mobileUp == true) && this.onGround() == true) {
                        // Jump if so
                        this.jumpSpeed -= playerJumpSpeedMod;
                        // Play jump sound
                        this.jumpSound.play();
                    }
                    // Check if user pressed the spacebar key or the up mobile button while jumping
                    if ((userInput.keys.indexOf(" ") != -1 || mobileAttack == true) && this.onGround() == false) {
                        // Initiate the appropriate attack
                        attackJump = true;
                    }

                    // HORIZONTAL MOVEMENT

                    // Keep moving horizontally if not attacking on the ground
                    if (attackGround == false) {
                        this.x += this.speed;
                    }

                    // Make sure player doesn't go beyond canvas borders horizontally
                    if (this.x < -40) { // Left border
                        this.x = -40;
                    }
                    else if (this.x > this.gameWidth - this.width + 100) { // Right border
                        this.x = this.gameWidth - this.width + 100;
                    }

                    // VERTICAL MOVEMENT

                    // Keep moving vertically
                    this.y += this.jumpSpeed * (deltaTime / 1000);

                    // Make sure player doesn't go beyond canvas borders vertically
                    if (this.y <= 0) {
                        this.y = 20;
                        this.jumpSpeed = 0;
                    }

                    // Make sure player comes back to the ground if jumping
                    if (this.onGround() == false) {
                        // Stop playing step sounds
                        this.stepSound.pause();
                        this.stepSoundFast.pause();
                        this.stepSoundSlow.pause();
                        this.jumpSpeed += this.gravity * (deltaTime / 1000); // Keep pulling the player back down
                        this.maxFrame = 5; // Set the number of character frames for jumping on the sprite sheer
                        this.frameY = 1; // Switch to the row with jumping animation on the sprite sheet

                        // Check if the player is attacking while jumping
                        if (attackJump == true) {
                            // Play the spell sound effect
                            this.spellSound.play();
                            // Switch to attack character frames on the sprite sheet if so
                            this.maxFrame = 7;
                            this.frameY = 3;
                        }
                    }
                    else {
                        // Otherwise switch to horizontal movement character frames on the sprite sheet
                        this.jumpSpeed = 0;
                        this.maxFrame = 7;
                        this.frameY = 0;

                        // Chceck if player's on the ground
                        if (this.onGround() == true) {
                            // Play default step sounds
                            this.stepSound.play();

                            // Play fast step sounds and stop all others if moving to the right
                            if (userInput.keys.indexOf("ArrowRight") != -1 || mobileRight == true) {
                                this.stepSound.pause();
                                this.stepSoundSlow.pause();
                                this.stepSoundFast.play();
                            }
                            else if (userInput.keys.indexOf("ArrowRight") == -1 || mobileRight == false) {
                                this.stepSoundFast.pause();
                            }

                            // Play slow step sounds and stop all others if moving to the left
                            if (userInput.keys.indexOf("ArrowLeft") != -1 || mobileLeft == true) {
                                this.stepSound.pause();
                                this.stepSoundFast.pause();
                                this.stepSoundSlow.play();
                            }
                            else if (userInput.keys.indexOf("ArrowLeft") == -1 || mobileLeft == false) {
                                this.stepSoundSlow.pause();
                            }
                        }

                        // Check if the player is attacking on the ground
                        if (attackGround == true) {
                            // Stop playing step sounds
                            this.stepSound.pause();this.y
                            this.stepSoundFast.pause();
                            this.stepSoundSlow.pause();
                            // Play the spell sound effect
                            this.spellSound.play();
                            // Switch to attack character frames on the sprite sheet if so
                            this.maxFrame = 7;
                            this.frameY = 2;
                        }
                    }

                    // Make sure player lands on the ground after a jump
                    if (this.y > this.gameHeight - (this.height + 120)) {
                        this.y = this.gameHeight - (this.height + 120);
                    }
                }
                // Determines if player's on the ground
                onGround() {
                    // Check if player's jumping
                    if (this.y >= this.gameHeight - (this.height + 120)) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }

            // DRAGONS

            // Class for the dragons
            class Dragon {
                constructor(gameWidth, gameHeight) {
                    // Size and placement
                    this.gameWidth = gameWidth;
                    this.gameHeight = gameHeight;
                    this.width = 216;
                    this.height = 150;
                    this.x = this.gameWidth;
                    this.y = this.gameHeight - (this.height + 120) - (Math.random() * 300); // Randomize vertical position
                    // Get the sprite image from index.html
                    this.image = document.getElementById("dragon");
                    // Get the roar sound
                    this.roarSound = new Audio();
                    this.roarSound.src = "/static/enemies/roar.wav";
                    this.roarSound.volume = 0.3;
                    this.roarRandom = Math.random(); // Roar sound randomizer
                    this.roarPlayed = false; // Raor sound tracker
                    // Properites to navigate through the sprite sheet
                    this.frameX = 0;
                    this.frameY = 0;
                    this.maxFrame = 2; // How many horizontal character frames there are on the sprite sheet
                    this.fps = 10; // How quickly to switch between character frames on the sprite sheet horizontally
                    this.frameInterval = 1000 / this.fps; // How long should a single character frame on the sprite sheet last
                    this.frameTimer = 0; // Counter to keep track of game frames (from 0 to frameInterval)
                    // Set dragon's horizontal speed
                    this.speed = Math.random() + 5; //Randomize speed
                    // Variables to control dragon's vertical movement
                    this.angle = Math.random() * 2; // Starting wave amplitude
                    this.angleSpeed = Math.random() * 0.2; // Allow for randomized wavy movement
                    this.amplitude = Math.random() * 5; // Amplitude magnifier
                    // Trackers for dragons to be deleted
                    this.markedForDeletion = false;
                    this.killed = false;
                }
                // Displays the dragon
                draw(context) {
                    // Draw the image, using frameX and frameY to crop it / switch between character frames on the sprite sheet
                    context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
                }
                // Animates the dragon
                update(deltaTime) {
                    // Check if current character frame should finish
                    if (this.frameTimer > this.frameInterval) {

                        // Check if it's the last character frame (horizontally) on the sprite sheet
                        if (this.frameX >= this.maxFrame) {
                            // Switch to the first character frame on the sprite sheet if so
                            this.frameX = 0;
                        }
                        else {
                            // Otherwise, keep switching character frames on the sprite sheet
                            this.frameX++;
                        }
                        // Reset the game frame counter
                        this.frameTimer = 0;
                    }
                    else {
                        // Otherwise keep increasing the game frame counter
                        this.frameTimer += deltaTime;
                    }

                    // Move dragon from right to left
                    this.x -= this.speed * dragonSpeedMod * (deltaTime / 1000);

                    // Check if dragon's off screen
                    if (this.x < 0 - this.width) {
                        // Mark it for deletion if so
                        this.markedForDeletion = true;
                    }

                    // DIFFICULTY

                    // Level 1
                    if (score >= 5) {
                        level = 1;
                        dragonInterval = 400; // Increase dragon spawning frequency
                    }
                    // Level 2
                    if (score >= 10) {
                        level = 2;
                        this.speed = Math.random() * 5 + 5; // Increase speed
                    }
                    // Level 3
                    if (score >= 20) {
                        level = 3;
                        this.y += this.amplitude * Math.sin(this.angle) * dragonVerticalMod * (deltaTime / 1000); // Keep changing vertical position by an amplitude (down)
                        this.angle += this.angleSpeed; // Make the movement wavy (up and down)
                    }
                    // Level 4
                    if (score >= 30) {
                        level = 4;
                        this.speed = Math.random() * 5 + 7.5; // Increase speed
                    }
                    // Level 5
                    if (score >= 50) {
                        level = 5;
                        this.speed = Math.random() * 5 + 10; // Increase speed
                        this.amplitude = Math.random() * 15; // Increase wavy movement amplitude
                    }

                    // Make sure the dragon doesn't fall through the ground
                    if (this.y >= this.gameHeight - (this.height + 120)) {
                        this.y = this.gameHeight - (this.height + 120);
                    }

                    // Play dragon screams randomly
                    if (this.roarPlayed == false && (this.roarRandom < 0.2) && (this.x > this.gameWidth - (this.gameWidth / 3))) {
                        this.roarSound.play();
                        this.roarPlayed == true;
                    }
                }
            }

            // EXPLOSIONS

            // Class for explosions
            class Explosion {
                constructor(x, y) { // Gets coordinates of the dragon
                    // Size and placement
                    this.imageWidth = 96;
                    this.imageHeight = 88;
                    this.width = this.imageWidth * 2;
                    this.height = this.imageHeight * 2;
                    this.x = x + 12;
                    this.y = y - 13;
                    // Get the sprite image from index.html
                    this.image = document.getElementById("explosion");
                    // Get the sound effect from index.html
                    this.sound = new Audio();
                    this.sound.src = "/static/explosion/explosion.mp3";
                    this.sound.volume = 0.3;
                    // Properites to navigate through the sprite sheet
                    this.frame = 0;
                    this.maxFrame = 4; // How many horizontal character frames there are on the sprite sheet
                    this.fps = 10; // How quickly to switch between character frames on the sprite sheet horizontally
                    this.frameInterval = 1000 / this.fps; // How long should a single character frame on the sprite sheet last
                    this.frameTimer = 0; // Counter to keep track of game frames (from 0 to frameInterval)
                    // Tracker for explosions to be deleted
                    this.markedForDeletion = false;
                }
                // Displays the explosion
                draw(context) {
                    context.drawImage(this.image, this.imageWidth * this.frame, 0, this.imageWidth, this.imageHeight, this.x, this.y, this.width, this.height);
                }
                // Animates the explosion
                update(deltaTime) {
                    // Play the sound effect
                    this.sound.play();

                    // Check if current character frame should finish
                    if (this.frameTimer >= this.frameInterval) {

                        // Check if it's the last character frame (horizontally) on the sprite sheet
                        if (this.frame >= this.maxFrame) {
                            this.markedForDeletion = true;
                        }
                        else {
                            // Otherwise, keep switching character frames on the sprite sheet
                            this.frame++;
                        }
                        // Reset the game frame counter
                        this.frameTimer = 0;
                    }
                    else {
                        // Otherwise keep increasing the game frame counter
                        this.frameTimer += deltaTime;
                    }
                }
            }

            // HANDLING FUNCTIONS
            
            // Handles explosions
            function triggerExplosions(deltaTime) {
                // Iterate over all active explosions
                explosions.forEach(explosion => {
                    explosion.draw(context); // Display explosions
                    explosion.update(deltaTime) // Animate explosions
                });

                // Update the explosions array by filtering out explosions marked for deletion
                explosions = explosions.filter(explosion => {

                    // Keep only explosions not marked for deletion
                    if (explosion.markedForDeletion == false) {
                        return explosion;
                    }
                    else {
                        return null;
                    }
                });
            }

            // Handles dragons
            function handleDragons(deltaTime) {
                // Variable to randomize dragon spawning
                let randomDragonInterval = Math.random() * 100000 + 100;

                // Check if enough time has passed to spawn a new dragon
                if (dragonTimer > (dragonInterval + randomDragonInterval)) {
                    // Spawn a new dragon if so and add it to the active dragons array
                    dragons.push(new Dragon(canvas.width, canvas.height));
                    // Reset the timer
                    dragonTimer = 0;
                }
                else {
                    // Keep tracking game time otherwise
                    dragonTimer += deltaTime;
                }

                // Iterate over all active dragons
                dragons.forEach(dragon => {
                    dragon.draw(context); // Display dragons
                    dragon.update(deltaTime); // Animate dragons
                });

                // Update the dragons array by filtering out dragons marked for deletion
                dragons = dragons.filter(dragon => {

                    // Keep only dragons not marked for deletion
                    if (dragon.markedForDeletion == false && dragon.killed == false) {
                        return dragon;
                    }
                    else {
                        return null;
                    }
                });

                // Play dragon wings sound if there are dragons on the screen
                if (dragons.length != 0) {
                    dragonWingSound.play();
                }
            }

            // Displays game status
            function displayStatus(context, deltaTime) {
                // Current score
                context.textAlign = "center";
                // Black &...
                context.fillStyle = "black";
                context.font = "40px Luminari, Papyrus, serif";
                context.fillText("Score: " + score, 110, 70);
                // ...& white for shade effect
                context.fillStyle = "white";
                context.font = "40px Luminari, Papyrus, serif";
                context.fillText("Score: " + score, 114, 74);

                // Display level message according to current level
                if (levelTimer > 0 && gameOver == false) {
                    switch (level) {
                        case 0:
                            break;
                        case 1:
                            // Check if the timer is still ticking for this level
                            if (levelOneDisplayed == false) {
                                // Black &...
                                context.fillStyle = "black";
                                context.font = "70px Luminari, Papyrus, serif";
                                context.fillText("Level 1", canvas.width / 2, canvas.height / 2);
                                // ...& white for shade effect
                                context.fillStyle = "white";
                                context.font = "70px Luminari, Papyrus, serif";
                                context.fillText("Level 1", canvas.width / 2 + 3, canvas.height / 2 + 3);

                                // Keep decreasing the timer
                                levelTimer -= deltaTime;

                                // Check if timer's out
                                if (levelTimer <= 0) {
                                    levelOneDisplayed = true; // Mark level info as displayed
                                    levelTimer = levelTimerDefault; // Reset the timer
                                }
                            }
                            break;
                        case 2:
                            // Check if the timer is still ticking for this level
                            if (levelTwoDisplayed == false) {
                                // Black &...
                                context.fillStyle = "black";
                                context.font = "70px Luminari, Papyrus, serif";
                                context.fillText("Level 2", canvas.width / 2, canvas.height / 2);
                                // ...& white for shade effect
                                context.fillStyle = "white";
                                context.font = "70px Luminari, Papyrus, serif";
                                context.fillText("Level 2", canvas.width / 2 + 3, canvas.height / 2 + 3);

                                // Keep decreasing the timer
                                levelTimer -= deltaTime;

                                // Check if timer's out
                                if (levelTimer <= 0) {
                                    levelTwoDisplayed = true; // Mark level info as displayed
                                    levelTimer = levelTimerDefault; // Reset the timer
                                }
                            }
                            break;
                        case 3:
                            // Check if the timer is still ticking for this level
                            if (levelThreeDisplayed == false) {
                                // Black &...
                                context.fillStyle = "black";
                                context.font = "70px Luminari, Papyrus, serif";
                                context.fillText("Level 3", canvas.width / 2, canvas.height / 2);
                                // ...& white for shade effect
                                context.fillStyle = "white";
                                context.font = "70px Luminari, Papyrus, serif";
                                context.fillText("Level 3", canvas.width / 2 + 3, canvas.height / 2 + 3);

                                // Keep decreasing the timer
                                levelTimer -= deltaTime;

                                // Check if timer's out
                                if (levelTimer <= 0) {
                                    levelThreeDisplayed = true; // Mark level info as displayed
                                    levelTimer = levelTimerDefault; // Reset the timer
                                }
                            }
                            break;
                        case 4:
                            // Check if the timer is still ticking for this level
                            if (levelFourDisplayed == false) {
                                // Black &...
                                context.fillStyle = "black";
                                context.font = "70px Luminari, Papyrus, serif";
                                context.fillText("Level 4", canvas.width / 2, canvas.height / 2);
                                // ...& white for shade effect
                                context.fillStyle = "white";
                                context.font = "70px Luminari, Papyrus, serif";
                                context.fillText("Level 4", canvas.width / 2 + 3, canvas.height / 2 + 3);

                                // Keep decreasing the timer
                                levelTimer -= deltaTime;

                                // Check if timer's out
                                if (levelTimer <= 0) {
                                    levelFourDisplayed = true; // Mark level info as displayed
                                    levelTimer = levelTimerDefault; // Reset the timer
                                }
                            }
                            break;
                        case 5:
                            // Check if the timer is still ticking for this level
                            if (levelFiveDisplayed == false) {
                                // Black &...
                                context.fillStyle = "black";
                                context.font = "70px Luminari, Papyrus, serif";
                                context.fillText("Level 5", canvas.width / 2, canvas.height / 2);
                                // ...& white for shade effect
                                context.fillStyle = "white";
                                context.font = "70px Luminari, Papyrus, serif";
                                context.fillText("Level 5", canvas.width / 2 + 3, canvas.height / 2 + 3);

                                // Keep decreasing the timer
                                levelTimer -= deltaTime;

                                // Check if timer's out
                                if (levelTimer <= 0) {
                                    levelFiveDisplayed = true; // Mark level info as displayed
                                    levelTimer = levelTimerDefault; // Reset the timer
                                }
                            }
                            break;
                    }
                }

                // Game over message
                if (gameOver == true) {
                    // Black &...t
                    context.fillStyle = "black";
                    context.font = "80px Luminari, Papyrus, serif";
                    context.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);
                    // ...& white for shade effect
                    context.fillStyle = "white";
                    context.font = "80px Luminari, Papyrus, serif";
                    context.fillText("GAME OVER", canvas.width / 2 + 3, canvas.height / 2 + 3);
                }
            }

            // CLASS INSTANCES

            // Create new objects for all background layers and put them into a new array
            for (let i = 0; i < backgroundLayers.length; i++) {
                // Give each layer a different speed
                layers[i] = new Background(canvas.width, canvas.height, backgroundLayers[i], (i / backgroundSpeedMod + gameSpeedMod));
            }

            // Create an instance of the InputHandler class to register user input
            const userInput = new InputHandler();

            // Create an instance of the Player class to display the player character
            const player = new Player(canvas.width, canvas.height);

            // ANIMATION LOOP

            function animate(timeStamp) {

                // Declare deltaTime to keep track of how many ms 1 game frame takes on the user machine
                const deltaTime = timeStamp - lastTime;
                lastTime = timeStamp; // Update the lastTime stamp to the current timeStamp

                // Clear previous animations
                context.clearRect(0, 0, canvas.width, canvas.height);

                // Loop through background layers
                for (let i = 0; i < layers.length; i++) {
                    layers[i].draw(context); // Display layer
                    layers[i].update(deltaTime); // Animate layer
                }
                player.draw(context); // Display player
                player.update(userInput, deltaTime, dragons, mobileUp, mobileLeft, mobileRight, mobileAttack); // Animate player
                handleDragons(deltaTime); // Display and animate dragons
                triggerExplosions(deltaTime); // Display and animate explosions
                displayStatus(context, deltaTime); // Display game status

                // Check if game over
                if (gameOver == true) {
                    music.pause(); // Stop the background music
                    dragonWingSound.pause(); // Stop dragon wings sound

                    // Stop playing player sounds
                    player.stepSound.pause();
                    player.stepSoundFast.pause();
                    player.stepSoundSlow.pause();
                    player.jumpSound.pause();
                    player.spellSound.pause(); // Stop potential spell sound effect if game over
                    player.deathSound.play(); // Play the death sound if game over

                    // Unlock the start button
                    gameStarted = false;
                    buttonStart.style.display = "initial";
                    buttonStartClicked.style.display = "none";
                    buttonStartText.style.marginTop = "0%";

                    // Restore initial screen size depending on the device
                    if (navigator.maxTouchPoints <= 0) {
                        leftColumn.className = "col-xl-3 col-lg-3 col-md-3 col-sm-3";
                        centralColumn.className = "col-xl-6 col-lg-6 col-md-6 col-sm-6 d-none d-sm-block";
                        rightColumn.className = "col-xl-3 col-lg-3 col-md-3 col-sm-3 d-none d-sm-block"; 
                    }
                    // If on a touch supporting device, wait before hiding the buttons
                    else {
                        setTimeout(function() {
                            leftColumn.className = "col-xl-3 col-lg-3 col-md-3 col-sm-3";
                            centralColumn.className = "col-xl-6 col-lg-6 col-md-6 col-sm-6 d-none d-sm-block";
                            rightColumn.className = "col-xl-3 col-lg-3 col-md-3 col-sm-3 d-none d-sm-block";

                            document.getElementById("row-mobile-up").style.display = "none";
                            document.getElementById("row-mobile-lateral").style.display = "none";
                            document.getElementById("row-mobile-attack").style.display = "none";

                            for (let i = 0; i < sideColumnElementDisplay.length; i++) {
                                if (sideColumnElements[i] != null) {
                                    sideColumnElements[i].style.display = sideColumnElementDisplay[i];
                                }
                            }
                        }, 2000);
                    }
                }
                else {
                    music.play(); // Play the background music
                    requestAnimationFrame(animate); // Keep playing
                }

                // Draw the game window border
                context.drawImage(border, 0, 0, canvas.width, canvas.height);
            }
            animate(0); // Call the animation loop, passing a non-significant argument for the first time (no timeStamp yet)
        }
    });
});