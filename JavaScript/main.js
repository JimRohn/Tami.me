function filterPeople() {
    const locationValue = document.getElementById('locationFilter').value.toLowerCase();
    const expertiseValue = document.getElementById('expertiseFilter').value.toLowerCase();
    const personCards = document.getElementById('personList').getElementsByClassName('person-card');

    for (let card of personCards) {
        let location = card.getAttribute('data-location').toLowerCase();
        let expertise = card.getAttribute('data-expertise').toLowerCase();

        if ((locationValue === '' || location.includes(locationValue)) &&
            (expertiseValue === '' || expertise.includes(expertiseValue))) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    }
}

function showPersonCard(personId) {
    // Hide the people list
    document.getElementById('peopleList').style.display = 'none';

    // Logic to load the person card details based on the personId
    // For now, just show the person card
    var personCard = document.getElementById('personCard');
    // Here you can set the innerHTML of the person card with the details of the clicked person
    // For demonstration, we'll just display it
    personCard.style.display = 'block';
    
    // This is where you would update the person card's information based on the personId
    // For example:
    // personCard.querySelector('.person-name').textContent = 'Name based on personId';
    // personCard.querySelector('.person-role').textContent = 'Role based on personId';
    // ... and so on for other fields
}
function showPersonCard() {
    document.getElementById('personCard').style.display = 'block';
}

function hidePersonCard() {
    document.getElementById('personCard').style.display = 'none';
}

