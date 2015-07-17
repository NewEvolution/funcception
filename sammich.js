var condimentCount = 0;

var sandwich = {
  pickle: false,
  lettuce: false,
  tomato: false,
  ketchup: false,
  mustard: false,
  mayo: false
}

function pickler(value) {
  sandwich.pickle = value;
}

function lettucer(value) {
  sandwich.lettuce = value;
}

function tomatoer(value) {
  sandwich.tomato = value;
}

function ketchuper(value) {
  sandwich.ketchup = value;
}

function mustarder(value) {
  sandwich.mustard = value;
}

function mayoer(value) {
  sandwich.mayo = value;
}

function makeMeASandwich(pickle, lettuce, tomato, ketchup, mustard, mayo) {
  var docOutput = [];
  pickler(pickle);
  lettucer(lettuce);
  tomatoer(tomato);
  ketchuper(ketchup);
  mustarder(mustard);
  mayoer(mayo);
  if (sandwich.pickle === true) {
    docOutput[docOutput.length] = "pickle";
  }
  if (sandwich.lettuce === true) {
    docOutput[docOutput.length] = "lettuce";
  }
  if (sandwich.tomato === true) {
    docOutput[docOutput.length] = "tomato";
  }
  if (sandwich.ketchup === true) {
    docOutput[docOutput.length] = "ketchup";
  }
  if (sandwich.mustard === true) {
    docOutput[docOutput.length] = "mustard";
  }
  if (sandwich.mayo === true) {
    docOutput[docOutput.length] = "mayo";
  }
  if (docOutput.length > 1) {
    docOutput[(docOutput.length - 1)] = "and " + docOutput[(docOutput.length - 1)];
  }
  if (docOutput.length === 0) {
    docOutput[docOutput.length] = "nothing";
  }
  document.write("My sandwich has " + docOutput.join(", ") + " on it. ");
}

makeMeASandwich(false, false, false, true, false, false);