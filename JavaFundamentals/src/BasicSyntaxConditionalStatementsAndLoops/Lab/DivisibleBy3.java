package BasicSyntaxConditionalStatementsAndLoops.Lab;

import java.util.stream.IntStream;

public class DivisibleBy3 {
    public static void main(String[] args) {
        IntStream.rangeClosed(1, 100)
                .filter(i -> i % 3 == 0)
                .forEach(System.out::println);
    }
}
