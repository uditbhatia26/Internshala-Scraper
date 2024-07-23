# import pywhatkit
# count = 0
# while(True):
#     pywhatkit.sendwhatmsg("+91 98739 06760", 
# 					"Geeks For Geeks!", 
# 					17, 12)

#     count+=1
#     if(count >= 20):
#         break
import requests

url = "https://7103.api.greenapi.com/waInstance7103959126/sendMessage/b7659941720b48648e3600aaad6bbaa4fb30a6582b0a484ab4"

payload = {
"chatId": "919873906760@c.us", 
"message": "BRRRRRRRRRRRRRRRRRRRr", 
"linkPreview": True
}
headers = {
'Content-Type': 'application/json'
}
count = 0 
while(count < 15):
    response = requests.request("POST", url, headers=headers, json = payload)
    count+=1
print(response.text.encode('utf8'))