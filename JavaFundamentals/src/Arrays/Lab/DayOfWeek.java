package Arrays.Lab;

import java.util.Scanner;

public class DayOfWeek {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int index = Integer.parseInt(scanner.nextLine());
        String[] days = {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"};

        if (index < 1 || index > days.length) {
            System.out.println("Invalid day!");
        } else {
            System.out.println(days[index - 1]);
        }
    }
}
