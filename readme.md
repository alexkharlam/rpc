# RPC

![](https://i.ibb.co/2qNwmLg/Frame-15.png)

😁 The shortest way to explain this app:

Rock-Paper-Scissors game against computer with customizable number of elements, with fairness verification using HMAC, gameplay in the console, built with Javascript and Node.js

# How it works

-   Define Elements: You can define your own elements for the game. The game supports any odd number of elements (3, 5, 7, etc.).
-   HMAC Generation: Before you make your move, the computer generates its move and creates an HMAC using a secret key. This HMAC ensures that the computer cannot change its move after you make yours.
-   Player Move: You choose your move by entering the corresponding number in the command line.
-   Reveal and Verify: After you make your move, the computer reveals its move along with the secret key used to generate the HMAC. You can then verify that the HMAC matches the revealed move, ensuring the game was fair.
-   Determine Winner: The outcome is determined based on the position of your move and the computer's move in the circular sequence of elements. Each element beats half of the subsequent elements and loses to the other half.

It's simpler to jump in and try it out than to overthink it, so let's get started!

# Getting started

## Prerequisites

Ensure you have Node.js installed on your computer. You can download it from [nodejs.org.](https://nodejs.org)

## Installation

Clone this repository to your local machine:

```bash
  git clone https://github.com/alexkharlam/rpc

```

Navigate to the project directory:

```bash
  cd rpc
```

Install the required dependencies:

```bash
  npm install
```

## Gameplay

To start the game, run the following command in your terminal with your chosen elements. Ensure you enter an odd number of elements:

```bash
  // example with elements rock paper scissors

  node index.js rock paper scissors
```

After the game started, you can just follow the guidelines in the console!

![App Screenshot](https://i.ibb.co/WDk5sC8/RPC.png)

The game will then display a generated HMAC value, which you can use later. Next step enter your move by typing the corresponding number and pressing Enter.

The computer will then reveal its move, winner, and the HMAC key for verification.

# HMAC verification

To ensure the game is fair, you can verify the HMAC using the revealed key and the computer's move. You can write your own script or use any online HMAC generator or write your own script to confirm that the provided HMAC matches the computer's move.

## Using online HMAC Generator / Tester Tool

To verify the fairness of the game, you can use an online HMAC generator tool:

-   Open [online HMAC tester tool](https://www.freeformatter.com/hmac-generator.html#before-output)
-   Enter the computer's move (the full title of the element, not the corresponding number) in the "String" field.
-   Enter the HMAC key in the "Secret Key" field.
-   Select the SHA256 algorithm.
-   Click on "Compute HMAC".
    If the computed HMAC matches the HMAC provided at the start of the game, the game was fair!

# Determining the Winner

The winner is determined based on the position of the player's move and the computer's move in the circular sequence of elements. Each element beats half of the subsequent elements and loses to the other half. For example, if there are 9 elements:

-   Element 1 beats elements 6, 7, 8, and 9, and loses to elements 2, 3, 4, and 5.
-   Element 2 beats elements 7, 8, 9, and 1, and loses to elements 3, 4, 5, and 6.
-   And so on...

## Example Win/Lose Matrix

For the elements "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", the win/lose matrix looks like this:

![](https://i.ibb.co/K0dBXhz/2024-05-25-00-09-29.png)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Footer

This project was created as part of a training/internship program at Itransition.
