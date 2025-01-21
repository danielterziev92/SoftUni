package MapsLambdaAndStreamAPI.Exercise;

import java.util.*;

public class CompanyUsers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Map<String, Set<String>> companyUsers = new LinkedHashMap<>();

        String input;
        while (!(input = scanner.nextLine()).equals("End")) {
            String[] data = input.split(" -> ");

            String companyName = data[0];
            String employeeId = data[1];

            companyUsers.computeIfAbsent(companyName, k -> new LinkedHashSet<>()).add(employeeId);
        }

        for (Map.Entry<String, Set<String>> entry : companyUsers.entrySet()) {
            System.out.println(entry.getKey());
            for (String employeeId : entry.getValue()) {
                System.out.println("-- " + employeeId);
            }
        }
    }
}
