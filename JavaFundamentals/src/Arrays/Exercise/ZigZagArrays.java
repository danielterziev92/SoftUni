package Arrays.Exercise;

import java.util.ArrayList;
import java.util.Scanner;
import java.util.stream.Collectors;

public class ZigZagArrays {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayList<Integer> firstNumbers = new ArrayList<>();
        ArrayList<Integer> secondNumbers = new ArrayList<>();

        int n = Integer.parseInt(scanner.nextLine());
        for (int i = 0; i < n; i++) {
            String[] inputNumbers = scanner.nextLine().split(" ");
            if (i % 2 == 0) {
                firstNumbers.add(Integer.parseInt(inputNumbers[0]));
                secondNumbers.add(Integer.parseInt(inputNumbers[1]));
            } else {
                firstNumbers.add(Integer.parseInt(inputNumbers[1]));
                secondNumbers.add(Integer.parseInt(inputNumbers[0]));
            }
        }

        System.out.println(firstNumbers.stream().map(String::valueOf).collect(Collectors.joining(" ")));
        System.out.println(secondNumbers.stream().map(String::valueOf).collect(Collectors.joining(" ")));
    }
}
