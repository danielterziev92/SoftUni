package Methods.Exercise;

import java.util.Scanner;

public class VowelsCount {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String word = scanner.nextLine();
        System.out.println(getVowelsCount(word));
    }

    private static int getVowelsCount(String word) {
        String vowels = "aeiou";
        int vowelCount = 0;


        for (char c : word.toCharArray()) {
            c = Character.toLowerCase(c);

            if (vowels.indexOf(c) != -1) {
                vowelCount++;
            }
        }
        return vowelCount;
    }
}
