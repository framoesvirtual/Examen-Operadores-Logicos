document.addEventListener("DOMContentLoaded", () => {
    const checkbox1 = document.getElementById("checkbox1");
    const checkbox2 = document.getElementById("checkbox2");
    const andResult = document.getElementById("andResult");
    const orResult = document.getElementById("orResult");
    const xorResult = document.getElementById("xorResult");

    function updateResults() {
        const val1 = checkbox1.checked;
        const val2 = checkbox2.checked;

        andResult.innerHTML = val1 && val2 ? "✅ <span style='color:#28a745'>True</span>" : "❌ <span style='color:#dc3545'>False</span>";
        orResult.innerHTML = val1 || val2 ? "✅ <span style='color:#28a745'>True</span>" : "❌ <span style='color:#dc3545'>False</span>";
        xorResult.innerHTML = val1 !== val2 ? "✅ <span style='color:#28a745'>True</span>" : "❌ <span style='color:#dc3545'>False</span>";
    }

    checkbox1.addEventListener("change", updateResults);
    checkbox2.addEventListener("change", updateResults);
});