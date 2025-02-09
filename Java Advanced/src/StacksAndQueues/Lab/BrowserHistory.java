package StacksAndQueues.Lab;

import java.util.ArrayDeque;
import java.util.Scanner;

public class BrowserHistory {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayDeque<String> browserHistory = new ArrayDeque<>();

        String command;
        while (!(command = scanner.nextLine()).equals("Home")) {
            if (command.equals("back")) {
                if (browserHistory.size() <= 1) {
                    System.out.println("no previous URLs");
                } else {
                    browserHistory.pop();  // Remove current URL
                    String previousURL = browserHistory.peek();  // Get previous URL
                    System.out.println(previousURL);
                }
            } else {
                // Normal navigation
                browserHistory.push(command);
                System.out.println(command);
            }
        }
    }
}
