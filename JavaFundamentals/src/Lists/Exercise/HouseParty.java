package Lists.Exercise;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class HouseParty {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<String> guestList = new ArrayList<>();

        int commands = Integer.parseInt(scanner.nextLine());

        for (int i = 0; i < commands; i++) {
            String[] tokens = scanner.nextLine().split(" ");
            String name = tokens[0];

            if (tokens[2].equals("going!")) {
                if (guestList.contains(name)) {
                    System.out.println(name + " is already in the list!");
                } else {
                    guestList.add(name);
                }
            } else {
                if (guestList.contains(name)) {
                    guestList.remove(name);
                } else {
                    System.out.println(name + " is not in the list!");
                }
            }
        }

        for (String guest : guestList) {
            System.out.println(guest);
        }

        scanner.close();
    }
}
