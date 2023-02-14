// Imports the Google Cloud client library
const language = require('@google-cloud/language');
// Instantiates a client
const client = new language.LanguageServiceClient();
// The text to analyze
const text = 'She is my good friend';
const document = {
  content: text,
  type: 'PLAIN_TEXT',
};
// Need to specify an encodingType to receive word offsets
const encodingType = 'UTF8';


async function getSyntax() {
    //api호출 -> arr 할당
    const [syntax] = await client.analyzeSyntax({document, encodingType});
  
    console.log('Tokens:');

    syntax.tokens.forEach(part => {
      console.log(`${part.partOfSpeech.tag}: ${part.text.content}`);
      console.log('Morphology:', part.partOfSpeech);
    });
  }

  getSyntax()