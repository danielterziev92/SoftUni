package Methods.Lab;

import java.util.Scanner;

public class PrintingTriangle {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int size = Integer.parseInt(scanner.nextLine());

        printTriangle(size);
    }

    private static void printTriangle(int size) {
        for (int row = 1; row <= size; row++) {
            for (int col = 1; col <= row; col++) {
                System.out.print(col);
                if (col < row) {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }

        for (int row = size - 1; row >= 1; row--) {
            for (int col = 1; col <= row; col++) {
                System.out.print(col);
                if (col < row) {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}
