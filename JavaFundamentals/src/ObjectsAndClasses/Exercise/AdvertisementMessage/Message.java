package ObjectsAndClasses.Exercise.AdvertisementMessage;

public class Message {
    private String phrase;
    private String event;
    private String author;
    private String city;

    public Message(String phrase, String event, String author, String city) {
        this.phrase = phrase;
        this.event = event;
        this.author = author;
        this.city = city;
    }

    @Override
    public String toString() {
        return String.format("%s %s %s – %s", phrase, event, author, city);
    }
}
