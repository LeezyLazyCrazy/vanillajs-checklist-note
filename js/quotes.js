const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "The world is a book and those who do not travel read only one page.",
    author: "Saint Augustine",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "To Travel is to Live",
    author: "Hans Christian Andersen",
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Never go on trips with anyone you do not love.",
    author: "Hemingway",
  },
  {
    quote: "We wander for distraction, but we travel for fulfillment.",
    author: "Hilaire Belloc",
  },
  {
    quote: "Happiness depends upon ourselves",
    author: "Aristotle",
  },
  {
    quote: "참을 인 세번이면 호구",
    author: "박명수",
  },
  {
    quote: "스치면 인연, 스며들면 사랑",
    author: "잠자는 숲속의 공주 ",
  },
  {
    quote: "사랑인란, 다른사람의 행복이 나의 행복을 결정짓는 아름다운 현상이라구",
    author: "피노키오",
  },
  {
    quote: "진정한 친구는 애써 지은 미소속에 가려진 눈물을 봐",
    author: "곰돌이 푸",
  },
  {
    quote: "내 기분은 내가 정해 오늘은 '행복' 으로 할래",
    author: "이상한나라의 앨리스",
  },
  {
    quote: "그렇게 구경만 하다간, 네 인생이 너 없이 흘러가는 걸 구경하게 될 걸",
    author: "노틀담의 꼽추",
  },
  {
    quote: "최고의 일은 뜻밖에서 생겨. 그게 인생이야",
    author: "도리를 찾아서",
  },
  {
    quote: "고난과 투쟁의 불꽃 속에서 다듬은 내 인생철학은 '나는 나대로, 너는 너대로'",
    author: "스누피",
  },
  {
    quote: "넌 아주 사랑스러운 사람이고, 너의 인생은 사랑으로 가득 찰 거야",
    author: "스누피",
  },
  {
    quote: "그들은 있는 그대로의 너를 사랑해",
    author: "스누피",
  },
  {
    quote: "그냥 옆에 앉아 네 이야기를 들어 줄 누군가 있다는 건 정말 좋은거야",
    author: "스누피",
  },
  {
    quote: "누군가의 기분을 상하게 했으면 즉시 사과하는 것이 최고의 치료법이라고 응급처지 시간에 배웠어",
    author: "스누피",
  },

  {
    quote: "모든 고민은 인간관계에서 비롯된다. 타인에게 미움받을 것을 두려워하지 마라. 모든 것은 용기의 문제다",
    author: "고가 후미타케",
  },


];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;