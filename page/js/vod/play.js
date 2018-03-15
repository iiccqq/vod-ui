var vm = new Vue({
  el: '#app',
  data: {
    videoUrl : ''
  },
  methods: {
    
  },
  mounted:function(){
       var contentId = getParam("contentId");
       jQuery.getJSON(baseURL + "content/" + contentId , function(r){
         
          vm.videoUrl = r.videoUrl;
        });
  }
})
