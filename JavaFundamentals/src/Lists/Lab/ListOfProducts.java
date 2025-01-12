package Lists.Lab;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class ListOfProducts {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int productsCount = Integer.parseInt(scanner.nextLine());
        List<String> products = new ArrayList<>();
        for (int i = 0; i < productsCount; i++) {
            String product = scanner.nextLine();
            products.add(product);
        }

        Collections.sort(products);

        int count = 1;
        for (String product : products) {
            System.out.printf("%d.%s\n", count, product);
            count++;
        }
    }
}
