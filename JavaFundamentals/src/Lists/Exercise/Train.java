package Lists.Exercise;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Train {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> wagons = Arrays.stream(scanner.nextLine().split(" ")).map(Integer::parseInt).collect(Collectors.toList());
        int maxCapacity = Integer.parseInt(scanner.nextLine());

        while (true) {
            String input = scanner.nextLine();

            if (input.equals("end")) break;

            if (input.startsWith("Add")) {
                int passengers = Integer.parseInt(input.split(" ")[1]);
                wagons.add(passengers);
            } else {
                int passengers = Integer.parseInt(input);

                boolean fitted = false;
                for (int i = 0; i < wagons.size(); i++) {
                    if (wagons.get(i) + passengers <= maxCapacity) {
                        wagons.set(i, wagons.get(i) + passengers);
                        fitted = true;
                        break;
                    }
                }
            }
        }

        for (int wagon : wagons) {
            System.out.print(wagon + " ");
        }

        scanner.close();
    }
}
