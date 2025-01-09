package BasicSyntaxConditionalStatementsAndLoops.Lab;

import java.util.Scanner;

public class TimeAfter30Minutes {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int hours = Integer.parseInt(scanner.nextLine());
        int minutes = Integer.parseInt(scanner.nextLine());


        int totalMinutes = hours * 60 + minutes + 30;
        hours = (totalMinutes / 60) % 24;
        minutes = totalMinutes % 60;

        System.out.printf("%d:%02d", hours, minutes);
    }
}
