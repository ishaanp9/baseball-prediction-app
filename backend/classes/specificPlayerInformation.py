import requests


class specificPlayerInformation:
    def __init__(self, data):

        self.id = data[0]["id"]
        self.primaryNumber = data[0]['primaryNumber']
        self.primaryPosition = data[0]['primaryPosition']['abbreviation']
        self.birthDate = data[0]['birthDate']
        self.currentAge = data[0]['currentAge']
        self.birthCountry = data[0]['birthCountry']
        self.height = data[0]['height']
        self.weight = data[0]['weight'] 
        response_API = requests.get(
            'https://statsapi.mlb.com/api/v1/teams/', {'teamId' : data[0]['currentTeam']['id']})
        self.currentTeam = response_API.json()['teams'][0]['name'];
        self.batside = data[0]['batSide']['description']
        self.pitchHand = data[0]['pitchHand']['description']

    # Getter Method to construct map with the fields above
    def getSpecificPlayerInformation(self):
        obj = {"id": self.id, "primaryNumber": self.primaryNumber, "primaryPosition": self.primaryPosition,
               "birthDate": self.birthDate, "currentAge": self.currentAge, "birthCountry": self.birthCountry, "height": self.height, "weight": self.weight, "currentTeam": self.currentTeam, "batSide": self.batside, "pitchHand": self.pitchHand}
        return obj
