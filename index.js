
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  const intent = req.body.queryResult.intent.displayName;
  let responseText = "";

  switch (intent) {
    case "Default Welcome Intent":
      responseText = "Hola, soy Duplita Digital. ¿Qué deseas saber?";
      break;
    default:
      responseText = "¡Duplita aún está aprendiendo eso!";
  }

  res.json({
    fulfillmentText: responseText,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
