import requests
import json
#from requests.structures import CaseInsensitiveDict


def nurse():
    url = "http://20.115.10.86:8005/nurse"
    payload = {"disease": "diabetes", "mobility": "1", "fulltime": "1", "cost": "1000"}
    resp = requests.post(url, data=payload)
    data = json.loads(resp.text)

    name1 = "Nurse 1:"+str(data["name"]['0'])
    name2 = "Nurse 2:"+str(data["name"]['1'])
    name3 = "Nurse 3:"+str(data["name"]['2'])

    mob1 = "Mobile:" + str(data["mobile"]['0'])
    mob2 = "Mobile:" + str(data["mobile"]['1'])
    mob3 = "Mobile:" + str(data["mobile"]['2'])

    spec1 = "Speciality:" + str(data["specialization"]['0'])
    spec2 = "Speciality:" + str(data["specialization"]['1'])
    spec3 = "Speciality:" + str(data["specialization"]['2'])

    nurse1 = name1 + "\n" + mob1 + "\n" + spec1
    nurse2 = name2 + "\n" + mob2 + "\n" + spec2
    nurse3 = name3 + "\n" + mob3 + "\n" + spec3

    final = nurse1 + "\n\n" + nurse2 + "\n\n" + nurse3
    return final

nurse()
