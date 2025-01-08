package Arrays.Lab;

import java.util.Scanner;

public class PrintNumbersInReverseOrder {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int count = Integer.parseInt(scanner.nextLine());
        int[] numbers = new int[count];

        for (int i = 0; i < count; i++) {
            numbers[count - i - 1] = Integer.parseInt(scanner.nextLine());
        }

        for (int number : numbers) {
            System.out.printf("%d ", number);
        }
    }
}
