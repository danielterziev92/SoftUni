class DecorationRepository:

    def __init__(self):
        self.decorations = list()

    def add(self, decoration):
        self.decorations.append(decoration)

    def remove(self, decoration):
        if decoration not in self.decorations:
            return False
        self.decorations.remove(decoration)
        return True

    def find_by_type(self, decoration_type: str):
        for decoration in self.decorations:
            if decoration_type == decoration.__class__.__name__:
                return decoration
        return 'None'
