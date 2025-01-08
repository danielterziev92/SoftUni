package Arrays.Lab;

import java.util.Arrays;
import java.util.Scanner;

public class SumEvenNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int sum = Arrays.stream(scanner.nextLine().split(" "))
                .mapToInt(Integer::parseInt)
                .filter(i -> i % 2 == 0)
                .sum();

        System.out.println(sum);
    }
}
