// Attach an event listener to the form
document.getElementById("tourist-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission
    
    // Collect form values
    const climate = document.getElementById("climate").value;
    const destinationType = document.getElementById("destinationType").value;
    const budget = document.getElementById("budget").value;
    const activities = Array.from(document.querySelectorAll('input[name="activities"]:checked')).map(el => el.value);
    const duration = document.getElementById("duration").value;
    const travelingWith = document.getElementById("travelingWith").value;

    // Destination logic for the Netherlands
    let destination = '';

    // Beach destinations
    if (destinationType === 'beach') {
        if (budget === 'high') {
            destination = 'Texel Island';
        } else if (budget === 'medium') {
            destination = 'Scheveningen, The Hague';
        } else {
            destination = 'Zandvoort';
        }

    // Nature reserves
    } else if (destinationType === 'nature') {
        if (activities.includes('adventure')) {
            destination = 'Biesbosch National Park for canoeing';
        } else if (budget === 'high') {
            destination = 'Hoge Veluwe National Park';
        } else {
            destination = 'Oostvaardersplassen Nature Reserve';
        }

    // City destinations
    } else if (destinationType === 'city') {
        if (activities.includes('cultural')) {
            if (budget === 'high') {
                destination = 'Amsterdam (Museums and Canals)';
            } else {
                destination = 'Leiden (Historic City Center)';
            }
        } else if (activities.includes('nightlife')) {
            destination = 'Rotterdam for nightlife and modern architecture';
        } else {
            destination = 'Utrecht for a more relaxed city experience';
        }

    // Mountain (or hilly) destinations
    } else if (destinationType === 'mountain') {
        if (climate === 'cold') {
            destination = 'Vaals (the highest point in the Netherlands) for scenic hikes';
        } else {
            destination = 'Heuvelland for cycling through rolling hills';
        }
    } else {
        destination = 'Consider visiting smaller Dutch villages like Giethoorn or Delft.';
    }

    // Display the result in the "result" div
    document.getElementById("result").innerText = `We suggest: ${destination}`;
});
