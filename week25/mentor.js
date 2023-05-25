function rank() {
    const pointInput = document.getElementById("point");
    const batchInput = document.getElementById("batch");
  
    const point = pointInput.value;
    const batch = batchInput.value;
  
    if (batch >= 100 && point >= 50000) {
      alert("Ranger, good job!");
    } else {
      alert("Still not a Ranger, practice more!");
    }
  }