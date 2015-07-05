To run this site:

I work on a chromebook, so I use c9.io to do my development work. It serves index.html here: 
https://optimization-elifeasley.c9.io/index.html

To make index.html more performant, I put the stylesheets and javascript into a deferred loading function.
I also only load print.css when the page is actually meant to be printed.

I also compressed the pizzeria image and put it in a thumbnails folder.

My mobile pagespeed is now 97 and my desktop pagespeed is now 96.

To speed up the pizzeria, I noticed a few places where a lot of work was happening
in loops that could happen outside of them.

The time to generate my pizzas on load is 57 ms
After the first frame, my frames take 2-5 ms to generate.
Changing my pizza size takes <3 ms.

