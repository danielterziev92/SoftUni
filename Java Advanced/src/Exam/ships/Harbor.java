package Exam.ships;


import java.util.ArrayList;
import java.util.List;

public class Harbor {
    private final String location;
    private final int minDepth;
    private final List<Ship> ships;

    public Harbor(String location, int minDepth) {
        this.location = location;
        this.minDepth = minDepth;
        this.ships = new ArrayList<>();
    }

    public String addShip(Ship ship) {
        for (Ship existingShip : ships) {
            if (existingShip.getName().equals(ship.getName())) {
                return "Ship with this name already exists!";
            }
        }

        if (ship.getDraft() > minDepth) {
            return String.format("The ship %s cannot dock due to draft limitations!", ship.getName());
        }

        ships.add(ship);
        return String.format("Ship %s added to the harbor.", ship.getName());
    }

    public boolean removeShip(String name) {
        return ships.removeIf(ship -> ship.getName().equals(name));
    }

    public String getShipsByType(String type) {
        List<String> shipNames = new ArrayList<>();
        for (Ship ship : ships) {
            if (ship.getType().equals(type)) {
                shipNames.add(ship.getName());
            }
        }

        if (shipNames.isEmpty()) {
            return "There are no ships of the requested type.";
        }

        return String.format("Ships of type %s: %s", type, String.join(", ", shipNames));
    }

    public Ship getShipByName(String name) {
        for (Ship ship : ships) {
            if (ship.getName().equals(name)) {
                return ship;
            }
        }
        return null;
    }

    public String getLargestShip() {
        if (ships.isEmpty()) {
            return "No ships in the harbor.";
        }

        Ship largestShip = ships.getFirst();
        for (Ship ship : ships) {
            if (ship.getTonnage() > largestShip.getTonnage()) {
                largestShip = ship;
            }
        }

        return String.format("%s is the largest ship with a tonnage of %d tons.",
                largestShip.getName(), largestShip.getTonnage());
    }

    public int getCount() {
        return ships.size();
    }

    public String getStatistics() {
        if (ships.isEmpty()) {
            return String.format("No ships docked in %s.", location);
        }

        StringBuilder statistics = new StringBuilder();
        statistics.append(String.format("Ships docked in %s:%n", location));

        for (Ship ship : ships) {
            statistics.append(String.format("* %s%n", ship.getName()));
        }

        return statistics.toString().trim();
    }
}


