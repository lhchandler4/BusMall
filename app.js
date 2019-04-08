'use strict';

var imageSpotOne = document.getElementById('imageSpotOne');
var imageSpotTwo = document.getElementById('imageSpotTwo');
var imageSpotThree = document.getElementById('imageSpotThree');

//Array to capture the images
var allImgSpots = [];

//Limit the number of selections to 25
var numberOfTurns = 0;

//Constructor Function
function Product(name, filepath, index) {
  this.name = name;
  this.filepath = filepath;
  this.index = index;
  this.views = 0;
  this.clicks = 0;

  allImgSpots.push(this);
}

//new Product('name', 'path', 'index');
new Product('Star Wars Rolling Bag', 'img/bag.jpg', '0', '', '');
new Product('Banana Slicer', 'img/banana.jpg', '1', '', '');
new Product('Bathroom Helper', 'img/bathroom.jpg', '2', '', '');
new Product('Open Toed Boots', 'img/boots.jpg', '3', '', '');
new Product('Breakfast Buddy', 'img/breakfast.jpg', '4', '', '');
new Product('Meatball Gum', 'img/bubblegum.jpg', '5', '', '');
new Product('Bump Chair', 'img/chair.jpg', '6', '', '');
new Product('Monster Toy', 'img/cthulhu.jpg', '7', '', '');
new Product('Dog Duck Muzzle', 'img/dog-duck.jpg', '8', '', '');
new Product('Dragon Meat', 'img/dragon.jpg', '9', '', '');
new Product('Pen Silverware', 'img/pen.jpg', '10', '', '');
new Product('Pet Sweep', 'img/pet-sweep.jpg', '11', '', '');
new Product('Pizza Scissors', 'img/scissors.jpg', '12', '', '');
new Product('Shark Sleeping Bag', 'img/shark.jpg', '13', '', '');
new Product('Baby Sweep', 'img/sweep.jpg', '14', '', '');
new Product('Star Wars Sleeping Bag', 'img/tauntaun.jpg', '15', '', '');
new Product('Unicorn Meat', 'img/unicorn.jpg', '16', '', '');
new Product('USB Tentacle', 'img/usb.gif', '17', '', '');
new Product('Weird Watering Can', 'img/water-can.jpg', '18', '', '');
new Product('Funky Wine Glass', 'img/wine-glass.jpg', '19', '', '');
