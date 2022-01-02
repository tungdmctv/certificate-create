# Certification Card Image Creator

​	This is JS module to create easy certificate card image. It allows you to create texts and customize font, color, size, position and add these texts to the certification card image.

![Example image](https://gallery.dmc.tv/cards/4506.png)


## Installation

```sh
npm install certificate-create
```

 

## Usage

```js
import Create from "certificate-create";

const CertCreate = new Create(2000, 1545);

CertCreate.AddText(
  "Name to Certificate",
  "center",
  50,
  "./node_modules/certificate-create/font/NotoSerifThai.ttf",
  "#1b06b3",
  595
); 
// name , align , font size pt, font family, color, vertical position px

CertCreate.ExportImage("DMK.png", "FileNametoExport.png"); 
// background image , filename

```



## Run with Express

```js
import express from "express";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);
import Create from "certificate-create";;

app.get("/", function (req, res) {
  const CertCreate = new Create(2000, 1545);
  CertCreate.AddText(
    "Name to Certificate",
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
```
