const fs = require( 'fs' );

const src = process.argv[ 2 ];
const des = process.argv[ 3 ];

fs.readdir( src, function( err, list )
{
	for ( var i = 0 ; i < list.length ; ++i )
	{
		convert( src + list[ i ], des + list[ i ] );
	}
});

function convert( src, des)
{
	fs.readFile( src, 'utf8', function ( err, text ) {
		var data = JSON.parse( text || '{}' );
		fs.writeFile( des, JSON.stringify( data, null, '' ) );
	});
}
