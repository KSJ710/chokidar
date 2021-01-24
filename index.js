const chokidar = require("chokidar")

// One-liner for current directory
chokidar
  .watch("/docker/mysite/app", {
    persistent: true,
  })
  .add("new-file", (event, path) => {
    console.log(event, path)
    const stdout = execSync("chown -R mysite:mysite /home/mysite/app")
    console.log(stdout)
  })
