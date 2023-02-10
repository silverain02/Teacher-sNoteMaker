async function quickstart() {
  // Imports the Google Cloud client library
  const language = require('@google-cloud/language');

  // Instantiates a client
  const client = new language.LanguageServiceClient();

  // The text to analyze
  const text = 'Hello, world!';

  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  // Detects the sentiment of the text
  const [result] = await client.analyzeSentiment({document: document});
  const sentiment = result.documentSentiment;

  console.log(`Text: ${text}`);
  console.log(`Sentiment score: ${sentiment.score}`);
  console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
}

async function analyzeSentiment() {
  // Imports the Google Cloud client library
  const language = require('@google-cloud/language');

  // Creates a client
  const client = new language.LanguageServiceClient();

  // The text to analyze
  const text = "Grapes are good";

  // Prepares a document, representing the provided text
  const document = {
  content: text,
  type: 'PLAIN_TEXT',
  };

  // Detects sentiment of entities in the document
  const [result] = await client.analyzeEntitySentiment({document});
  const entities = result.entities;

  console.log('Entities and sentiments:');
  entities.forEach(entity => {
  console.log(`  Name: ${entity.name}`);
    console.log(`  Type: ${entity.type}`);
    console.log(`  Score: ${entity.sentiment.score}`);
    console.log(`  Magnitude: ${entity.sentiment.magnitude}`);
  });
}

async function analyzeSyntax() {
  // Imports the Google Cloud client library
  const language = require('@google-cloud/language');

  // Creates a client
  const client = new language.LanguageServiceClient();

  const text = "This is a pretty pen.";

  // Prepares a document, representing the provided text
  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  // Need to specify an encodingType to receive word offsets
  const encodingType = 'UTF8';

  // Detects the sentiment of the document
  const [syntax] = await client.analyzeSyntax({document, encodingType});

  console.log('Tokens:');
  syntax.tokens.forEach(part => {
    console.log(`${part.partOfSpeech.tag}: ${part.text.content}`);
    console.log('Morphology:', part.partOfSpeech);
  });
}


//call function
quickstart()
analyzeSentiment()
analyzeSyntax()
