const chokidar = require("chokidar")
const { execSync } = require("child_process")

// One-liner for current directory
chokidar
  .watch("/docker/mysite/app", {
    ignored: [/node_modules/, /.git/],
  })
  .on("add", (path) => {
    console.log(path)
  })
  .on("add", (path) => {
    execSync(`chown -R mysite:mysite ${path}`)
  })
