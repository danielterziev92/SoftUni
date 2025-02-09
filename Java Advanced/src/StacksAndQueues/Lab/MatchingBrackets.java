package StacksAndQueues.Lab;

import java.util.ArrayDeque;
import java.util.Scanner;

public class MatchingBrackets {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayDeque<Integer> bracketIndexes = new ArrayDeque<>();

        String expression = scanner.nextLine();
        for (int i = 0; i < expression.length(); i++) {
            if (expression.charAt(i) == '(') {
                bracketIndexes.push(i);
            } else if (expression.charAt(i) == ')') {
                if (!bracketIndexes.isEmpty()) {
                    int startIndex = bracketIndexes.pop();
                    String subExpression = expression.substring(startIndex, i + 1);
                    System.out.println(subExpression);
                }
            }
        }
    }
}
