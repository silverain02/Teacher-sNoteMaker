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

// Need to specify an encodingType to receive word offsets
const encodingType = 'UTF8';

async function analyzeStr() {
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

    // Detects the sentiment of the document
    const [syntax] = await client.analyzeSyntax({document, encodingType});
}