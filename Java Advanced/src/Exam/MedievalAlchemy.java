package Exam;

import java.util.*;
import java.util.stream.Collectors;

public class MedievalAlchemy {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] substancesInput = scanner.nextLine().split(", ");
        String[] crystalsInput = scanner.nextLine().split(", ");

        Deque<Integer> substances = new ArrayDeque<>();
        Deque<Integer> crystals = new ArrayDeque<>();

        Arrays.stream(substancesInput).map(Integer::parseInt).forEach(substances::push);
        Arrays.stream(crystalsInput).map(Integer::parseInt).forEach(crystals::offer);

        PotionManager potionManager = new PotionManager();
        List<String> craftedPotions = new ArrayList<>();
        Set<String> craftedPotionSet = new HashSet<>();

        while (!substances.isEmpty() && !crystals.isEmpty() && !potionManager.areAllPotionsCrafted(craftedPotionSet)) {
            int substance = substances.pop();
            int crystal = crystals.poll();
            int totalEnergy = substance + crystal;

            String exactPotion = potionManager.findExactEnergyPotion(totalEnergy, craftedPotionSet);
            if (exactPotion != null) {
                craftedPotions.add(exactPotion);
                craftedPotionSet.add(exactPotion);
                continue;
            }

            Map<String, Integer> leftPoisons = potionManager.getLeftPoisons(craftedPotionSet);

            String potionToCreate = null;
            int maxEnergy = 0;
            for (Map.Entry<String, Integer> entry : leftPoisons.entrySet()) {
                if (entry.getValue() < totalEnergy && entry.getValue() > maxEnergy) {
                    maxEnergy = entry.getValue();
                    potionToCreate = entry.getKey();
                }
            }

            if (potionToCreate != null) {
                craftedPotions.add(potionToCreate);
                craftedPotionSet.add(potionToCreate);

                int newCrystalEnergy = crystal - 20;
                if (newCrystalEnergy > 0) {
                    crystals.offer(newCrystalEnergy);
                }
            } else {
                int newCrystalEnergy = crystal - 5;
                if (newCrystalEnergy > 0) {
                    crystals.offer(newCrystalEnergy);
                }
            }

        }

        printResults(potionManager, craftedPotions, substances, crystals);
    }

    private static void printResults(PotionManager potionManager, List<String> craftedPotions, Deque<Integer> substances, Deque<Integer> crystals) {

        if (potionManager.areAllPotionsCrafted(new HashSet<>(craftedPotions))) {
            System.out.println("Success! The alchemist has forged all potions!");
        } else {
            System.out.println("The alchemist failed to complete his quest.");
        }

        if (!craftedPotions.isEmpty()) {
            System.out.println("Crafted potions: " + String.join(", ", craftedPotions));
        }

        if (!substances.isEmpty()) {
            System.out.println("Substances: " + substances.stream()
                    .map(String::valueOf)
                    .collect(Collectors.joining(", ")));
        }

        if (!crystals.isEmpty()) {
            System.out.println("Crystals: " + crystals.stream()
                    .map(String::valueOf)
                    .collect(Collectors.joining(", ")));
        }

    }
}

class PotionManager {
    private final Map<String, Integer> potionRequirements;

    public PotionManager() {
        potionRequirements = new LinkedHashMap<>();
        potionRequirements.put("Draught of Wisdom", 90);
        potionRequirements.put("Essence of Resilience", 100);
        potionRequirements.put("Potion of Agility", 80);
        potionRequirements.put("Elixir of Strength", 70);
        potionRequirements.put("Brew of Immortality", 110);
    }

    public String findExactEnergyPotion(int energy, Set<String> craftedPotions) {
        for (Map.Entry<String, Integer> entry : potionRequirements.entrySet()) {
            if (!craftedPotions.contains(entry.getKey()) && entry.getValue() == energy) {
                return entry.getKey();
            }
        }
        return null;
    }

    public Map<String, Integer> getLeftPoisons(Set<String> craftedPotions) {
        Map<String, Integer> leftPotions = new LinkedHashMap<>();

        for (Map.Entry<String, Integer> entry : potionRequirements.entrySet()) {
            if (!craftedPotions.contains(entry.getKey())) {
                leftPotions.put(entry.getKey(), entry.getValue());
            }
        }

        return leftPotions;
    }

    public boolean areAllPotionsCrafted(Set<String> craftedPotions) {
        return craftedPotions.size() == potionRequirements.size();
    }
}