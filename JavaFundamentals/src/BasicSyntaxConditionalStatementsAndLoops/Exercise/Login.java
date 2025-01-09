package BasicSyntaxConditionalStatementsAndLoops.Exercise;

import java.util.Scanner;

public class Login {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String username = scanner.nextLine();
        String password = new StringBuilder(username).reverse().toString();

        boolean isLocked = false;
        int wrongPasswordCount = 0;
        while (wrongPasswordCount < 4) {
            if (isLocked) break;

            String currentPassword = scanner.nextLine();
            if (!currentPassword.equals(password)) {
                wrongPasswordCount++;
                System.out.println("Incorrect password. Try again.");
            } else {
                System.out.printf("User %s logged in.", username);
                break;
            }

            if (wrongPasswordCount == 3) {
                isLocked = true;
            }
        }

        if (isLocked) System.out.printf("User %s blocked!", username);
    }
}
