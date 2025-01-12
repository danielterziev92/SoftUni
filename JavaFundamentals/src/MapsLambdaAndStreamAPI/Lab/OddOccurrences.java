package MapsLambdaAndStreamAPI.Lab;

import java.util.*;

public class OddOccurrences {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] sequence = scanner.nextLine().split(" ");

        Map<String, Integer> occurrences = new LinkedHashMap<>(sequence.length);

        for (String word : sequence) {
            occurrences.put(word.toLowerCase(), occurrences.getOrDefault(word.toLowerCase(), 0) + 1);
        }

        List<String> result = new ArrayList<>();
        for (Map.Entry<String, Integer> entry : occurrences.entrySet()) {
            if (entry.getValue() % 2 == 0) continue;

            result.add(entry.getKey());
        }

        System.out.println(String.join(", ", result));
    }
}
