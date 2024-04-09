// for normal JavaScript
// document.addEventListener('DOMContentLoaded',function(){


// using jQuery
//$(document).ready(function(){
  
// more shorthanded jQuery
$(function(){
    const add_head = ()=>{
        console.log('Hello There!!')
        const h1 = document.createElement('h1');
        h1.textContent = 'Radhe Radhe !!';
    
        const h2 = document.createElement('h2');
        h2.textContent = 'Hare Krishna!!';
    
        const h3 = document.createElement('h3');
        h3.textContent = 'Hare Ram!!';
    
        const h4 = document.createElement('h4');
        h4.textContent = 'Ram Ram!!'
    
        const h5 = document.createElement('h5');
        h5.textContent = 'Hare Hare!!';
    
        const h6 = document.createElement('h6');
        h6.textContent = 'Radhe Shyam!!';
    
        const h = [h1,h2,h3,h4,h5,h6];
    
        for(let i=0;i<h.length;i++){
            document.body.appendChild(h[i]);
        }
        
    
        console.log('Complete!!');
    };
    
    add_head();

    // $('h2').click(function(){
    //     $('h6').hide();
    // });

    $('h3').click(function(){
        $('h6').show();
    })
    
    // $('h1').mouseenter(function(){
    //     console.log('mouseenter event');
    //     $('h4').hide();
    // });

    // $('h1').mouseleave(function(){
    //     console.log('mouseleave event');
    //     $('h4').show();
    // })

    // $('h1').hover(
    //     // mouse enter hover event function
    //     function(){
    //     // console.log('mouse enter');
    //     $('h4').hide(450, function(){
    //         console.log('slow hide!!');
    //     });
    // },
    
    // // mouse leave hover event function
    // function(){
    //     // console.log('mouse leave')
    //     $('h4').show(450, function(){
    //         console.log('slow show!!')
    //     });
    // }
    // )

    $('h1').hover(function(){
        $('h4').toggle(450);
    });


    $('h1').click(function(){
        // $('h4').fadeIn(700);
        // $('h5').fadeOut(1000);
        // $('h4').fadeToggle(1000);

        $('h4').fadeToggle(function(){
            $(this).fadeTo(1000,0.5)
    });
    })


    
    $('h6').mousedown(function(){
        alert('mouse down event trigger');
    })

    $('h5').click(function(){
        $(this).css('color', 'blue');
    });

    $('h2').on({
        mouseenter: function(){
            $(this).css('background-color', 'rebeccapurple');
            $(this).css('color', 'white');
        },
        click: function(){
            $(this).css('background-color', 'lightgrey');
            $(this).css('color', 'rebeccapurple');
        },
        mouseleave: function(){
            $(this).css('color', 'black');
            $(this).css('background-color', 'white');
        }
    })


    // slideDown, slideUp and slideToggle
    
    $('h4').click(function(){
        $('h2').slideUp(450);
    });

    $('h3').click(function(){
        $('h2').slideDown(450);
    })

    $('h5').click(function(){
        $('h2').slideToggle(450);
    })


    


});