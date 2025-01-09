package Lists.Lab;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class MergingLists {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> firstNumbers = Arrays.stream(scanner.nextLine().split(" ")).map(Integer::parseInt).collect(Collectors.toList());
        List<Integer> secondNumbers = Arrays.stream(scanner.nextLine().split(" ")).map(Integer::parseInt).collect(Collectors.toList());

        List<Integer> result = new ArrayList<>();
        int minSize = Math.min(firstNumbers.size(), secondNumbers.size());

        for (int i = 0; i < minSize; i++) {
            result.add(firstNumbers.get(i));
            result.add(secondNumbers.get(i));
        }

        if (firstNumbers.size() > minSize) {
            result.addAll(firstNumbers.subList(minSize, firstNumbers.size()));
        }
        if (secondNumbers.size() > minSize) {
            result.addAll(secondNumbers.subList(minSize, secondNumbers.size()));
        }

        for (int number : result) {
            System.out.print(number + " ");
        }
    }
}
