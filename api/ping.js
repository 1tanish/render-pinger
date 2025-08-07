export default async function handler(req, res) {
  try {
    const response = await fetch("https://portfoli0-9n2k.onrender.com/get-todos");
    return res.status(200).send("Pinged Render with status: " + response.status);
  } catch (err) {
    return res.status(500).send("Ping failed");
  }
}