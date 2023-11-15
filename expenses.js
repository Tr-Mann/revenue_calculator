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

["2003", 1, 0, 0],
["2004", 4, 0, 0],
["2005", 6, 0, 0],
["2006", 9, 1, 0],
["2007", 12, 2, 0],
["2008", 13, 5, 1],
["2009", 15, 6, 1],
["2010", 16, 9, 1],
["2011", 16, 10, 4],
["2012", 17, 11, 5],
["2013", 17, 13, 6],
["2014", 17, 14, 7],
["2015", 17, 14, 10],
["2016", 17, 14, 12],
["2017", 19, 16, 12],
["2018", 20, 17, 14],
["2019", 20, 19, 16],
["2020", 20, 20, 17],
["2021", 20, 20, 20]