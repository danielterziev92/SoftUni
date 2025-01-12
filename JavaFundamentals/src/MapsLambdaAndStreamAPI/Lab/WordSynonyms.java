package MapsLambdaAndStreamAPI.Lab;

import java.util.*;

public class WordSynonyms {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int count = Integer.parseInt(scanner.nextLine());

        Map<String, ArrayList<String>> synonyms = new LinkedHashMap<>(count);

        for (int i = 0; i < count; i++) {
            String word = scanner.nextLine();
            String synonym = scanner.nextLine();

            synonyms.computeIfAbsent(word, k -> new ArrayList<>()).add(synonym);
        }

        StringBuilder result = new StringBuilder();
        for (var entry : synonyms.entrySet()) {
            result.append(entry.getKey())
                    .append(" - ")
                    .append(String.join(", ", entry.getValue()))
                    .append("\n");
        }

        System.out.print(result);
    }
}
