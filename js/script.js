// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called


/*creating array of JavaScript objects  */
var quotes = [
          {
            quotes: "Preoccupied with a single leaf you won't see the tree. ",
            source: "Vagabond",
            citation : "in the road",
            category: "LIFE",
          },
          {
            quotes : "An outside enemy exists only if there is anger inside.",
            source: "Lama Zopa Rinponche",
            citation: "Advice in FPMT",
            category: "Buddhist",
          },
        {
          quotes:"Life itself is your teacher,and you are in a state of constant learning",
          source:"Bruce Lee",
          citation:"2000 quotes of Bruce Lee",
          category:"Martial Arts",
        },
        {
          quotes:"An eye for an eye….we are all blind" ,
          source:"Dalai Lama",
          citation:"public talk",
          category:"Buddhist",
        },
        {
          quotes:"Challenge yourself; it’s the only path which leads to growth." ,
          source:"Morgan Freeman",
          citation:"interview with Freeman",
          category:"Actor"
        },{
          quotes: "Tourism is sin, and travel on foot virtue.",
          source:"Werner Herzog",
          citation:"Minnesota declaration",
          category:"Director",
        },{
          quotes: "Le pido al cine lo que muchos estadounidenses le piden a las drogas psicodélicas" ,
          source:"Alejandro Jodorowsky",
          citation: "Rodando el Topo",
          category: "Director"
        },{
          quotes: "Life is a winking light in the darkness",
          source:"Hayao Miyazaki",
          citation:"in the Kitchen",
          category:"Director",
        },{
          quotes:"According to the Buddhist point of view, there is no human problem that cannot be solved by human beings."  ,
          source:"Lama Yeshe",
          citation:"The Essence of Tibetan Buddhism",
          category:"buddhist",
        },{
          quotes: "The mind was dreaming. The world was its dream.",
          source: "Jorge Luis Borges",
          citation:"Entrevista",
          category:"Writers",
        },{
          quotes: "Push-ups, sit-ups, and a strict diet of raisins. That's my plan.",
          source:"Jack Black",
          citation:"in the morning",
          category:"Comedy",
        },{
          quotes: "Strong minds discuss ideas, average minds discuss events, weak minds discuss people.",
          source: "Socrates",
          citation:"ten quotes of socrates",
          category:"philosophy"
        },{
          quotes: "Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love.",
          source:"Lao Tzu",
          citation:"Art of War",
          category:"Martial Arts",
        },{
          quotes:" Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
          source: "Albert Einstein",
          citation:"in the laboratory",
          category:"Brilliant Minds",
        },
        ];

        /*creating variables*/
        var x = document.body;
        var b = 0;
        var quotePrint = '';
        var automaticFantastic = setInterval(printQuote, 15000); /*set interval to change background color */
        var copyQuotes = []; /*creating variable to save objects before deleting */


          function getRandomQuote () {
            if (quotes.length ===  0) { /*checking state of quotes, and recovery data come from copyQuotes */
              quotes = copyQuotes.concat(quotes);
              copyQuotes.splice(0,copyQuotes.length);
            }
                b = Math.floor(Math.random() * quotes.length); /*generate value for choose index*/
          }

          function printQuote() {
                getRandomQuote();  /*calling data for print*/

                document.getElementById('quote-box').innerHTML =   /*print all stuff*/
                '<p class="quote">' + quotes[b].quotes + '</p>' +
                '<p class="source">' + quotes[b].source +
                '<span class="citation">' + quotes[b].citation + '</span>' +
                '<span class="year">' + quotes[b].category + '</span></p>'

                  /*generator RGB color for background and applying in x body*/
                  x.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

                console.log(quotes.length, 'quotes');   /*Observer in console to check movements in data */
                console.log(copyQuotes.length, ' quotescopy ');

                copyQuotes.push(quotes[b]);  /*push object to other array objects */
                quotes.splice(b, 1);        /*take out one object to prevent repetitions */
          }

          document.getElementById('loadQuote').addEventListener("click", printQuote, false);

          /*i am learning english, thank you for the patience*/
