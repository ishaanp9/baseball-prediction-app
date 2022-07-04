from pymongo import MongoClient
import json
from bson.json_util import dumps

# this class represents the methods used to write, read, update, and delete from the MongoDB Database
# NOTE: https://ishmeet1995.medium.com/how-to-create-restful-crud-api-with-python-flask-mongodb-and-docker-8f6ccb73c5bc 
# for more info for the rest of the methods
class MongoAPI:
    def __init__(self, data):
        myclient = MongoClient("mongodb://localhost:27017/")  
        print(data)

        database = data['database']
        collection = data['collection']
        mydb = myclient[database]
        self.collection = mydb[collection]
        self.data = data


    # inserting one document to mongodb
    def write(self, data):
        print(data)
        new_document = data['document']
        response = self.collection.insert_one(new_document)
        output = {'Status': 'Successfully Inserted',
                  'Document_ID': str(response.inserted_id)}
        return output

    #inserting many documnets in to mongodb database
    def writeMany(self, data):
        new_document = data['document']
        print(type(new_document))
        response = self.collection.insert_many(new_document)
        # output = {'Status': 'Successfully Inserted',
        #           'Document_ID': str(response.inserted_id)}
        # return output   
        # 

    #read all from certain collection
    def read(self):
        documents = self.collection.find()
        output = [{item: data[item] for item in data if item != '_id'} for data in documents]
        return output 

    #read all from certain collection
    def readQuery(self, myQuery):
        document = self.collection.find(myQuery)
        # print(myQuery)
        return dumps(document)