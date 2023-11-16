//==================================================================
// Author: Tristan Mann
// Date: 11-15-2023
// Desc: Projection calculation with HTML UI on a browser page
//==================================================================

//==================================================================
// T O - D O
//==================================================================
// -Add company logo
// -Add more information in each list entry
// -Possibly add charts and graphs to UI
//====================================================================

//#region Variables
let revenue;
let bottles = 0;
//How many sales
let boxesSold = 5;
//price charged per box
let price = 35.00;
//boxes gotten per bottle
let perBot = 2;
//Price per bottle
let botPrice = 15;
//Grams of resin per bottle
let botSize = 1000;
let resCostPerGram = botPrice/botSize;
//vars for figure per box in grams
let figGrams = 4;
let numOfFigs = 30;
//grams per box
let gramsPerBox = numOfFigs * figGrams;
//Estimated shipping cost
let shipping = 5;
let manCost = resCostPerGram * gramsPerBox + shipping;
const startCosts = 0;
let figsPrinted = boxesSold * 30;
let i = 0;
//array to make list out of later on 
let profit = ["N/A: Enter values into calculation text boxes, then click submit in order to fill in list."];
const btn = document.getElementById("myBtn");
//#endregion

setUp();

//If the button is clicked run program again
btn.onclick = function clicked()
{
    //Clear list in HTML before we make a new array to add to this list element
    //Keeps list from adding to the end of itself
    document.getElementById("profit").replaceChildren("");
    userInput();
    
   profit = makeArray(revenue, i, profit);

    //Output new list
    outputLi();
    statsOut();
}
//This function will return the array after it iterates through the number of sales made
function makeArray(money, i, profit)
{
    for(i = 1; i <= boxesSold; i++)
    {
        money = (price * i) + -manCost * i;
    
        if(money < 0)
        {
            console.log("MINUS" , money , "at" , i , "boxes.");
            profit.push(money.toFixed(2));
            
        }
        else if(money == 0)
        {
            console.log("EVEN" , money , "at" , i , "boxes.");
            profit.push(money.toFixed(2));
        }
        else
        {
            console.log("PLUS" , money , "at" , i , "boxes.");
            profit.push(money.toFixed(2));
        }
        if(i % perBot == 0) 
        {
            console.log("New resin bottle needed.");
            bottles++;
        }
    }
    return profit;
}

function statsOut()
{
    console.log("Figures printed: ", figsPrinted);
    console.log("Revenue generated per month at", boxesSold, "boxes sold per day:", (revenue * 7) * 4);
    console.log("Bottles needed for printing", bottles, "boxes: ", boxesSold);
}

function outputLi()
{
    profit.forEach(function(revenue)
    {
        //makes a new element for each value in array
        var profli = document.createElement("li");
        //creates what the text inside of other 
        var proftext = document.createTextNode(revenue);
        profli.appendChild(proftext);
        document.getElementById("profit").appendChild(profli);
    
    
    });
}

function setUp()
{   
     profit.forEach(function(revenue)
    {
        //makes a new element for each value in array
        var profli = document.createElement("li");
        //creates what the text inside of other 
        var proftext = document.createTextNode(revenue);
        profli.appendChild(proftext);
        document.getElementById("profit").appendChild(profli);
    
    
    });
}

function userInput()
{
     //Set revenue to 0 again so it doesn't add to the old revenue
     revenue = 0;
     //Reset bottles counter
     bottles = 0;
    //How many sales
    if(document.getElementById("sales").value != "")
    {
         boxesSold = document.getElementById("sales").value;
    }
    
    if(document.getElementById("price").value != "")
    {
        //price charged per box
         price = document.getElementById("price").value;
    }
    //boxes gotten per bottle
    const perBot = 2;
    if(document.getElementById("botPrice").value != "")
    {
        //Price per bottle
         botPrice = document.getElementById("botPrice").value;
    }
    if(document.getElementById("botSize").value != "")
    {
        //Grams of resin per bottle
         botSize = document.getElementById("botSize").value;
    }
     resCostPerGram = botPrice/botSize;

    //vars for figure per box in grams
    if(document.getElementById("figWeight").value != "")
    {
     figGrams = document.getElementById("figWeight").value;
    }
    if(document.getElementById("figsPerBox").value != "")
    {
     numOfFigs = document.getElementById("figsPerBox").value;
    }
    //grams per box
     gramsPerBox = numOfFigs * figGrams;
    //Estimated shipping cost
     shipping = 5;
     manCost = resCostPerGram * gramsPerBox + shipping;
     figsPrinted = boxesSold * numOfFigs;
     i = 0;
    //reset array 
     profit = [];
}