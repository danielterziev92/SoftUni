package ObjectsAndClasses.Exercise.Articles;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] data = scanner.nextLine().split(" ");

        Article article = new Article(data[0], data[1], data[2]);
        int n = Integer.parseInt(scanner.nextLine());
        for (int i = 0; i < n; i++) {
            String[] input = scanner.nextLine().split(": ");

            String command = input[0];
            String value = input[1];
            switch (command) {
                case "Edit" -> article.edit(value);
                case "ChangeAuthor" -> article.changeAuthor(value);
                case "Rename" -> article.rename(value);
            }
        }

        System.out.println(article.toString());
    }
}
