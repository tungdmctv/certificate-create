import express from "express";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);
import Create from "./index.js";

app.get("/", function (req, res) {
  const CertCreate = new Create(2000, 1545);
  CertCreate.AddText(
    "Thossaporn Boonyarangkul",
    "center",
    50,
    "./node_modules/certificate-create/font/NotoSerifThai.ttf",
    "#1b06b3",
    595
  );
  const filename = "FileNametoExport.png";
  const buffer = CertCreate.ExportImage("DMK.png", filename);

  res.download(filename, filename, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
});

httpServer.listen(3000, function () {
  console.log("listening on *:3000");
});
