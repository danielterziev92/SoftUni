package ObjectsAndClasses.Exercise.AdvertisementMessage;


import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());

        MessageGenerator generator = new MessageGenerator();

        for (int i = 0; i < n; i++) {
            Message message = generator.generateMessage();
            System.out.println(message);
        }

        scanner.close();
    }
}