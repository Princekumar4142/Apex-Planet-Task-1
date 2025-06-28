document.addEventListener('DOMContentLoaded', function() {
    const launchAlertBtn = document.getElementById('launchAlertBtn');
    const missionInteractionsSpan = document.getElementById('missionInteractions');
    let interactionCount = 0;

    // Button aur span elements exist karte hain ya nahi, check karein
    if (launchAlertBtn && missionInteractionsSpan) {
        launchAlertBtn.addEventListener('click', function() {
            // Ek alert message trigger karein
            alert('Launch Alert: System Initiated! Welcome to ApexPlanet!');

            // Interaction count badhaein
            interactionCount++;

            // Span element mein text ko update karein
            
        });
    } else {
        // Agar elements nahi mile to console mein error dikhayein
        console.error("Required elements (launchAlertBtn or missionInteractionsSpan) not found.");
    }
});