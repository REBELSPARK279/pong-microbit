//functions

function setNumber(number: any) {
    if (number == 0) {
        basic.showLeds(`
        .###.
        .#.#.
        .#.#.
        .#.#.
        .###.
        `);
    } else if (number == 1) {
        basic.showLeds(`
        ..#..
        .##..
        ..#..
        ..#..
        .###.
        `);
    } else if (number == 2) {
        basic.showLeds(`
        .###.
        ...#.
        .###.
        .#...
        .###.
        `);
    } else if (number == 3) {
        basic.showLeds(`
        .###.
        ...#.
        .###.
        ...#.
        .###.
        `);
    } else if (number == 4) {
        basic.showLeds(`
        .#.#.
        .#.#.
        .###.
        ...#.
        ...#.
        `);
    } else if (number == 5) {
        basic.showLeds(`
        .###.
        .#...
        .###.
        ...#.
        .###.
        `);
    } else if (number == 6) {
        basic.showLeds(`
        .###.
        .#...
        .###.
        .#.#.
        .###.
        `);
    } else if (number == 7) {
        basic.showLeds(`
        .###.
        .#.#.
        ...#.
        ..#..
        ..#..
        `);
    } else if (number == 8) {
        basic.showLeds(`
        .###.
        .#.#.
        .###.
        .#.#.
        .###.
        `);
    } else if (number == 9) {
        basic.showLeds(`
        .###.
        .#.#.
        .###.
        ...#.
        .###.
        `);
    } else if (number == 10) {
        basic.showLeds(`
        #.###
        #.#.#
        #.#.#
        #.#.#
        #.###
        `);
    }
}

//var

let mode = 0;
/* 
mode 0 --> menu
mode 1 --> 1p game
mode 2 --> server selection

mode 279 --> doNothing
*/
let menuCount = 1;
let serverPage = 0;

//startup

setNumber(1);

//inputs

input.onButtonPressed(Button.A, function () {
    if (mode == 0) { //mainMenu
        if (menuCount != 1) {
            menuCount--;
            setNumber(menuCount);
        }
    }
});
input.onButtonPressed(Button.B, function () {
    if (mode == 0) { //mainMenu
        if (menuCount != 2) {
            menuCount++;
            setNumber(menuCount);
        }
    }
});
input.onButtonPressed(Button.AB, function () {
    if (mode == 0) { //mainMenu
        if (menuCount == 1) {
            mode = 279;
            basic.clearScreen();
            basic.pause(600);
            for (let temp = 3; temp > 1; temp++) {
                setNumber(temp);
                basic.pause(1000);  
            }
            basic.clearScreen();
            mode = 1;
        } else if (menuCount == 2) {
            mode = 2;
            basic.clearScreen();
            basic.pause(350);
            setNumber(serverPage);
        }
    }
});

basic.forever(function() {
     
});