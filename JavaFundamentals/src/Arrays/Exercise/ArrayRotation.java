package Arrays.Exercise;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class ArrayRotation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> numbers = Arrays.stream(scanner.nextLine().split(" ")).map(Integer::parseInt).collect(Collectors.toList());
        int rotationNumber = Integer.parseInt(scanner.nextLine());
        for (int i = 0; i < rotationNumber; i++) {
            numbers.addLast(numbers.getFirst());
            numbers.removeFirst();
        }

        System.out.println(numbers.stream().map(String::valueOf).collect(Collectors.joining(" ")));
    }
}
