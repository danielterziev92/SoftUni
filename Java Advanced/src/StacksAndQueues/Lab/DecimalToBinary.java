package StacksAndQueues.Lab;

import java.util.ArrayDeque;
import java.util.Scanner;

public class DecimalToBinary {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayDeque<Integer> stack = new ArrayDeque<>();
        int decimal = Integer.parseInt(scanner.nextLine());

        if (decimal == 0) {
            System.out.println(decimal);
            return;
        }

        while (decimal > 0) {
            stack.push(decimal % 2);
            decimal /= 2;
        }

        stack.forEach(System.out::print);
    }
}
