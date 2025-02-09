package StacksAndQueues.Lab;

import java.util.ArrayDeque;
import java.util.Scanner;

public class SimpleCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayDeque<Integer> numbers = new ArrayDeque<>();

        String[] tokens = scanner.nextLine().split("\\s+");
        numbers.push(Integer.parseInt(tokens[0]));

        for (int i = 1; i < tokens.length; i += 2) {
            String operator = tokens[i];
            int number = Integer.parseInt(tokens[i + 1]);

            if (operator.equals("+")) {
                numbers.push(numbers.pop() + number);
            } else if (operator.equals("-")) {
                numbers.push(numbers.pop() - number);
            }
        }

        System.out.println(numbers.pop());
    }
}
