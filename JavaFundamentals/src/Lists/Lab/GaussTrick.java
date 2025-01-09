package Lists.Lab;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class GaussTrick {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> numbers = Arrays.stream(scanner.nextLine().split(" ")).map(Integer::parseInt).collect(Collectors.toList());

        List<Integer> results = new ArrayList<>();
        while (numbers.size() > 1) {
            int firstElement = numbers.remove(0);
            int lastElement = numbers.remove(numbers.size() - 1);

            results.add(firstElement + lastElement);
        }

        if (numbers.size() != 0) {
            results.add(numbers.remove(0));
        }

        for (int result : results) {
            System.out.print(result + " ");
        }
    }
}
