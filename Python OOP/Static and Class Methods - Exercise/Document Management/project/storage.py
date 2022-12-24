from project.category import Category

from project.topic import Topic

from project.document import Document


class Storage:

    def __init__(self):
        self.categories = list()
        self.topics = list()
        self.documents = list()

    def __repr__(self):
        result = "\n".join(map(str, self.documents))
        return result

    @staticmethod
    def find_by_id(entity_id, entities):
        for entity in entities:
            if entity.id == entity_id:
                return entity

    def add_category(self, category: Category):
        if category not in self.categories:
            self.categories.append(category)

    def add_topic(self, topic: Topic):
        if topic not in self.topics:
            self.topics.append(topic)

    def add_document(self, document: Document):
        if document not in self.documents:
            self.documents.append(document)

    def edit_category(self, category_id: int, new_name: str):
        category = self.find_by_id(category_id, self.categories)
        if category:
            category.name = new_name

    def edit_topic(self, topic_id: int, new_topic: str, new_storage_folder: str):
        topic = self.find_by_id(topic_id, self.topics)
        if topic:
            topic.topic, topic.storage_folder = new_topic, new_storage_folder

    def edit_document(self, document_id: int, new_file_name: str):
        document = self.find_by_id(document_id, self.documents)
        if document:
            document.file_name = new_file_name

    def delete_category(self, category_id):
        category = self.find_by_id(category_id, self.categories)
        if category:
            self.categories.remove(category)

    def delete_topic(self, topic_id):
        topic = self.find_by_id(topic_id, self.topics)
        if topic:
            self.topics.remove(topic)

    def delete_document(self, document_id):
        document = self.find_by_id(document_id, self.documents)
        if document:
            self.documents.remove(document)

    def get_document(self, document_id):
        document = self.find_by_id(document_id, self.documents)
        if document:
            return document
