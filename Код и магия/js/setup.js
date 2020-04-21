var setup = (function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = [' да Марья', ' Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireballColor = document.querySelector('.setup-fireball-wrap');
  var submitButton = document.querySelector('.setup-submit');
  var form = document.querySelector('.setup-wizard-form');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var setup = document.querySelector('.setup');
  setup.classList.remove('hidden');
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

  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;

  shopElement.addEventListener('dragstart', function (evt) {
      if (evt.target.tagName.toLowerCase() === 'img') {
        draggedItem = evt.target;
        evt.dataTransfer.setData('text/plain', evt.target.alt);
      }
  });

  var artifactsElement = document.querySelector('.setup-artifacts');
  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('drop', function (evt) {
    if (evt.target.parentNode.classList.contains('setup-artifacts-cell')) {
      alert('Ошибка! Ячейка уже содержит звездочку!');
    } else {
      evt.target.style.backgroundColor = '';
      evt.target.appendChild(draggedItem.cloneNode(true));
      evt.preventDefault();
    }
  });

  artifactsElement.addEventListener('dragenter', function (evt) {
      artifactsElement.style.outline = '2px dashed red';
      evt.target.style.backgroundColor = 'yellow';
      evt.preventDefault();
  });
  artifactsElement.addEventListener('dragleave', function (evt) {
      artifactsElement.style.outline = '';
      evt.target.style.backgroundColor = '';
      evt.preventDefault();
  });
})();
