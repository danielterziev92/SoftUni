package Arrays.Exercise;

import java.util.ArrayList;
import java.util.Scanner;

public class Train {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayList<Integer> numbers = new ArrayList<>();
        int n = Integer.parseInt(scanner.nextLine());
        for (int i = 0; i < n; i++) {
            int number = Integer.parseInt(scanner.nextLine());
            System.out.print(number + " ");
            numbers.add(number);
        }

        System.out.println();
        System.out.println(numbers.stream().mapToInt(Integer::intValue).sum());
    }
}
