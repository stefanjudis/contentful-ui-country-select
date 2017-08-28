const cli = require( 'contentful-extension-cli' );
const inquirer = require( 'inquirer' );
const { readFileSync } = require( 'fs' );
const { version, config } = require( './package.json' );
const util = require( 'util' );

async function init() {
  try {
    // const options = await inquirer.prompt( config.questions );
    const client = cli.createClient ( {
      spaceId     : 'f20lfrunubsq',
      accessToken : '992fab5e26c08c2124e33d1b24eec0f434637c52a269bb69c06bddd44182c1d2'
    } );
    const savedExtension = await client.save( {
      id: config.id,
      name: config.name,
      fieldTypes: config.fieldTypes,
      srcdoc: readFileSync( './index.html', { encoding: 'utf8' } ),
      version: 8
    } )

    console.log( savedExtension );
  } catch( error ) {
    console.error( error );
    process.exit( 1 );
  }
}

init();


