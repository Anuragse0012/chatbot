# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

from typing import Any, Text, Dict, List
from rasa_sdk.events import EventType
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
import requests
import json


#
#
class ActionAppointment(Action):

    def name(self) -> Text:
        return "action_appointment"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[EventType]:  # List[Dict[Text, Any]]:

        name = tracker.get_slot("name")
        age = tracker.get_slot("age")
        medical_issue = tracker.get_slot("medical_issue")
        current_situation = tracker.get_slot("current_situation")
        timing = tracker.get_slot("timing")
        amount = tracker.get_slot("amount")

        if current_situation:
            mobility = "1"
        else:
            mobility = "0"
        if timing:
            fulltime = "1"
        else:
            fulltime = "0"
        if amount: amount = amount.replace("k", "000")

        url = "http://20.115.10.86:8005/nurse"
        payload = {"disease": medical_issue, "mobility": mobility, "fulltime": fulltime, "cost": amount}
        resp = requests.post(url, data=payload)
        data = json.loads(resp.text)

        name1 = "Nurse 1:" + str(data["name"]['0'])
        name2 = "Nurse 2:" + str(data["name"]['1'])
        name3 = "Nurse 3:" + str(data["name"]['2'])
        name4 = "Nurse 4:" + str(data["name"]['3'])
        name5 = "Nurse 5:" + str(data["name"]['4'])

        mob1 = ", Mobile:" + str(data["mobile"]['0'])
        mob2 = ", Mobile:" + str(data["mobile"]['1'])
        mob3 = ", Mobile:" + str(data["mobile"]['2'])
        mob4 = ", Mobile:" + str(data["mobile"]['3'])
        mob5 = ", Mobile:" + str(data["mobile"]['4'])

        """spec1 = "Speciality:" + str(data["specialization"]['0'])
         spec2 = "Speciality:" + str(data["specialization"]['1'])
         spec3 = "Speciality:" + str(data["specialization"]['2'])"""

        nurse1 = name1 + mob1 + "\n"  # + spec1
        nurse2 = name2 + mob2 + "\n"  # + spec2
        nurse3 = name3 + mob3 + "\n"  # + spec3
        nurse4 = name4 + mob4 + "\n"  # + spec2
        nurse5 = name5 + mob5 + "\n"  # + spec3

        final = nurse1 + nurse2 + nurse3 + nurse4 + nurse5

        dispatcher.utter_message(text=str(final))

        return []


class ActionConfirmation(Action):

    def name(self) -> Text:
        return "action_confirmation"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[EventType]:  # List[Dict[Text, Any]]:

        global message
        response = str(tracker.get_slot("confirmation"))
        print(response)
        if response == "confirm":
            message = "Thank you for choosing our system."
        elif response == "reject":
            message = "Do you want to provide the details?"

        dispatcher.utter_message(text=message)

        return []
