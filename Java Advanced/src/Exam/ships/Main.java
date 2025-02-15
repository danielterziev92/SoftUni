package Exam.ships;

public class Main {

    public static void main(String[] args) {

        // Create a harbor
        Harbor harbor = new Harbor("Port of Dreams", 10);

        // Create ships
        Ship ship1 = new Ship("Explorer", "Cargo", 20000, 8);
        Ship ship2 = new Ship("Seafarer", "Cruise", 50000, 12);
        Ship ship3 = new Ship("Deep Voyager", "Cargo", 18000, 10);
        Ship ship4 = new Ship("Tide Hunter", "Fishing", 3000, 5);
        Ship ship5 = new Ship("Seven Seas", "Cargo", 15000, 9);

        // Add ships to the harbor
        System.out.println(harbor.addShip(ship1)); // Ship Explorer added to the harbor.
        System.out.println(harbor.addShip(ship2)); // The ship Seafarer cannot dock due to draft limitations!
        System.out.println(harbor.addShip(ship3)); // Ship Deep Voyager added to the harbor.
        System.out.println(harbor.addShip(ship4)); // Ship Tide Hunter added to the harbor.
        System.out.println(harbor.addShip(ship5)); // Ship Seven Seas added to the harbor.

        // Attempt to add a ship with a duplicate name
        System.out.println(harbor.addShip(ship1)); // Ship with this name already exists!

        // Remove a ship by name
        System.out.println(harbor.removeShip("Explorer")); // true
        System.out.println(harbor.removeShip("Nonexistent Ship")); // false

        // Get ships by type
        System.out.println(harbor.getShipsByType("Cargo")); // Ships of type Cargo: Deep Voyager, Seven Seas
        System.out.println(harbor.getShipsByType("Military")); // There are no ships of the requested type.

        // Get a ship by name
        System.out.println(harbor.getShipByName("Tide Hunter")); // Name: Tide Hunter, Type: Fishing, Tonnage: 3000 tons, Draft: 5 meters.

        // Get the ship with the deepest draft
        System.out.println(harbor.getLargestShip()); // Deep Voyager is the largest ship with a tonnage of 18000 tons.

        // Get the number of ships in the harbor
        System.out.println("Number of ships: " + harbor.getCount()); // Number of ships: 3

        // Get harbor statistics
        System.out.println(harbor.getStatistics());

        // Ships docked in Port of Dreams:
        // * Deep Voyager
        // * Tide Hunter
        // * Seven Seas

    }
}
