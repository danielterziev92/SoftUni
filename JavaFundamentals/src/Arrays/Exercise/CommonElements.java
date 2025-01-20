package Arrays.Exercise;

import java.util.Arrays;
import java.util.Scanner;
import java.util.stream.Collectors;

public class CommonElements {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] firstArray = scanner.nextLine().split(" ");
        String[] secondArray = scanner.nextLine().split(" ");

        String result = Arrays.stream(secondArray)
                .filter(element -> Arrays.asList(firstArray).contains(element))
                .collect(Collectors.joining(" "));

        System.out.println(result);
    }
}
