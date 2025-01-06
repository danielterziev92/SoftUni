package DataTypesAndVariables.Lab;

import java.math.BigDecimal;
import java.util.Scanner;

public class ExactSumOfRealNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int count = Integer.parseInt(scanner.nextLine());
        BigDecimal result = new BigDecimal(0);
        for (int i = 0; i < count; i++) {
            BigDecimal input = new BigDecimal(scanner.nextLine());
            result = result.add(input);
        }
        System.out.println(result);
    }
}
