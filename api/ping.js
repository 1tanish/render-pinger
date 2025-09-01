export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.setHeader("Access-Control-Allow-Methods", "GET");

  try {
    const response = await fetch("https://skelenet.onrender.com/get-todos");
    const todos = await response.json();
    return res.status(200).json(todos);
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch todos" });
  }
}