package BasicSyntaxConditionalStatementsAndLoops.Exercise;

import java.util.Scanner;

public class PrintAndSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int start = Integer.parseInt(scanner.nextLine());
        int end = Integer.parseInt(scanner.nextLine());

        int result = 0;
        for (int i = start; i <= end; i++) {
            System.out.printf("%d ", i);
            result += i;
        }
        System.out.print("\n");

        System.out.printf("Sum: %d", result);
    }
}
