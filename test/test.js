// Testing drawTable
var drawTable = require('../lyingoutatable.js');

var MOUNTAINS = [
  {name: "Kilimanjaro\nMontaña mágica", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal\nPaís lejano"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

var expected = 
`name           height country      
-------------- ------ -------------
Kilimanjaro    5895   Tanzania     
Montaña mágica                     
Everest        8848   Nepal        
                      País lejano  
Mount Fuji     3776   Japan        
Mont Blanc     4808   Italy/France 
Vaalserberg    323    Netherlands  
Denali         6168   United States
Popocatepetl   5465   Mexico       `;

describe("drawTable", function() {
  it("must draw the mountains table correctly", function() {
    drawTable(MOUNTAINS).should.equal(expected);
  })
});

