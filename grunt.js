/*global module:false*/
module.exports = function(grunt) {

	grunt.initConfig({
	});

	grunt.registerTask('compliment', function() {
		grunt.log.writeln('You are so awesome!');
	});


	// Default task.
	grunt.registerTask('default', 'compliment');

};