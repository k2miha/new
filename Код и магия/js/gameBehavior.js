var gameBehavior = (function () {
  var fireballSize = 22;
  var getFireballSpeed = function wind(left) {
    if (left) {
      return 5;
    } else {
      return 2;
    }
  };
  var wizardSpeed = 3;
  var wizardWidth = 70;
  var getWizardHeight = function WizardHeight(height) {
    height = 1.337 * wizardWidth;
    return height;
  };
  function getWizardX(width) {
    width = width / 2
    return width;
  }
  function getWizardY(height) {
    height = (height / 3) * 2;
    return height;
  }
  getWizardY(210);
})();
