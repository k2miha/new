var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = [' да Марья', ' Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var userDialog = document.querySelector('.setup');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var fireballColor = document.querySelector('.setup-fireball-wrap');
var submitButton = document.querySelector('.setup-submit');
var form = document.querySelector('.setup-wizard-form');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var generator = function (array) {
  return array[Math.random().toFixed(0)];
}

var fillBlock = function (array) {
  for (var i = 0; i < 4; i++) {
    array[i] = {
      name: generator(WIZARD_NAMES) + generator(WIZARD_SURNAMES),
      coatColor: generator(COAT_COLORS),
      eyesColor: generator(EYES_COLORS)
    }
  }
  return array;
}

var wizards = [];

fillBlock(wizards);

 var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupUserName = document.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if(evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if(evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupUserName.addEventListener('keydown', function(evt) {
  if(document.activeElement && evt.keyCode === ESC_KEYCODE) {
    document.removeEventListener('keydown', onPopupEscPress);
  }
});

var body = document.querySelector('body');

body.addEventListener('keydown', function (evt) {
  if (document.activeElement == body && evt.keyCode === ESC_KEYCODE) {
    document.addEventListener('keydown', onPopupEscPress);
  }
})

setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
  if(evt.keyCode === ENTER_KEYCODE) {
  closePopup();
  }
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = generator(COAT_COLORS);
})

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = generator(EYES_COLORS);
})

fireballColor.addEventListener('click', function () {
  fireballColor.style.backgroundColor = generator(FIREBALL_COLORS);
})

submitButton.addEventListener('click', function () {
  form.setAttribute('action', 'https://js.dump.academy/code-and-magick');
})
