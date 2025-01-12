package MapsLambdaAndStreamAPI.Lab;

import java.util.*;

public class CountRealNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> numbers = Arrays.stream(scanner.nextLine().split(" ")).map(Integer::parseInt).toList();
        Map<Integer, Integer> countNumbers = new HashMap<>();
        for (int number : numbers) {
            countNumbers.put(number, countNumbers.getOrDefault(number, 0) + 1);
        }

        Map<Integer, Integer> result = new TreeMap<>(countNumbers);
        for (Map.Entry<Integer, Integer> entry :result.entrySet()){
            System.out.printf("%d -> %d%n", entry.getKey(), entry.getValue());
        }
    }
}
