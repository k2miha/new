'use strict';

var photos = [];
var likesMassive = [];
var commentsMassive = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const description = `Тестим новую камеру! + Затусили с друзьями на море + Как же круто тут кормят + Отдыхаем... + 
Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами...... + Вот это тачка!`;
const descArr = description.split('+');
var pictures = document.querySelector('.pictures');
var pictureTemplate = document.querySelector('#picture-template').content.querySelector('.picture');
var uploadFile = document.querySelector('#upload-file');
var uploadOverlay = document.querySelector('.upload-overlay');
var uploadCancel = document.querySelector('#upload-cancel');
var uploadPin = document.querySelector('.upload-effect-level-pin');
var uploadLine = document.querySelector('.upload-effect-level-line');
var uploadLevel = document.querySelector('.upload-effect-level');
var effectPower;
var uploadEffectNone = document.querySelector('#upload-effect-none');
var uploadEffectChrome = document.querySelector('#upload-effect-chrome');
var uploadEffectSepia = document.querySelector('#upload-effect-sepia');
var uploadEffectMarvin = document.querySelector('#upload-effect-marvin');
var uploadEffectPhobos = document.querySelector('#upload-effect-phobos');
var uploadEffectHeat = document.querySelector('#upload-effect-heat');
var effectPreview = document.querySelector('.effect-image-preview');
var galleryClose = document.querySelector('.gallery-overlay-close');
var uploadHashtags = document.querySelector('.upload-form-hashtags');
var uploadResizeControlsButtonDec = document.querySelector('.upload-resize-controls-button-dec');
var uploadResizeControlsButtonInc = document.querySelector('.upload-resize-controls-button-inc');
var uploadResizeControlsValue = document.querySelector('.upload-resize-controls-value');
var uploadFormDescription = document.querySelector('.upload-form-description');
var resizeValue= 25;
var value = 100;
var inpurStr;
var inpurArr = [];
var generator = function (array) {
  return array[Math.floor(Math.random() * ((array.length - 1) - 0 + 1)) + 0];
}

var min = 15;
const max = 200;
const minImg = 1;
const maxImg = 6;

var fillBlock = function (array) {
  for (var i = 1; i <= 25; i++) {
    array[i] = {
      url: 'photos/' + i + '.jpg',
      likes: Math.floor(Math.random() * (max - min + 1)) + min,
      comments: generator(commentsMassive),
      description: descArr
    }
  }
  return array;
}

fillBlock(photos);

var renderContent = function (array) {
 var pictureElement = pictureTemplate.cloneNode(true);

 pictureElement.querySelector('img').setAttribute('src', photos[i].url);
 pictureElement.querySelector('.picture-likes').textContent = photos[i].likes;
 pictureElement.querySelector('.picture-comments').textContent = 1;

 return pictureElement;
}

var fragment = document.createDocumentFragment();
for (var i = 1; i < photos.length; i++) {
  fragment.appendChild(renderContent(photos[i]));
}
pictures.appendChild(fragment);

var galleryOverlay = document.querySelector('.gallery-overlay');

var galleryOverlayPreview = galleryOverlay.querySelector('.gallery-overlay-preview');
var galleryControl = galleryOverlayPreview.querySelector('.gallery-overlay-controls');

const socialComments = document.createElement('ul');
socialComments.classList.add('social__comments');
const socialComment = document.createElement('li');
socialComment.classList.add('social__comment','social__comment--text');
const socialImg = document.createElement('img');
socialImg.classList.add('social__picture');
const socialText = document.createElement('span');
socialText.classList.add('social__text');
const socialDescr = document.createElement('p');
socialDescr.classList.add('social__caption');
const socialCommentsCount = document.createElement('span');
socialCommentsCount.classList.add('social__comment-count', 'visually-hidden');
const socialLoad = document.createElement('span');
socialLoad.classList.add('social__loadmore', 'visually-hidden');

