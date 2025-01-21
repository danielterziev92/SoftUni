package Lists.Exercise;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class BombNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> numbers = Arrays.stream(scanner.nextLine().split(" "))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        String[] bombInfo = scanner.nextLine().split(" ");
        int bombNumber = Integer.parseInt(bombInfo[0]);
        int power = Integer.parseInt(bombInfo[1]);

        while (numbers.contains(bombNumber)) {
            int bombIndex = numbers.indexOf(bombNumber);

            int leftIndex = Math.max(0, bombIndex - power);
            int rightIndex = Math.min(numbers.size() - 1, bombIndex + power);

            for (int i = rightIndex; i >= leftIndex; i--) {
                numbers.remove(i);
            }
        }

        int sum = numbers.stream().mapToInt(Integer::intValue).sum();
        System.out.println(sum);

        scanner.close();
    }
}
