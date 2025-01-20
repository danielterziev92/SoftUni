package Arrays.Exercise;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class TopIntegers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbers = Arrays.stream(scanner.nextLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();

        List<Integer> topIntegers = new ArrayList<>();

        for (int i = 0; i < numbers.length; i++) {
            boolean isTop = true;

            for (int j = i + 1; j < numbers.length; j++) {
                if (numbers[i] <= numbers[j]) {
                    isTop = false;
                    break;
                }
            }

            if (isTop) {
                topIntegers.add(numbers[i]);
            }
        }
        System.out.println(topIntegers.stream()
                .map(String::valueOf)
                .collect(Collectors.joining(" ")));
    }
}
