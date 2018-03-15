var vm = new Vue({
  el: '#app',
  data: {
		items:[{icon:"http://r1.ykimg.com/050C00005AA0AE15ADC0AEFD65039EBE"}]
  },
  methods: {
    play: function (item) {
      window.location.href="play.html?contentId=" + item.contentId;
    }
  },
  mounted:function(){
       var catalogId = getParam("catalogId");
       jQuery.getJSON(baseURL + "contents",{"catalogId" : catalogId},function(r){
         
          vm.items = r;
        });
  }
})
