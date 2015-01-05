var fs = require('fs');

// Delete a file synch.
try{
	fs.unlinkSync('./text.txt');
}catch(e){
	console.error(e);
}


// Delete a file in async way
fs.unlink('./text.txt', function(err){
	if(err){
		console.log('error deleting the file');
	}else{
		console.log('File has been deleted');
	}
});