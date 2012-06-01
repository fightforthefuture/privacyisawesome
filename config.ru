use Rack::Static , :urls => { 
    "/" => "index.html", 
    "/index.html" => "index.html",
    "/letter" => "letter/index.html",
    "/cover" => "cover/index.html",
    "/test" => "test/index.html",
    "/test/" => "test/index.html",
    "/cover/" => "cover/index.html",
    "/letter/" => "letter/index.html",
    "/thanks/" => "thanks/index.html", 
    "/thanks" => "thanks/index.html", 
    "/confirm" => "confirm/index.html", 
    "/confirm/" => "confirm/index.html", 
    } , :root => "public"

run Rack::URLMap.new({
  "/"      => Rack::Directory.new("public"),
})
