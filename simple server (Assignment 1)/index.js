const http = require("http");

const PORT = 8900;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.write(`Hiya !!!`);
      break;
    case "/name":
      res.write(
        `My name is Okpe David Akor. I'm am Altschool Backend Engineering student. (NodeJs)`
      );
      break;
    default:
      res.statusCode = 404;
      break;
  }
  res.end();
});

server.listen(PORT, () => {
  console.log(`Sever is listening at port ${PORT}`);
});
