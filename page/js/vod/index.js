var vm = new Vue({
  el: '#app',
  data: {
	carouselItems:[{class:"carousel-item active",image:"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="},{class:"carousel-item",image:"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="},{class:"carousel-item",image:"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="}],
	items:[{image:"http://r1.ykimg.com/050C00005AA0AE15ADC0AEFD65039EBE"}]
  },
  methods: {
    play: function () {
      window.location.href="play.html";
    }
  },
  mounted:function(){
        this.carouselItems[0].image="http://r1.ykimg.com/050C00005A9C9488ADC0AEABA707C241";
  }
})
