package MapsLambdaAndStreamAPI.Exercise;

import java.util.*;

public class LegendaryFarming {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Map<String, Integer> keyMaterials = new HashMap<>();
        Map<String, Integer> junkItems = new LinkedHashMap<>();

        keyMaterials.put("shards", 0);
        keyMaterials.put("fragments", 0);
        keyMaterials.put("motes", 0);

        boolean legendaryObtained = false;
        String legendaryItem = "";

        while (!legendaryObtained) {
            String[] input = scanner.nextLine().toLowerCase().split("\\s+");
            for (int i = 0; i < input.length; i += 2) {
                int quantity = Integer.parseInt(input[i]);
                String material = input[i + 1];

                if (keyMaterials.containsKey(material)) {
                    keyMaterials.put(material, keyMaterials.get(material) + quantity);
                    if (keyMaterials.get(material) >= 250) {
                        legendaryObtained = true;
                        legendaryItem = material;
                        keyMaterials.put(material, keyMaterials.get(material) - 250);
                        break;
                    }
                } else {
                    junkItems.put(material, junkItems.getOrDefault(material, 0) + quantity);
                }
            }
        }

        switch (legendaryItem) {
            case "shards":
                System.out.println("Shadowmourne obtained!");
                break;
            case "fragments":
                System.out.println("Valanyr obtained!");
                break;
            case "motes":
                System.out.println("Dragonwrath obtained!");
                break;
        }

        System.out.println("shards: " + keyMaterials.get("shards"));
        System.out.println("fragments: " + keyMaterials.get("fragments"));
        System.out.println("motes: " + keyMaterials.get("motes"));

        for (Map.Entry<String, Integer> entry : junkItems.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }

        scanner.close();
    }
}
