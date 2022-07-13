from flask import *
from flask_cors import CORS
import requests
import statsapi
from bson.json_util import dumps
import json

from classes.specificPlayerInformation import specificPlayerInformation
from populateDatabaseScript import *
from envStrings import *
from databaseCrud import MongoAPI


# Initializing flask app
app = Flask(__name__)
CORS(app)


# NOTE: This is to get specific player information


# NOTE: This might be better at getting player info --> this gets id
# response_API = requests.get(
#             'https://statsapi.mlb.com/api/v1/sports/1/players')
# data = response_API.json()
# for player in data["people"]:
#         print(player["id"])


# print(statsapi.player_stat_data(data["people"][0]["id"], group="[hitting,pitching,fielding]", type="season"))

# team = statsapi.lookup_team('chn')
# print(team) #assume only 1 record returned for demo purposes

# print("hello")

# daily database calls
# populatePlayerInformationCollection()
# populateMLBTeamPlayerCollection()
# populatePlayerStatsCollection()

# assume only 1 record returned for demo purposes

# Route for fetching all mlb players


@app.route('/get-player-information/<playerName>', methods=['GET', 'POST'])
def getSpecificPlayerInformation(playerName):
    if(request.method == 'GET'):
        print(playerName)
        # # we can define the database and the collection here
        data = {
            "database": databaseName,
            "collection": playerInformation,
        }

        # # we can also pass in data
        myQuery = {"fullName" : playerName}
        

        # # # this is how u do it
        mongo_obj = MongoAPI(data)
        playerInformation_obj = specificPlayerInformation(json.loads(mongo_obj.readQuery(myQuery)))
        
        return playerInformation_obj.getSpecificPlayerInformation()

# Gets player stats for each player
@app.route('/get-player-stats/<playerName>', methods=['GET', 'POST'])
def getPlayerStats(playerName):
    if (request.method == 'GET'):

        playerData = {
            "database": databaseName,
            "collection": playerStats,
        }

        id = statsapi.lookup_player(playerName)[0]["id"]
        myQuery = {"id" : id}

        mongo_obj = MongoAPI(playerData)
        playerStatsObj = json.loads(mongo_obj.readQuery(myQuery))
        requestedPlayerStat = None
        position = playerStatsObj[0]["position"]
        print(position)
        for statObj in playerStatsObj[0]["stats"]:
            if (position == 'P' and statObj["group"] == 'pitching'):
                requestedPlayerStat = statObj["stats"]
            elif(position != 'P' and statObj["group"] == 'hitting'):
                requestedPlayerStat = statObj["stats"]

    return jsonify(requestedPlayerStat)
       


       
# Gets All General Player Information from a specific team
@app.route('/get-players-on-team/<teamName>', methods=['GET', 'POST'])
def getPlayersForTeam(teamName):
    if(request.method == 'GET'):
        
        # # we can define the database and the collection here
        teamData = {
            "database": databaseName,
            "collection": mlbTeams,
        }

        # # we can also pass in data
        myQuery = {"name" : teamName}
        

        # getId from MLB DataBase 
        # get all players 

        
        mongo_obj = MongoAPI(teamData)
        teamId = json.loads(mongo_obj.readQuery(myQuery))[0]['id']
        # print(teamId)

        getTeamPlayerData = {
            "database": databaseName,
            "collection": playerInformation,
        }

        getAllPlayersQuery = {
            "currentTeam.id" : teamId
        }

        mongo_obj1 = MongoAPI(getTeamPlayerData)
        queryFilter = {'id','fullName', 'primaryPosition.abbreviation', 'birthDate', 'currentAge', 'birthCountry', 'height', 'weight', 'batSide.description', 'pitchHand.description', 'currentTeam.id'}
        json_itr = json.loads(mongo_obj1.readQueryWithFilter(getAllPlayersQuery, queryFilter))
        # print(json_itr)
        
        playerObjArr = []
        for index in range(len(json_itr)):
        #     # playerObj = specificPlayerInformation(json.loads(mongo_obj1.readQuery(getAllPlayersQuery))[index]) 
        #     # print(json_itr[index])

            playerObj = specificPlayerInformation([json_itr[index]])
            playerObjArr.append(playerObj.getSpecificPlayerInformationFromTeamName())
        
        # return "Hello"
        return jsonify(playerObjArr)
        



# defines the port 8080 as to not intefere with port 5000 which mongo runs on
if __name__ == '__main__':
    app.run(debug=True, port=8080, host='0.0.0.0')
