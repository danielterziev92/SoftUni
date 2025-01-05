package BasicSyntaxConditionalStatementsAndLoops.Lab;

import java.util.Scanner;

public class MultiplicationTable {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int theInteger = Integer.parseInt(scanner.nextLine());

        for (int i = 1; i < 11; i++) {
            int result = theInteger * i;
            System.out.printf("%d X %d = %d%n", theInteger, i, result);
        }
    }
}
