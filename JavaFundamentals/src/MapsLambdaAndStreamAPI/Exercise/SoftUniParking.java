package MapsLambdaAndStreamAPI.Exercise;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class SoftUniParking {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Map<String, String> parking = new LinkedHashMap<>();

        int n = Integer.parseInt(scanner.nextLine());
        for (int i = 0; i < n; i++) {
            String[] input = scanner.nextLine().split("\\s+");

            String command = input[0];

            switch (command) {
                case "register" -> {
                    String name = input[1];
                    String licensePlateNumber = input[2];

                    if (parking.containsKey(name)) {
                        System.out.printf("ERROR: already registered with plate number %s%n", parking.get(name));
                    } else {
                        parking.put(name, licensePlateNumber);
                        System.out.printf("%s registered %s successfully%n", name, licensePlateNumber);
                    }

                }
                case "unregister" -> {
                    String name = input[1];

                    if (parking.containsKey(name)) {
                        parking.remove(name);
                        System.out.printf("%s unregistered successfully%n", name);
                    } else {
                        System.out.printf("ERROR: user %s not found%n", name);
                    }
                }
            }
        }

        parking.forEach((name, licensePlateNumber) ->
                System.out.printf("%s => %s%n", name, licensePlateNumber));
    }
}
