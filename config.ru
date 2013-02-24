use Rack::Static, 
	:urls => ["/app", "/libs", "/css", "/steal"],
	:root => "public"

run lambda { |env|
	[
	200,
	{
		'Content-Type'  => 'text/html', 
		'Cache-Control' => 'public, max-age=86400' 
	},
	File.open('public/index.html', File::RDONLY)
	]
}