package ObjectsAndClasses.Exercise.AdvertisementMessage;


import java.util.Random;

public class MessageGenerator {
    private String[] phrases;
    private String[] events;
    private String[] authors;
    private String[] cities;
    private Random random;

    public MessageGenerator() {
        phrases = new String[]{
                "Excellent product.",
                "Such a great product.",
                "I always use that product.",
                "Best product of its category.",
                "Exceptional product.",
                "I can't live without this product."
        };

        events = new String[]{
                "Now I feel good.",
                "I have succeeded with this product.",
                "Makes miracles. I am happy of the results!",
                "I cannot believe but now I feel awesome.",
                "Try it yourself, I am very satisfied.",
                "I feel great!"
        };

        authors = new String[]{
                "Diana", "Petya", "Stella", "Elena", "Katya", "Iva", "Annie", "Eva"
        };

        cities = new String[]{
                "Burgas", "Sofia", "Plovdiv", "Varna", "Ruse"
        };

        random = new Random();
    }

    public Message generateMessage() {
        String phrase = phrases[random.nextInt(phrases.length)];
        String event = events[random.nextInt(events.length)];
        String author = authors[random.nextInt(authors.length)];
        String city = cities[random.nextInt(cities.length)];

        return new Message(phrase, event, author, city);
    }
}
