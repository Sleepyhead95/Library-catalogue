// creating a parent class
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  // getters are needed, as the properties inside the constructor are private
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  // sets the value of the property to a boolean
  set isCheckedOut(boolean) {
    this._isCheckedOut = boolean;
  }
  // switches between true or false
  toggleCheckOutStatus() {
    if (this._isCheckedOut === true) {return this._isCheckedOut = false;}
    else {return this._isCheckedOut = true;}
  }
  // calculates the average rating based on multiple rating inputs
  getAverageRating() {
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);  
    const arrayLength = this._ratings.length;
    return ratingsSum / arrayLength;
  }
  // method to add a rating & ensures that the value is between 1 and 5
  addRating(rating) {
    if (rating >= 1 && rating <= 5) {
      this._ratings.push(rating);
    }
    else {console.log ('Input a value between 1 and 5.')}
  }
}

// child class Book that inherits from Media
class Book extends Media {
  constructor(author, title, pages){
    super(title);
    // these two properties are unique to the Book class, so have to be specified
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

// child class Movie that inherits from Media
class Movie extends Media {
  constructor(director, title, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

// child class CD that inherits from Media
class CD extends Media {
  constructor(artist, title, songs){
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
}

// creating a new Book instance
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

// checkout status
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

// average rating
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.getAverageRating();
console.log(historyOfEverything.getAverageRating());

// creating a new Movie instance
const speed = new Movie('Jan de Bont', 'Speed', 116);

// checkout status
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

// average rating
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.getAverageRating();
console.log(speed.getAverageRating());

// creating a new CD instance
const californication = new CD('Red Hot Chili Peppers', 'Californication', ['Californication', 'Otherside', 'Scar Tissue', 'Around The World']);

// average rating
californication.addRating(5);
californication.addRating(5);
californication.addRating(5);
californication.getAverageRating();
console.log(californication.getAverageRating());
