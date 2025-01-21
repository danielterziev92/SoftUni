package Lists.Exercise;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class CardsGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> firstPlayerDeck = Arrays.stream(scanner.nextLine().split(" "))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        List<Integer> secondPlayerDeck = Arrays.stream(scanner.nextLine().split(" "))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        while (!firstPlayerDeck.isEmpty() && !secondPlayerDeck.isEmpty()) {
            int firstPlayerCard = firstPlayerDeck.get(0);
            int secondPlayerCard = secondPlayerDeck.get(0);

            firstPlayerDeck.remove(0);
            secondPlayerDeck.remove(0);

            if (firstPlayerCard > secondPlayerCard) {
                firstPlayerDeck.add(firstPlayerCard);
                firstPlayerDeck.add(secondPlayerCard);
            } else if (secondPlayerCard > firstPlayerCard) {
                secondPlayerDeck.add(secondPlayerCard);
                secondPlayerDeck.add(firstPlayerCard);
            }
        }

        if (!firstPlayerDeck.isEmpty()) {
            int sum = firstPlayerDeck.stream().mapToInt(Integer::intValue).sum();
            System.out.println("First player wins! Sum: " + sum);
        } else {
            int sum = secondPlayerDeck.stream().mapToInt(Integer::intValue).sum();
            System.out.println("Second player wins! Sum: " + sum);
        }

        scanner.close();
    }
}
