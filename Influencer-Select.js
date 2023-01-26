

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

function selectCard(){
    $(document).ready(function(){
        $(".card").click(function(){
          $(this).css("border","5px darkorange solid");
        });
      });
}
