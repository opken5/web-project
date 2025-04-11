const { createApp } = Vue;

fetch("./template.html")
  .then((response) => response.text())
  .then((template) => {
    createApp({
      data() {
        return {
          data: [
            "giúp em gần gũi với gia đình và bạn bè hơn",
            "hiền lành đáng yêu không la bé Quỳnh bao giờ",
            "kiên nhân đợi em mỗi lúc ra khỏi nhà",
            "sắn sàng thay đổi vì em",
            "chăm chỉ làm việc nhà giúp em",
            "mang đồ và xách đồ nặng giúp em",
            "mua đồ ăn, hoa và quà để làm em vui",
            "make my life so much more fun than before",
            "anh cho em thêm 1 gia đình đáng iu (bố mẹ, cMai)",
            "luôn đứng dậy lấy đồ hộ em dù đang nằm chill",
            "you come to check and fill my water bottle",
            "luôn đi lấy đồ shopee hộ em",
            "chơi cờ thắng em (sometimes)",
            "trông em và chiều chuộng em khi em ốm",
            "you are my sweetest thing",
            "good listener and thấu hiểu cảm xúc của em",
            "anh giới thiệu em với mọi người xung quanh since the beginning",
            "nhường em đồ ngon và sẵn sàng ăn đồ thừa của em",
            "whenever you hold my hand, touch, and hug me",
            "drag out me out of the bed",
            "wake up early and cook lunch for me",
            "để em được từ do làm mọi thứ em thích",
            "you cho me cắn",
            "học đi xe máy vì em và chở em đi khắp nơi",
            "your body - ôm bé Na rất ấm và thơm",
            "nói yêu em và chúc em ngủ ngon mỗi đêm",
            "Na lúc nào cũng priotize bé Quỳnh Quỳnh",
            "meo meo thịt giỏi xoxo",
            "the way that you annoy me!",
            "ướp thịt cho em dù a vẫn rất là lười",
          ],
          currentIndex: 0,
          cardsPerPage: 3,
        };
      },
      computed: {
        visibleCards() {
          return this.data.slice(
            this.currentIndex,
            this.currentIndex + this.cardsPerPage
          );
        },
        currentCard() {
          return this.data[this.currentIndex];
        },
      },
      methods: {
        randomizeCard(index) {
          // Calculate the actual index of the clicked card in the data array
          const actualIndex = this.currentIndex + index;
          // Replace the clicked card with a random card from the data array
          const randomIndex = Math.floor(Math.random() * this.data.length);
          this.data[actualIndex] = this.data[randomIndex];
        },
        randomizeAll() {
          for (let i = 0; i < this.cardsPerPage; i++) {
            const actualIndex = this.currentIndex + i;
            const randomIndex = Math.floor(Math.random() * this.data.length);
            this.data[actualIndex] = this.data[randomIndex];
          }
        },
      },
      template,
    }).mount("#app");
  });
