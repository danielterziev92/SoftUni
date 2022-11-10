class SteamUser:

    def __init__(self, username, games: list):
        self.username = username
        self.games = games
        self.played_hours = 0

    def play(self, game, hours: int):
        if game in self.games:
            self.played_hours += hours
            return f'{self.username} is playing {game}'
        else:
            return f'{game} is not in library'

    def buy_game(self, game):
        if game not in self.games:
            self.games.append(game)
            return f'{self.username} bought {game}'
        else:
            return f'{game} is already in your library'

    def status(self):
        games_count = len(self.games)
        played_hours = self.played_hours
        return f'{self.username} has {games_count} games. Total play time: {played_hours}'


user = SteamUser("Peter", ["Rainbow Six Siege", "CS:GO", "Fortnite"])
print(user.play("Fortnite", 3))
print(user.play("Oxygen Not Included", 5))
print(user.buy_game("CS:GO"))
print(user.buy_game("Oxygen Not Included"))
print(user.play("Oxygen Not Included", 6))
print(user.status())
