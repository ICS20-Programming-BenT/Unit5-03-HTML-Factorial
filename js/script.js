// Copyright (c) 2023 Ben Thomson. All rights reserved.
//
// Created by: Ben Thomson
// Created on: 05/11/2023
// This file contains the JS functions for index.html

"use strict";

function NumGiven() {
  
  // Initializing variables for counter and factorial answer
  let counter = 1;
  let facAnswer = 1;
  
  // Getting the user input for the variable userNum
  let userNum = parseInt(document.getElementById("user-number").value);

  //If: if user enters nothing
  if (isNaN(userNum)) {
    document.getElementById("results").innerHTML = "Please enter a valid number.";
    return;
  }

  //Else if: if user enters a negative number
  else if (userNum < 0) {
    document.getElementById("results").innerHTML = "Please enter a positive number.";
    return;
  }

  //Else: let the do-while loop execute to calculate the factorial
  else {
    //using a do... while loop to find factorial
    do {
      facAnswer = facAnswer * counter;
      counter = counter + 1;
    } while (counter <= userNum);
  }

  //display factorial back to screen
  document.getElementById("results").innerHTML = "The factorial of your inputted number (!" + userNum + ") = " + facAnswer + ".";
}