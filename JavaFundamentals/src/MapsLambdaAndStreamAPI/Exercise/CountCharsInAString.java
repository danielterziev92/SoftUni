package MapsLambdaAndStreamAPI.Exercise;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class CountCharsInAString {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Map<Character, Integer> charCount = new LinkedHashMap<>();
        String text = scanner.nextLine();
        for (char character : text.toCharArray()) {
            if (character == ' ') continue;

            charCount.put(character, charCount.getOrDefault(character, 0) + 1);
        }

        for (Map.Entry<Character, Integer> entry : charCount.entrySet()) {
            System.out.printf("%c -> %d%n", entry.getKey(), entry.getValue());
        }

        scanner.close();
    }
}
