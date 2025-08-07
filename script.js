const list = document.getElementById("todo-list");
const loadingText = document.querySelector(".loading");

(async () => {
  try {
    const res = await fetch("/api/ping");
    const todos = await res.json();
    loadingText.style.display = "none";

    if (!todos.length) {
      list.innerHTML = "<li>No todos found.</li>";
      return;
    }

    todos.sort((a, b) => a.done - b.done).forEach((todo) => {
      const item = document.createElement("li");
      item.textContent = todo.text;
      if (todo.done) item.classList.add("done");
      list.appendChild(item);
    });
  } catch (err) {
    loadingText.textContent = "Failed to load todos.";
    console.error(err);
  }
})();