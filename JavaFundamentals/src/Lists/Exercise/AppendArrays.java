package Lists.Exercise;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class AppendArrays {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] arrayParts = scanner.nextLine().split("\\|");
        List<String> result = new ArrayList<>();

        for (int i = arrayParts.length - 1; i >= 0; i--) {
            String[] numbers = arrayParts[i].trim().split("\\s+");

            for (String number : numbers) {
                if (!number.isEmpty()) {
                    result.add(number);
                }
            }
        }

        System.out.println(String.join(" ", result));

        scanner.close();
    }
}
