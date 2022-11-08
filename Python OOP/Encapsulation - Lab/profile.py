class Profile:

    def __init__(self, username: str, password: str):
        self.username = username
        self.password = password

    def __str__(self):
        return f'You have a profile with username: "{self.username}" and password: {"*" * len(self.password)}'

    @property
    def username(self, ):
        return self.__username

    @username.setter
    def username(self, value):
        if not (5 <= len(value) <= 15):
            raise ValueError('The username must be between 5 and 15 characters.')
        self.__username = value

    @property
    def password(self):
        return self.__password

    @password.setter
    def password(self, value: str):
        is_upper = [True for x in value if x.isupper()]
        one_digit = [True for x in value if x.isdigit()]
        if len(value) < 8 or not is_upper or not one_digit:
            raise ValueError('The password must be 8 or more characters with at least 1 digit and 1 uppercase letter.')
        self.__password = value


# profile_with_invalid_password = Profile('My_username', 'My-password')
# profile_with_invalid_username = Profile('Too_long_username', 'Any')
# correct_profile = Profile("Username", "Passw0rd")
# print(correct_profile)

p = Profile("Username", "Passw0rd")
print(p)
