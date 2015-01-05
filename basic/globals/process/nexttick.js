/// It puts a function in the next event loop's cycle
process.nextTick(function(){
	console.log('next tick');
});

console.log('immediate');

/// This should be the output:
/// => 'immediate'
/// => 'next tick'