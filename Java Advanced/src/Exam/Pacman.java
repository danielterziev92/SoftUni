package Exam;

import java.util.Scanner;

public class Pacman {
    private static char[][] field;
    private static int pacmanRow;
    private static int pacmanCol;
    private static int health = 100;
    private static int totalStars = 0;
    private static boolean hasFreeze = false;


    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        field = new char[n][n];

        for (int i = 0; i < n; i++) {
            String line = scanner.nextLine();
            for (int j = 0; j < n; j++) {
                field[i][j] = line.charAt(j);
                if (field[i][j] == 'P') {
                    pacmanRow = i;
                    pacmanCol = j;
                } else if (field[i][j] == '*') {
                    totalStars++;
                }
            }
        }

        boolean gameOver = false;
        int collectedStars = 0;

        String command = scanner.nextLine();
        boolean isFirstMove = true;

        while (!command.equals("END") && health > 0 && collectedStars < totalStars) {
            if (isFirstMove) {
                field[pacmanRow][pacmanCol] = '-';
                isFirstMove = false;
            }

            int newRow = pacmanRow;
            int newCol = pacmanCol;

            switch (command) {
                case "up" -> newRow--;
                case "down" -> newRow++;
                case "left" -> newCol--;
                case "right" -> newCol++;
            }

            if (newRow < 0) newRow = field.length - 1;
            if (newRow >= field.length) newRow = 0;
            if (newCol < 0) newCol = field[0].length - 1;
            if (newCol >= field[0].length) newCol = 0;

            char nextCell = field[newRow][newCol];
            field[newRow][newCol] = '-';

            switch (nextCell) {
                case '*' -> collectedStars++;
                case 'G' -> {
                    if (!hasFreeze) {
                        health -= 50;
                    } else {
                        hasFreeze = false;
                    }
                }
                case 'F' -> hasFreeze = true;
            }

            pacmanRow = newRow;
            pacmanCol = newCol;

            if (health <= 0) {
                gameOver = true;
                break;
            }

            if (collectedStars < totalStars) {
                command = scanner.nextLine();
            }
        }

        field[pacmanRow][pacmanCol] = 'P';

        if (gameOver) {
            System.out.printf("Game over! Pacman last coordinates [%d,%d]%n", pacmanRow, pacmanCol);
        } else if (collectedStars == totalStars) {
            System.out.println("Pacman wins! All the stars are collected.");
        } else {
            System.out.println("Pacman failed to collect all the stars.");
        }

        System.out.println("Health: " + health);

        if (collectedStars < totalStars) {
            System.out.println("Uncollected stars: " + (totalStars - collectedStars));
        }

        printField();
    }

    private static void printField() {
        for (char[] row : field) {
            for (char cell : row) {
                System.out.print(cell);
            }
            System.out.println();
        }
    }
}
