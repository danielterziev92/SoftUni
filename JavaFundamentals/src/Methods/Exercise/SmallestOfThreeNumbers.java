package Methods.Exercise;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class SmallestOfThreeNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> numbers = new ArrayList<>();
        for (int i = 0; i < 3; i++) {
            int number = Integer.parseInt(scanner.nextLine());
            numbers.add(number);
        }

        System.out.println(getSmallestNumber(numbers));
    }

    private static int getSmallestNumber(List<Integer> numbers) {
        return Collections.min(numbers);
    }
}
