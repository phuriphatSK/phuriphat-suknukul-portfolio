export const handleDownloadExternal = () => {
  // วางไฟล์ใน public folder หรือ CDN
  const resumeUrl = "/Resume.pdf";
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = "Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
