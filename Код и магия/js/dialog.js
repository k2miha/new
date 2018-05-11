var dialog = (function () {
  var setup = document.querySelector('.setup');
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var dialogHandle = document.querySelector('.setup-user-pic');

  setup.querySelector('.setup-similar').classList.remove('hidden');

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupUserName = document.querySelector('.setup-user-name');

  var onPopupEscPress = function (evt) {
    if(evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function(evt) {
    openPopup();
    setup.style.top = 80 + 'px';
    setup.style.left = 50 + '%';
  });

  setupOpen.addEventListener('keydown', function(evt) {
    if(evt.keyCode === ENTER_KEYCODE) {
      openPopup();
      setup.style.top = 80 + 'px';
      setup.style.left = 50 + '%';
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

  dialogHandle.addEventListener('mousedown', function(evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
