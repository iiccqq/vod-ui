var vm = new Vue({
  el: '#app',
  data: {
	carouselItems:[{class:"carousel-item active",image:"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="},{class:"carousel-item",image:"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="},{class:"carousel-item",image:"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="}],
	items:[{icon:"http://r1.ykimg.com/050C00005AA0AE15ADC0AEFD65039EBE"}]
  },
  methods: {
    play: function () {
      window.location.href="play.html";
    }
  },
  mounted:function(){
       // this.carouselItems[0].image="http://r1.ykimg.com/050C00005A9C9488ADC0AEABA707C241";
       jQuery.getJSON(baseURL + "index.do", function(r){
         for(var i= 0;i<vm.carouselItems.length;i++)
          vm.carouselItems[i].image = r.carousel[i].image;
          vm.items = r.indexContent;
        });
  }
})
