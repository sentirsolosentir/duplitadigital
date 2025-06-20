export default function handler(req, res) {
  if (req.method === "POST") {
    const intent = req.body.queryResult?.intent?.displayName;
    let responseText = "";

    switch (intent) {
      case "Default Welcome Intent":
        responseText = "Hola, soy Duplita Digital. ¿Qué deseas saber?";
        break;
      case "Duplita":
        responseText = "Fui creada por Stephany, una publicista y psicóloga brillante. Estoy aquí para ayudarte 💫";
        break;
      default:
        responseText = "¡Duplita aún está aprendiendo eso! ¿Quieres preguntarme otra cosa?";
    }

    res.status(200).json({ fulfillmentText: responseText });
  } else {
    res.status(405).json({ message: "Only POST requests allowed" });
  }
}
