function ticketsDB(tickets, sortingCriterion) {
    const allTickets = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        compareTo(other, criteria) {
            if (typeof this[criteria] === 'string') {
                return this[criteria].localeCompare(other[criteria]);
            } else {
                return this[criteria] - other[criteria];
            }
        }
    }

    for (const ticket of tickets) {
        const [destination, price, status] = [...ticket.split('|')]
        allTickets.push(new Ticket(destination, Number(price), status));
    }

    return allTickets.sort((a, b) => a.compareTo(b, sortingCriterion));
}

console.log(ticketsDB(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));