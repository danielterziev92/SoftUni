package DataTypesAndVariables.Exercise;

import java.util.Arrays;
import java.util.Scanner;

public class SumDigits {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int result = Arrays.stream(scanner.nextLine().split("")).mapToInt(Integer::parseInt).sum();
        System.out.println(result);
    }
}
