var vm = new Vue({
  el: '#app',
  data: {
		items:[{icon:"http://r1.ykimg.com/050C00005AA0AE15ADC0AEFD65039EBE"}]
  },
  methods: {
    play: function () {
      window.location.href="play.html";
    }
  },
  mounted:function(){
       var catalogId = getParam("catalogId");
       jQuery.getJSON(baseURL + "contents",{"catalogId" : catalogId},function(r){
         for(var i= 0;i<r.length;i++)
          vm.items = r;
        });
  }
})
