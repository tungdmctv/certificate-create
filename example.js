import Create from "certificate-create";

const CertCreate = new Create(2000, 1545);
CertCreate.AddText(
  "Name to Certificate",
  "center",
  50,
  "./node_modules/certificate-create/font/NotoSerifThai.ttf",
  "#1b06b3",
  595
); // name , align , font size pt, font family, color, vertical position px

CertCreate.ExportImage("DMK.png", "FileNametoExport.png"); // background image , filename
