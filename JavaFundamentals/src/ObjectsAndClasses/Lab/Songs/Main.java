package ObjectsAndClasses.Lab.Songs;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Songs> songs = new ArrayList<>();

        int count = Integer.parseInt(scanner.nextLine());
        for (int i = 0; i < count; i++) {
            String[] input = scanner.nextLine().split("_");

            String typeList = input[0];
            String name = input[1];
            String time = input[2];

            Songs song = new Songs(typeList, name, time);
            songs.add(song);
        }

        String input = scanner.nextLine();

        for (Songs song : songs) {
            if (input.equals("all")) {
                System.out.println(song.getName());
            }

            if (!song.getTypeList().equals(input)) continue;

            System.out.println(song.getName());
        }
    }
}
