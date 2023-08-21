-------GoodNight Counter-------

🔗 Project Link : [GoodNight Counter](https://boobagreen.github.io/-S2I-JS-base---sheep-counter/)

Project realized for the [Start2Impact](https://www.start2impact.it/) "Javascript Basics" course.
The demands of the exercise:Let's create a simple application that works as a counter.
Develop a JavaScript application that allows the user to increase and decrease the value of the counter.
As soon as the user enters the page, he will see 0 as the counter value and will have two +/- buttons available to change the counter value.
You can change the value by pressing "-" and "+" buttons and reset the value with the "reset" button.
When you push the "+" or "-" key the counter moves by a corresponding unit and the sheep moves forward in case of "+" and backward in case of "-"
When the reset button is pressed, the sheep returns to the starting point and the message "GoodNight Counter" appears instead of the counter
The application must be developed with JavaScript. The use of Jquery is not allowed, the use of any framework is not allowed (React, Angular, Vue...).
The use, if necessary, of external JavaScript libraries is permitted.
The +/- buttons, and also the display of the counter value must be implemented with JavaScript.
Any additional features deemed necessary are allowed.

Screenshots :

![It shows the 3 colored control buttons , a starry sky, the sheep that will move back and forth , the fence and the ground . In the middle the project name which will be replaced by the counter value when activated](/assets/img/scr.png)

This site was built using [GitHub Pages](https://pages.github.com/).

🔗 Social Links

Claudio Dall'Ara : [Portfolio](https://boobagreen.github.io/portfolio/).

Claudio Dall'Ara : [Linkedin](https://www.linkedin.com/in/claudio-dall-ara-244816175/).

Idea:

I noticed that the counter is a classic basic exercise in Javascript courses, you can find dozens of examples everywhere, I wanted to do something original and thinking about a counter .... the thing that immediately jumped into my mind was counting sheep, like I did as a child when I wanted to fall asleep

Technical path:

In this case I also had to deepen the concept of Canvas which I still wanted to study and even if it is a very vast and powerful topic if studied in depth in every aspect, now I think I'm starting to understand something.

The starry sky is not an image but it is procedurally generated in javascript with the "draw_sky" file , this makes each use of the counter a somewhat unique experience and I really like this aspect of the project.

The sheep is a canvas, and the ground together with the obstacle is another canvas.

I also wanted to add some sounds, which initially as you can see from the provisional version were different, then with the input of the Star2Impact community I transformed it in a more sympathetic way.
When the sheep moves forward there is a sound reminiscent of a jump, for reset a sheep bleat, and for backward movement a sound reminiscent of old tape winding (rew)

The choice of font was important and sought after because it was part of the design in a decisive way. I am very happy with what I found, I think it fits very well with the project as a whole.
in this regard I had a technical difficulty on the use of particular fonts with Github Page. The path for the fonts in the index.scss file must be one to work correctly locally on Visual studio code (indexvs.txt) and the other to work correctly on Github Page (indexgit.txt) hence the index.scss file currently it is the copy of indexgit.txt but if you want to work locally displaying the font correctly you need to replace the content of index.scss with that of indexvs.txt and vice versa.
I couldn't find a more comfortable mode, I think it's a small limitation of Githib Page but I still wanted to use this tool for publishing because in other respects it is very comfortable for me.

The design of the buttons and the lighting of the base plate are totally original and made after various less fortunate attempts, but in this process as in the others of the project I am happy to have created something original and totally autonomously, following a precise idea but also letting myself be guided by inspiration and attempts, let's say I followed a standard that I had in mind but I didn't hold back in experimenting with some variations on the theme, a bit like in jazz Music.

The design of the project has gone through many intermediate stages, one of the latest stages of progress is for example this: [Provisional version](https://boobagreen.github.io/Counter/)
