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

var pictures = document.querySelector('.pictures');
var pictureTemplate = document.querySelector('#picture-template').content.querySelector('.picture');

var generator = function (array) {
  return array[Math.random().toFixed(0)];
}

var likeValue = 15;

for (var i = 0; i <= 185; i++) {
  likesMassive[i] = likeValue;
  likeValue++;
}

var fillBlock = function (array) {
  for (var i = 1; i <= 25; i++) {
    array[i] = {
      url: 'photos/{{' + i + '}}.jpg',
      likes: generator(likesMassive),
      comments: generator(commentsMassive)
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
galleryOverlayPreview.querySelector('.gallery-overlay-image').setAttribute('src', photos[1].url);
galleryOverlayPreview.querySelector('.likes-count').textContent = photos[1].likes;
galleryOverlayPreview.querySelector('.comments-count').textContent = 1;
