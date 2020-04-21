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

var generator = function (array) {
  return array[Math.random().toFixed(0)];
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
galleryOverlay.classList.remove('hidden');

var galleryOverlayPreview = galleryOverlay.querySelector('.gallery-overlay-preview');
var galleryControl = galleryOverlayPreview.querySelector('.gallery-overlay-controls');
galleryOverlayPreview.querySelector('.gallery-overlay-image').setAttribute('src', photos[1].url);
galleryOverlayPreview.querySelector('.likes-count').textContent = photos[1].likes;
galleryOverlayPreview.querySelector('.comments-count').textContent = 1;
const socialComments = document.createElement('ul');
socialComments.classList.add('social__comments');
const socialComment = document.createElement('li');
socialComment.classList.add('social__comment','social__comment--text');
const socialImg = document.createElement('img');
socialImg.classList.add('social__picture');
const socialText = document.createElement('span');
socialText.classList.add('social__text');
socialText.textContent = photos[1].comments;
const socialDescr = document.createElement('p');
socialDescr.classList.add('social__caption');
const socialCommentsCount = document.createElement('span');
socialCommentsCount.classList.add('social__comment-count', 'visually-hidden');
const socialLoad = document.createElement('span');
socialLoad.classList.add('social__loadmore', 'visually-hidden');
socialDescr.textContent = descArr[0];
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
galleryOverlayPreview.insertBefore(socialDescr, galleryControl);