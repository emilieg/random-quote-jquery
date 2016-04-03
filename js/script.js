var quotes = [
{quote:'ble', person: 'name'},
{quote:'mla', person: 'cj'},
{quote:'cla', person: 'lauren'},
{quote:'blA', person: 'marl'}
];


function getRandomInt() {
    return Math.floor(Math.random() * (quotes.length)); 
};


$(document).ready(function() {
$('#myForm').submit(function(event) {
  event.preventDefault();
  //set retur of getRandomInt to a variable
  var index = getRandomInt();
  //set inner html of the quoteContainer p to new quote
 $('#quoteContainer p').html(quotes[index].quote + " " + quotes[index].person);
}) 

})

