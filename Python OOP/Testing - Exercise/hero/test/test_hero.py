from unittest import TestCase, main

from project.hero import Hero


class HeroTest(TestCase):
    ENEMY_USERNAME = 'UserEnemy'
    USERNAME = 'UserTest'
    LEVEL = 1
    HEALTH = 3.14
    DAMAGE = 3.14

    def setUp(self) -> None:
        self.hero = Hero(self.USERNAME, self.LEVEL, self.HEALTH, self.DAMAGE)

    def test_class_initialization(self):
        self.assertEqual(self.USERNAME, self.hero.username)
        self.assertEqual(self.LEVEL, self.hero.level)
        self.assertEqual(self.HEALTH, self.hero.health)
        self.assertEqual(self.DAMAGE, self.hero.damage)

    def test_battle_method_with_same_username_for_enemy_and_hero_raises(self):
        enemy_username = Hero(self.USERNAME, self.LEVEL, self.HEALTH, self.DAMAGE)
        with self.assertRaises(Exception) as context:
            self.hero.battle(enemy_username)

        expected_result = "You cannot fight yourself"
        result = str(context.exception)
        self.assertEqual(expected_result, result)

    def test_battle_method_with_negative_value_for_health_raises(self):
        self.assertEqual(self.HEALTH, self.hero.health)
        self.hero.health = -1
        with self.assertRaises(Exception) as ex:
            self.hero.battle(Hero(self.ENEMY_USERNAME, self.LEVEL, self.HEALTH, self.DAMAGE))
        result = str(ex.exception)
        expected_result = "Your health is lower than or equal to 0. You need to rest"
        self.assertEqual(expected_result, result)

    def test_battle_method_with_zero_value_for_health_raises(self):
        self.assertEqual(self.HEALTH, self.hero.health)
        self.hero.health = 0
        with self.assertRaises(Exception) as ex:
            self.hero.battle(Hero(self.ENEMY_USERNAME, self.LEVEL, self.HEALTH, self.DAMAGE))
        result = str(ex.exception)
        expected_result = "Your health is lower than or equal to 0. You need to rest"
        self.assertEqual(expected_result, result)

    def test_battle_method_with_negative_value_for_enemy_health_raises(self):
        with self.assertRaises(Exception) as ex:
            self.hero.battle(Hero(self.ENEMY_USERNAME, self.LEVEL, -1, self.DAMAGE))
        result = str(ex.exception)
        expected_result = f"You cannot fight {self.ENEMY_USERNAME}. He needs to rest"
        self.assertEqual(expected_result, result)

    def test_battle_method_with_zero_value_for_enemy_health_raises(self):
        with self.assertRaises(Exception) as ex:
            self.hero.battle(Hero(self.ENEMY_USERNAME, self.LEVEL, 0, self.DAMAGE))
        result = str(ex.exception)
        expected_result = f"You cannot fight {self.ENEMY_USERNAME}. He needs to rest"
        self.assertEqual(expected_result, result)

    def test_battle_method_with_equal_health_for_enemy_and_player_returned_string(self):
        enemy_username = Hero(self.ENEMY_USERNAME, self.LEVEL, self.HEALTH, self.DAMAGE)
        result = self.hero.battle(enemy_username)
        expected_result = 'Draw'
        self.assertEqual(expected_result, result)

    def test_battle_method_when_enemy_health_is_equal_to_zero_returned_string(self):
        enemy_username = Hero(self.ENEMY_USERNAME, self.LEVEL, self.HEALTH, 0)
        result = self.hero.battle(enemy_username)
        expected_result = 'You win'
        self.assertEqual(expected_result, result)

    def test_battle_method_when_enemy_health_is_negative_value_returned_string(self):
        enemy_username = Hero(self.ENEMY_USERNAME, self.LEVEL, self.HEALTH, -1)
        result = self.hero.battle(enemy_username)
        expected_result = 'You win'
        self.assertEqual(expected_result, result)

    def test_status_when_player_win(self):
        enemy_damage = -1
        enemy_username = Hero(self.ENEMY_USERNAME, self.LEVEL, self.HEALTH, enemy_damage)
        self.hero.battle(enemy_username)
        self.assertEqual(self.LEVEL + 1, self.hero.level)
        self.assertEqual(self.HEALTH + 5 - enemy_damage, self.hero.health)
        self.assertEqual(self.DAMAGE + 5, self.hero.damage)

    def test_status_when_enemy_win(self):
        enemy_level = 10
        enemy_health = 10
        enemy = Hero(self.ENEMY_USERNAME, enemy_level, enemy_health, self.DAMAGE)
        self.hero.battle(enemy)
        self.assertEqual(enemy_level + 1, enemy.level)
        self.assertEqual(enemy_health + 5 - self.DAMAGE, enemy.health)
        self.assertEqual(self.DAMAGE + 5, enemy.damage)

    def test_battle_method_when_enemy_health_is_greater_when_player_returned_string(self):
        enemy_username = Hero(self.ENEMY_USERNAME, 10, 100, self.DAMAGE)
        result = self.hero.battle(enemy_username)
        expected_result = 'You lose'
        self.assertEqual(expected_result, result)

    def test_class_string_method(self):
        result = self.hero.__str__()
        expected_result = f"Hero {self.USERNAME}: {self.LEVEL} lvl\nHealth: {self.HEALTH}\nDamage: {self.DAMAGE}\n"
        self.assertEqual(expected_result, result)


if __name__ == '__main__':
    main()
