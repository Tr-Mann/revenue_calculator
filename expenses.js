let revenue;
let bottles = 0;
const boxesSold = 1000;
const price = 40.00;
const perBot = 12;
const manCost = -25;
const startCosts = -350.00;
let i = 0;

for(i = 0; i < boxesSold; i++)
{
    revenue = (startCosts + price * i) - manCost * i;
    if(revenue < 0)
    {
        console.log("MINUS " + revenue + " at " + i + " boxes.");
        
    }
    else if(revenue == 0)
    {
        console.log("EVEN " + revenue + " at " + i + " boxes.");
    }
    else
    {
        console.log("PLUS " + revenue + " at " + i + " boxes.");
    }
    if(i % perBot == 0) 
    {
        console.log("New resin bottle needed.");
        bottles++;
    }
}
console.log("Bottles needed for printing: " + bottles);