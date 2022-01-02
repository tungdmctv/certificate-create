import fs from "fs";
import canvas from "canvas";
import path from "path";

class CCreate {
  constructor(w, h) {
    this.text = [];
    this.width = w;
    this.height = h;
    this.canvas = canvas.createCanvas(this.width, this.height);
    this.context = this.canvas.getContext("2d");
  }

  ExportImage(imagePath = "DMK.png", name = "Cert.png") {
    canvas.loadImage(imagePath).then((image) => {
      this.context.drawImage(image, 0, 0, this.width, this.height);
      this.text.forEach((t) => {
        const fontFamily = path.basename(t.font).split(".")[0];
        canvas.registerFont(t.font, { family: fontFamily });
        //console.log(fontFamily);
        this.context.font = "bold " + t.size + "pt " + fontFamily;
        this.context.textAlign = t.align;
        this.context.fillStyle = t.color;
        this.context.fillText(t.text, this.width / 2, t.textpos);
        //console.log("Added Text " + t.text);
      });
      this.buffer = this.canvas.toBuffer("image/png");
      fs.writeFileSync(name, this.buffer);
      console.log("export image : " + name);
      return this.buffer;
    });
  }

  AddText(
    text = "Your Name",
    align = "center",
    size = 30,
    font = "./font/NotoSerifThai.ttf",
    color = "#000000",
    textpos = 1000
  ) {
    this.text.push({ text, align, size, font, color, textpos });
  }
}

export default CCreate;