socialImg.setAttribute('src', `img/avatar-${Math.floor(Math.random() * (maxImg - minImg + 1)) + minImg}.svg`);
socialImg.setAttribute('alt', 'Аватар комментатора фотографии');
socialImg.setAttribute('width', 35);
socialImg.setAttribute('height', 35);
galleryControl.appendChild(socialComments);
socialComments.appendChild(socialComment);
socialComment.appendChild(socialImg);
socialComment.appendChild(socialText);
galleryControl.appendChild(socialCommentsCount);
galleryControl.appendChild(socialLoad);

var picture = pictures.querySelectorAll('.picture');
const closePopup = () => {
  uploadOverlay.classList.add('hidden');
  uploadFile.setAttribute('value', '');
  uploadResizeControlsValue.setAttribute('value', '100');    
  effectPreview.style.transform = `scale(1)`;
};
for (let i = 1; i <= 25; i++) {
  picture[i - 1].addEventListener('click', function(evt){
    evt.preventDefault();
    galleryOverlay.classList.remove('hidden');
    galleryOverlayPreview.querySelector('.gallery-overlay-image').setAttribute('src', photos[i].url);
    galleryOverlayPreview.querySelector('.likes-count').textContent = photos[i].likes;
    galleryOverlayPreview.querySelector('.comments-count').textContent = 1;
    socialText.textContent = photos[i].comments;
    if (i <= 5) {
      socialDescr.textContent = descArr[i];
    } else if (i <= 11) {
      socialDescr.textContent = descArr[i - 6];
    } else if (i <= 17) {
      socialDescr.textContent = descArr[i - 12];
    } else if (i <= 23) {
      socialDescr.textContent = descArr[i - 18];
    } else if (i <= 25) {
      socialDescr.textContent = descArr[i - 24];
    }
    galleryOverlayPreview.insertBefore(socialDescr, galleryControl);
    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        galleryOverlay.classList.add('hidden');
      }
    });
    galleryClose.addEventListener('click', function (evt) {
      galleryOverlay.classList.add('hidden');
    });
  });
}
uploadFile.addEventListener('change', function() {
  uploadFile.setAttribute('value', '1');
  uploadOverlay.classList.remove('hidden');
});

uploadCancel.addEventListener('click', closePopup);
document.addEventListener('keydown', function(evt){
  if (evt.keyCode === 27) {
    uploadOverlay.classList.add('hidden');
  }
  uploadFile.setAttribute('value', '');
});

const effectCalc = (evt) => {
  effectPower = (uploadPin.offsetLeft * 100 / uploadLine.clientWidth) / 100;
  uploadEffectNone.setAttribute('value', `${effectPower}`);
  return effectPower;
};
uploadPin.addEventListener('mouseup', effectCalc);

