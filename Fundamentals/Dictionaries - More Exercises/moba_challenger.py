def add_player(player: str, position: str, skill: int):
    if player not in players.keys():
        players[player] = dict()
    if position not in players[player]:
        players[player][position] = 0
    if skill > players[player][position]:
        players[player][position] = skill


def duel_players(player_one: str, player_two: str):
    if (player_one and player_two) in players:
        for position in players[player_one]:
            if position in players[player_two]:
                player_one_skill = sum(players[player_one].values())
                player_two_skill = sum(players[player_two].values())
                if player_one_skill > player_two_skill:
                    del players[player_two]
                elif player_two_skill > player_one_skill:
                    del players[player_one]
                break


commands = input()
players = dict()
while commands != "Season end":
    if " vs " in commands:
        commands = commands.split(" vs ")
        duel_players(commands[0], commands[1])
    else:
        commands = commands.split(" -> ")
        add_player(commands[0], commands[1], int(commands[2]))

    commands = input()

best_player = list()
for player in players:
    best_player.append({"name": player, "total_skill": sum(players[player].values())})
for player in sorted(best_player, key=lambda item: (-item["total_skill"], item["name"])):
    print(f"{player['name']}: {player['total_skill']} skill")
    for position, skill in sorted(players[player["name"]].items(), key=lambda item: (-item[1], item[0])):
        print(f"- {position} <::> {skill}")
