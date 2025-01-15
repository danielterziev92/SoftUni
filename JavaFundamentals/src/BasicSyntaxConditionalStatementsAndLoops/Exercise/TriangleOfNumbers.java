package BasicSyntaxConditionalStatementsAndLoops.Exercise;

import java.util.Collections;
import java.util.Scanner;

public class TriangleOfNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        for (int i = 1; i <= n; i++) {
            String row = String.join(" ", Collections.nCopies(i, String.valueOf(i)));
            System.out.println(row);
        }
    }
}
