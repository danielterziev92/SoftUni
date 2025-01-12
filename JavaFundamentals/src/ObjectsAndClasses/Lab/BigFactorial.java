package ObjectsAndClasses.Lab;

import java.math.BigInteger;
import java.util.Scanner;

public class BigFactorial {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int factorialNumber = Integer.parseInt(scanner.nextLine());

        BigInteger result = BigInteger.ONE;
        for (int i = 1; i <= factorialNumber; i++) {
            result = result.multiply(BigInteger.valueOf(i));
        }

        System.out.println(result);
    }
}
