const fs = require( 'fs' );
const marked = require( 'marked' );

const src = process.argv[ 2 ];
const md  = process.argv[ 3 ];
const des = process.argv[ 4 ];

//https://help.github.com/articles/github-flavored-markdown/
marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: true,
	smartLists: true,
	smartypants: false
});

fs.readFile( md, 'utf8', function ( err, md )
{
	fs.readFile( src, 'utf8', function ( err, html )
	{
		html.replace( /\<\!\-\- MD \-\-\>/, marked( md ) );
		fs.writeFile( des, html );
	});
});
