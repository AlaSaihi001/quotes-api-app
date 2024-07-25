const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

let apiQuotes = []

// Show loading
function loading() {
  loader.hidden = false
  quoteContainer.hidden = true
}

function complet() {
  loader.hidden = true
  quoteContainer.hidden = false
}

//Show new quote
function newQuote(){
  //Pick random quote from apiQuote array
  const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)]
  // Check if the author fields is blank and replace it with 'unknown'
  if(!quote.author){
    authorText.textContent = 'Unkown'
  }else{
    authorText.textContent = quote.author
  }

  //Check quote length to add styling
  if(quote.text.length > 120){
    quoteText.classList.add('long-quote')
  }else{
    quoteText.classList.remove('long-quote')
  }
  quoteText.textContent = quote.text
  complet()
}

// Get quotes from API
async function getQuotes(){
  loading()
  const apiUrl = 'https://alasaihi001.github.io/ala.github.io/Data/Quotes.json'
  try{
    const response = await fetch(apiUrl)
    apiQuotes = await response.json()
    newQuote()

  } catch(error){
    //catch error here
  }


}

// Tweet quote
function tweetQuote(){
  loading()
  const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}` 
  window.open(tweetUrl, '_blank')
}

// EventListeners
twitterBtn.addEventListener('click', tweetQuote)

newQuoteBtn.addEventListener('click', newQuote)


getQuotes()















/**Math
 * Math.floor      
 * Math.ceil
 * Math.round
 * 
 *            floor      ceil       round
 * 1.1
 * 2.8
 * 1.5
 * 5.4
 * 
 * 
 * /*/