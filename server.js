import "dotenv/config";
import app from "./src/app.js";

const PORT = 8000;

app.listen(PORT, () => { // evento que monitora o servidor. 
      console.log(`server running in port => ${PORT}`)
});


