import requests
from databaseCrud import MongoAPI
from envStrings import *
import statsapi

def populatePlayerInformationCollection():
    response_API = requests.get(
            'https://statsapi.mlb.com/api/v1/sports/1/players')
    data = response_API.json()
    # we can define the database and the collection here 
    databaseObj= {
        "database": databaseName,
        "collection": playerInformation,
    }

    writeDataObj = {
        "document" : data["people"],
    }

    mongo_obj = MongoAPI(databaseObj)
    mongo_obj.writeMany(writeDataObj)

    
def populateMLBTeamPlayerCollection(): 

    response_API = requests.get(
            'https://statsapi.mlb.com/api/v1/teams?sportId=1')
    data = response_API.json()

    databaseObj= {
        "database": databaseName,
        "collection": mlbTeams,
    }

    writeDataObj = {
        "document" : data["teams"],
    }


    mongo_obj = MongoAPI(databaseObj)
    mongo_obj.writeMany(writeDataObj)

def populatePlayerStatsCollection(): 

    response_API = requests.get(
                'https://statsapi.mlb.com/api/v1/sports/1/players')
    allPlayersJson = response_API.json()

    data = []
    for player in allPlayersJson["people"]: 
        data.append(statsapi.player_stat_data(player["id"], group="[hitting,pitching,fielding]", type="season"))
        

    databaseObj= {
        "database": databaseName,
        "collection": playerStats,
    }

    writeDataObj = {
        "document" : data,
    }
    
    mongo_obj = MongoAPI(databaseObj)
    mongo_obj.writeMany(writeDataObj)
