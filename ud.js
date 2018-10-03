
    var mp3 = new Audio ('https://www.0page.org/wp-content/uploads/2017/04/Anno-Satori-恋色マスタースパーク.mp3');
    mp3.preload = "auto";
    var mp4 = new Audio ('https://www.0page.org/wp-content/uploads/2017/04/Anno-Satori-恋色マスタースパーク.mp3');
    mp4.preload = "auto";
/*置顶置底*/
   $(function(){
        $("#updown > #lamu img").eq(0).click(function(){$("html,body").animate({scrollTop :0}, 800);
        
            if (mp3.paused){
                mp3.play();
            }else{
                mp3.pause();
            }
        return false;});
        $("#updown > #leimu img").eq(0).click(function(){$("html,body").animate({scrollTop : $(document).height()}, 800);
        
            if (mp4.paused){
                mp4.play();
            }else{
                mp4.pause();
            }return false;});
      });

