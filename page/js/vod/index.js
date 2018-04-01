var vm = new Vue({
  el: '#app',
  data: {
	carouselItems:[{class:"carousel-item active",image:"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",contentId:40},{class:"carousel-item",image:"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",contentId:40},{class:"carousel-item",image:"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",contentId:40}],
	items:[]
  },
  methods: {
    play: function (item) {
      window.location.href="play.html?contentId=" + item.contentId;
    }
  },
  mounted:function(){
       jQuery.getJSON(baseURL + "index.do", function(r){
         for(var i= 0;i<vm.carouselItems.length;i++){
           if(i<r.carousel.length){
            vm.carouselItems[i].image = r.carousel[i].image;
            vm.carouselItems[i].contentId = r.carousel[i].contentId;
           }
         }
          vm.items = r.indexContent;
          for(var i=0;i<vm.items.length;i++){
            if(vm.items[i].icon==null||vm.items[i].icon=='')
            vm.items[i].icon = "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
            
          }
        });
  }
})
