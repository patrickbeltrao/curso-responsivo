$(function(){
    $('.botaoMenu').click(function(event){
        event.stopPropagation();
        if(!$(this).hasClass('menuAtivo')){
            $(this).addClass('menuAtivo');
            $('nav ul').animate({'left':'0px'}, 300);
        }else{
            $(this).removeClass('menuAtivo');
            $('nav ul').animate({'left': '-100%'}, 300);
        }
    });

    $('body').on('click', function(){
        $('botaoMenu').removeClass('menuAtivo');
        $('nav ul').animate({'left':'-100%'}, 300);
    })

    $('.fancybox').fancybox({
        openEffect  : 'elastic',
        openSpeed: 150,
        closeEffect : 'none',

        prevEffect : 'none',
        nextEffect : 'none',

        closeBtn  : false,

        helpers : {
            title : {
                type : 'inside'
            },
            buttons	: {}
        },

        afterLoad : function() {
            this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
        }
    });

});
 