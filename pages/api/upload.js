import multiparty from "multiparty";

const handle = async (req, res) => {
  const form = new multiparty.Form();
  const { fields, files } = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
  console.log("length:", files.file.length);
  console.log(files);
};

export const config = {
  api: { bodyParser: false },
};

export default handle;
