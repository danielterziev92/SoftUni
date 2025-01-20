package Arrays.Exercise;

import java.util.Arrays;
import java.util.Scanner;
import java.util.stream.Collectors;

public class TheLift {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int peopleWaiting = Integer.parseInt(scanner.nextLine());
        int[] wagons = Arrays.stream(scanner.nextLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();

        for (int i = 0; i < wagons.length && peopleWaiting > 0; i++) {
            while (wagons[i] < 4 && peopleWaiting > 0) {
                wagons[i]++;
                peopleWaiting--;
            }
        }

        boolean hasEmptySpots = Arrays.stream(wagons).anyMatch(w -> w < 4);

        if (peopleWaiting == 0 && hasEmptySpots) {
            System.out.println("The lift has empty spots!");
            printWagons(wagons);
        } else if (peopleWaiting > 0) {
            System.out.printf("There isn't enough space! %d people in a queue!%n", peopleWaiting);
            printWagons(wagons);
        } else {
            printWagons(wagons);
        }
    }

    private static void printWagons(int[] wagons) {
        System.out.println(Arrays.stream(wagons)
                .mapToObj(String::valueOf)
                .collect(Collectors.joining(" ")));
    }
}
