// const jokes = document.getElementById("joke-container");                           //variable to target jokes container
// const jokeSubmissions = document.getElementById("jokeSubmissions");        //variable to target placeholder div to display messages
// const submissionsArray = [];                                            //variable to store submissions in an empty array

// jokes.addEventListener("submit", function (event) {                      //queue action once comment button is hit
//                                                                 //page will refresh each time

//     const parent = document.getElementById("dadContainer");                //target input name's value (text in name field)


//     const submissionData = {   
//         parent,
//     };

//     submissionsArray.push(submissionData);    //??????      POST TO API NOT PUSH// //push the submission data to the placeholder div in HTML

//     form.reset();                                                       //clear form fields after submission is recieved

//     updateSubmissionsDisplay();                                         //call a function that shows submissions
// });

// ////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////


// function updateSubmissionsDisplay() {       //clear existing content in the formSubmission element
//     formSubmissions.innerHTML = "";

//     submissionsArray.forEach((submissionData) => {
//         const submission = document.createElement("div");       //creates container for submissions
//         submission.classList.add("parent");                    // Adds a class to the submission container


//         const comment = document.createElement("p");            //create paragraph element for the comment
//         comment.classList.add("parent__body");
//         comment.textContent = submissionData.comment;

//         submission.appendChild(comment);                    //append comment

//         formSubmissions.appendChild(submission);
//     });
// }



// const fetchComments = async () => {
//     const commentData = await axios.get(`${apiRoot}comments${apiKey}`)    //make get request to API key
//     addCommentsToDOM(commentData.data);
// }
// //////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////

// const apiRoot = "https://project-1-api.herokuapp.com/"  //make api key a variable incase it changes


// class BandsiteAPI {             //create classed called BandSiteAPI
//     constructor(apiRoot) {
//         this.apiRoot = apiRoot;
//         this.baseURL = "https://icanhazdadjoke.com/api";
//     }

//         async getComments(){           //get comments
//             try {
//             const response =  await axios.get(`https://icanhazdadjoke.com/j/<joke_id>`);
//                 console.log(getComments);
//             }
//             catch (error) {
//                 console.error("Need another beer", error);
//                 return error;
//             }
//         }
// }
// getComments();

// export default BandsiteAPI;





// jokes.addEventListener("submit", function()) {  

//     function fetchJoke() {
//         const jokeContainer = document.getElementById('dad-container')
//       }

//       updateSubmissionsDisplay();
// }

// const updateSubmissionsDisplay {       //clear existing content in the formSubmission element
//     formSubmissions.innerHTML = "";


// }

// by tonight, make sure we can console log a joke

// tomorrow we'll work on styling and other stuff


// const jokeAPI = "https://icanhazdadjoke.com/j/R7UfaahVfFd"
// const getJoke = async() => {
//     try {
//         const response = await axios.get(jokeAPI);  //with an error and you have to follow api instructions, you may have to add a second parameter after gameAPIURL
//         console.log(response)
//     } catch (error) {
//         console.log(error);
//     }
// };
// getJoke();



//             const triviaAPIURL = "http://jservice.io/api/random"
//             async function fetchQuestion (){
//                 try{                            
//                     const response = await axios.get(triviaAPIURL);    
//                     console.log(response.data.question);         //specify which data you want to display as response  
//                     return response;  
//                 } catch (error) {
//                     console.log("ERROR", error)                     //console.log "error"
//                 }

//                 }
//                 fetchQuestion();

// target the button
// when we click the button, we want text to console.log

// how to display to a section on the website as innertext/text content

// const jokes = document.querySelector("dad-container__button");                           //variable to target jokes container



// class APIKey {            
//  constructor(apiRoot) {
//     this.apiRoot = apiRoot;
//     this.baseURL = "https://icanhazdadjoke.com/api";
// }
//  }
// console.log(APIKey)

// class TriviaApi {
//     constructor () {
//         this.baseUrl = "https://icanhazdadjoke.com/j/R7UfaahVfFd";
//     }
//     fetchTrivia = async () => {
//         try {
//             const response = await axios.get(`${this.baseUrl}`);
//             console.log(response.data)
//             // console.log(response.data[0].question);
//             const question = response.data
//             return question;
//         }   catch(error) {
//             console.error(error);
//         }
//     }
//     fetchTriviaAnswer = async () => {
//         try {
//             const response = await axios.get(`${this.baseUrl}`);
//             console.log(response.data)
//             // console.log(response.data[0].question);
//             const answer = response.data
//             return answer;
//         }   catch(error) {
//             console.error(error);
//         }
//     }
// }

// const newInstanceTriviaAPI = new TriviaApi()

// async function waitFoTrivia () {
//     const trivia = await newInstanceTriviaAPI.fetchTrivia();   //////here is the data being pulled using await
//     console.log(trivia)
//     incomingJokes(trivia)
// }
// waitFoTrivia();


const apiUrl = 'https://icanhazdadjoke.com/';

dadContainer.addEventListener("submit", function () {
    const updateSubmissionsDisplay = document.getElementById("joke-container");
});

function reload() {
    window.location.reload();
}



// Function to fetch and display a random joke
async function fetchRandomJoke() {

  const jokeContainer = document.getElementById('joke-container');

  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',      }
    });

    if (response.ok) {
      const data = await response.json();
      const joke = data.joke;

      // Display the joke in your HTML
      jokeContainer.innerText = `${joke}`;
    } else {
      jokeContainer.innerText = 'Failed to fetch a joke.';
    }
  } catch (error) {
    jokeContainer.innerText = `Error: ${error.message}`;
  }
}

// Call the function to fetch and display a random joke
fetchRandomJoke();