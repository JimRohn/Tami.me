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