uploadEffectNone.addEventListener('click', function(evt){
  if (uploadEffectNone.checked) {
    uploadLevel.classList.add('hidden');
    effectPreview.classList.remove('effect-chrome');
    effectPreview.classList.remove('effect-sepia');
    effectPreview.classList.remove('effect-marvin');
    effectPreview.classList.remove('effect-phobos');
    effectPreview.classList.remove('effect-heat');
    uploadEffectNone.setAttribute('value', value);
  }
});
uploadEffectChrome.addEventListener('click', function(evt){
  if (uploadEffectChrome.checked) {
    uploadLevel.classList.remove('hidden');
    effectPreview.classList.add('effect-chrome');
    effectPreview.classList.remove('effect-sepia');
    effectPreview.classList.remove('effect-marvin');
    effectPreview.classList.remove('effect-phobos');
    effectPreview.classList.remove('effect-heat');
    effectCalc();
  }
});
uploadEffectSepia.addEventListener('click', function(evt){
  if (uploadEffectSepia.checked) {
    uploadLevel.classList.remove('hidden');
    effectPreview.classList.add('effect-sepia');
    effectPreview.classList.remove('effect-chrome');
    effectPreview.classList.remove('effect-marvin');
    effectPreview.classList.remove('effect-phobos');
    effectPreview.classList.remove('effect-heat');
    effectCalc();
  }
});
uploadEffectMarvin.addEventListener('click', function(evt){
  if (uploadEffectMarvin.checked) {
    uploadLevel.classList.remove('hidden');
    effectPreview.classList.add('effect-marvin');
    effectPreview.classList.remove('effect-chrome');
    effectPreview.classList.remove('effect-sepia');
    effectPreview.classList.remove('effect-phobos');
    effectPreview.classList.remove('effect-heat');
    effectCalc();
  }
});
uploadEffectPhobos.addEventListener('click', function(evt){
  if (uploadEffectPhobos.checked) {
    uploadLevel.classList.remove('hidden');
    effectPreview.classList.add('effect-phobos');
    effectPreview.classList.remove('effect-chrome');
    effectPreview.classList.remove('effect-sepia');
    effectPreview.classList.remove('effect-marvin');
    effectPreview.classList.remove('effect-heat');
    effectCalc();
  }
});
uploadEffectHeat.addEventListener('click', function(evt){
  if (uploadEffectHeat.checked) {
    uploadLevel.classList.remove('hidden');
    effectPreview.classList.add('effect-heat');
    effectPreview.classList.remove('effect-chrome');
    effectPreview.classList.remove('effect-sepia');
    effectPreview.classList.remove('effect-marvin');
    effectPreview.classList.remove('effect-phobos');
    effectCalc();
  }
});
uploadHashtags.addEventListener('input', function(evt) {
  inpurStr = uploadHashtags.value;
  for(let i of inpurStr) {
    console.log(uploadHashtags.validity.valid);
    if(inpurStr.length === 1 && inpurStr[0] === '#' || (inpurStr.length - 1) === inpurStr.lastIndexOf('#')) {
      uploadHashtags.setCustomValidity('хеш-тег не может состоять только из одной решётки');
    } else if (inpurStr[0] !== '#') {
      uploadHashtags.setCustomValidity('хэш-тег должен начинатся с символа # (решётка)');
    }
    else if (inpurStr.indexOf('#') !== inpurStr.lastIndexOf('#') && inpurStr[(inpurStr.lastIndexOf('#') - 1)] !== ' ') {
      uploadHashtags.setCustomValidity('хэш-теги разделяются пробелами');
    } 
    else {
      inpurArr = inpurStr.split('#');
      console.log(inpurArr);
      for (let i = 1; i < inpurArr.length; i++) {
        for (let j = i + 1; j <= inpurArr.length; j++) {
          if (inpurArr.length > 2) {
            if (inpurArr[j].trim().toLowerCase() === inpurArr[i].trim().toLowerCase()) {
              uploadHashtags.setCustomValidity('один и тот же хэш-тег не может быть использован дважды');
            }
          }
           else if (inpurArr.length > 6) {
            uploadHashtags.setCustomValidity('нельзя указать больше пяти хэш-тегов');
          }
          else {
            uploadHashtags.setCustomValidity('');
          }
        }
      }
    }
  }
});
uploadHashtags.addEventListener('focus', function(evt) {
  document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      uploadOverlay.classList.remove('hidden');
    } 
  });
});
uploadHashtags.addEventListener('blur', function(evt) {
  document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      uploadOverlay.classList.add('hidden');
    } 
  });
});
uploadResizeControlsValue.setAttribute('value', value);
uploadResizeControlsButtonInc.addEventListener('click', function() {
  if (value < 100) {
    uploadResizeControlsValue.setAttribute('value', value = value + resizeValue);    
    effectPreview.style.transform = `scale(${value / 100})`;
  }
});
uploadResizeControlsButtonDec.addEventListener('click', function() {
  if (value > resizeValue) {
    uploadResizeControlsValue.setAttribute('value', value = value - resizeValue);    
    effectPreview.style.transform = `scale(${value / 100})`;
  }
});
uploadFormDescription.addEventListener('focus', function(evt) {
  document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      uploadOverlay.classList.remove('hidden');
    }
  });
});
uploadFormDescription.addEventListener('blur', function(evt) {
  document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      uploadOverlay.classList.add('hidden');
    } 
  });
});