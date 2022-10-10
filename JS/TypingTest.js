const reset = document.getElementById('reset');
const title=document.getElementById('title');
const setOfParagraphs = ["my name is vikrant singh", "I am a youtuber", "I am a programmer as well","Jim and Anne will be in charge of the spring field day to be held in early June."," They will ask their friends' aid to get set up.","There will be games for the boys and girls.","The children will want to hike, ride their bikes, and swim.","This yearly event will be held in the new Peach Grove Park."," Ruth has work to do on the plans for food for the day.","Last year Ruth spent most of her time helping the two cooks with many snacks.","Hot dogs, fries, soft drinks, ice cream, and candy apples were big sellers.","Apple pie and ice cream sold well too. I hope Ruth serves the same food this year.","George Long will hire the band and singer for the day. A great jazz band will play.","George's mom leads the group. The jazz band is sure to be one of the big hits.", "George is to have them play from one to four and also in the evening.","The fine songs they will play are sure to please all of us.","Nice gifts will be given to all of the winners in each of the events.","Local news coverage will include television and newspapers.","Joyce Scott will take care of the pictures for the school paper and yearbook", "Maybe the national news will do a short story on the tenth annual spring field day.","The greatest glory in living lies not in never falling but in rising every time we fall.",
"The way to get started is to quit talking and begin doing.",
"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
"If life were predictable it would cease to be life, and be without flavor.",
"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
"Life is what happens when you're busy making other plans.","The purpose of our lives is to be happy.",
"Get busy living or get busy dying","You only live once, but if you do it right, once is enough.",
"Many of life’s failures are people who did not realize how close they were to success when they gave up.”– Thomas A. Edison"];
const text = document.getElementById('text');
        const textarea = document.getElementById('textarea');
        const button = document.getElementById('start');
        let start, end;
        const playGame = () => {
            let random = Math.floor(Math.random() * setOfParagraphs.length);
            text.innerHTML = setOfParagraphs[random];
            let date = new Date();
            start = date.getTime();
            button.innerHTML = "Stop";
            title.innerHTML="Typing Speed Test";
        }
        const endGame = () => {
            let date = new Date();
            end = date.getTime();
            let totalTime = ((end - start) / 1000);
            let totalString = textarea.value;
            let wordCount = wordCounter(totalString);
            let time = Math.round((wordCount / totalTime) * 60);
            let final = "You typing speed is " + time + " per minute. ";

            final += compareWords(text.innerText, totalString);
            text.innerText = final;
            textarea.value="";
            title.innerHTML="Press enter for more";

        }
        const compareWords = (str1, str2) => {
            let word1 = str1.split(" ");
            let word2 = str2.split(" ");
            let count = 0;
            word1.forEach(function (item, index) {
                if (item == word2[index]) {
                    count++;
                }
            })
            let errorWords = (word1.length - count);
            if(errorWords<=3){
            return ("Well done mate, "+count + " correct out of " + word1.length + " words and the total number of errors are " + errorWords + ".");
            }
            else if(errorWords<=6){
                return ("Good work, "+count + " correct out of " + word1.length + " words and the total number of errors are " + errorWords + ".");

            }
            else{
                return ("You can do much better, " +count + " correct out of " + word1.length + " words and the total number of errors are " + errorWords + ".");

            }
        }
        const wordCounter = (str) => {
            let response = str.split(" ").length;
            return response;
        }
        button.addEventListener('click', function () {
            if (this.innerHTML == 'Start') {
                textarea.disabled = false;
                playGame();
            }
            else if (this.innerText == 'Stop') {
                button.innerText = "Start";
                endGame();
            }
           
        });
        document.onkeydown = function(evt) {
            evt = evt || window.event;
            if (evt.keyCode == 27) {
                reset.click();
            }
        };
            
         
    
        document.addEventListener("keypress", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("start").click();
  }
 
 
});
