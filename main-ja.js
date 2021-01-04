const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '今日、Bobの:insertx:は友達とお出かけです。天気は:inserty:。昨晩チェックした天気予報は:insertz:。さて、:insertx:はというと、早く目が覚めたため、滅多にない優雅な朝食。すると突然、:inserta:結局、いつも通りギリギリの5min.前に家を飛び出して行く羽目になりました。';
let insertX = ['お姉さん','お兄ちゃん','弟'];
let insertY = ['晴れ','曇り','雨'];
let insertZ = ['はずれました','大当たり','ちょっとだけずれてました'];
let insertA = ['仲の悪い妹が起きてきて、喧嘩に。','腹痛に襲われトイレに。','今朝までの課題をやり忘れていたことに気付き、急いで提出。'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  let aItem = randomValueFromArray(insertA);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  newStory = newStory.replace(':inserta:',aItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("日本").checked) {
    const minute = Math.round(10*0.291349) + '分';
    newStory = newStory.replace('5min.',minute);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
