document.getElementById("analyzeBtn").onclick = async () => {
    const response = await fetch("https://YOUR_BACKEND_URL/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: "Örnek veri" })
    });

    const result = await response.json();
    document.getElementById("result").innerText = JSON.stringify(result);
};
