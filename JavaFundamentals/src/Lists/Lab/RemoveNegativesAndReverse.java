package Lists.Lab;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class RemoveNegativesAndReverse {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> numbers = Arrays.stream(scanner.nextLine().split(" ")).map(Integer::parseInt).toList();
        List<Integer> positiveNumbers = numbers.stream().filter(n -> n > 0).collect(Collectors.toList());

        Collections.reverse(positiveNumbers);

        if (positiveNumbers.isEmpty()) {
            System.out.println("empty");
            return;
        }

        System.out.println(positiveNumbers.stream().map(String::valueOf).collect(Collectors.joining(" ")));
    }
}
