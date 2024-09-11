function calculatePoints() {
    // Get input values
    const wins = parseInt(document.getElementById('wins').value) || 0;
    const draws = parseInt(document.getElementById('draws').value) || 0;
    const losses = parseInt(document.getElementById('losses').value) || 0;
    
    // Calculate points
    const points = (wins * 3) + (draws * 1); // Assuming each win = 3 points and each draw = 1 point

    // Display result
    document.getElementById('result').innerHTML = `Total Points: ${points}`;
}
