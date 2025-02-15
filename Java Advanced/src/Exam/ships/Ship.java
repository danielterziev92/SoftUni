package Exam.ships;

public class Ship {
    private String name;
    private String type;
    private int tonnage;
    private int draft;

    public Ship(String name, String type, int tonnage, int draft) {
        this.name = name;
        this.type = type;
        this.tonnage = tonnage;
        this.draft = draft;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getTonnage() {
        return tonnage;
    }

    public void setTonnage(int tonnage) {
        this.tonnage = tonnage;
    }

    public int getDraft() {
        return draft;
    }

    public void setDraft(int draft) {
        this.draft = draft;
    }

    @Override
    public String toString() {
        return String.format("Name: %s, Type: %s, Tonnage: %d tons, Draft: %d meters.",
                name, type, tonnage, draft);
    }
}


