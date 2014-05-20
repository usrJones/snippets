$(function() {

	// värilista
	var variparkki = [

	// rivi 1
	'5c3e27',
	'e7ab72',
	'5d76b2',
	'4a6f20',
	'7a7ccc',
	'6ceca5',

	// rivi 2
	'f67f0a',
	'3d4ccf',
	'e03b51',
	'3e205d',
	'a5fe17',
	'eec508',

	// rivi 3
	'211db9',
	'4bb828',
	'b7142b',
	'fdfe03',
	'ba369c',
	'3081c4',

	// rivi 4
	'f1eeef',
	'dafdee',
	'9eb99c',
	'65756f',
	'36443c',
	'221e1f'
	];


		// for-silmukka td-elementien värien määräämisille taulukkoon
		for (var i = 0; i < 24; i++) {
			$('#'+i) .css('background-color','#'+variparkki[i]);
		}

			// klikkautoiminto väritaulukolle
			$('#colortable tr td').click(function() {
				
				// painamalla väritaulukkoa, seuraava skripti värjää colortarget -laatikon 
				// sen väriseksi kun taulukossa näkyy. Lisää myös rgb -koodin
				var takavari = $(this).css('background-color');
				$('#colortarget').css('background-color', takavari)
				$('#colorspan1').text(takavari);		
			});
			
//  Credits to http://stackoverflow.com/users/560735/hussein
var color = '';
$('#colortable tr td').click(function() {
    var x = $(this).css('backgroundColor');
    hexc(x);
	$('#colorspan2').text(color);
})

function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    color = '#' + parts.join('');
}
});