$(document).ready (function ( ) {
        $("#maxNum").keydown(function (e) {
        if (e.keyCode ==13)  {
        var fizzBuzz = $('#maxNum').val ( );
        if (isNaN(fizzBuzz) || fizzBuzz=="" || fizzBuzz<0 || fizzBuzz>100 || fizzBuzz % 1 !== 0)
          {
           alert ("Please enter integer which is less than 100! ");

            }
            else {
                   for (var i=1; i<=fizzBuzz; i++)
                    {
                        if (i%3==0 && i%5==0)
                        {
                        $('ul').append('<li>' + '<span class="fb">' +"FizzBuzz"+ '</span>' + '</li>');
                        }
                        else if (i%3==0)
                        {
                        $('ul').append('<li>' + '<span class="f">' +"Fizz"+ '</span>' + '</li>');
                        }
                        else if (i%5==0)
                        {
                        $('ul').append('<li>' + '<span class="b">' +"Buzz"+ '</span>' + '</li>');
                        }
                        else
                        {
                        $('ul').append('<li>' + i + '</li>');
                        }

                }
    }
}
});

});