import os
import requests

print("Ingresar Ruta:")
path = input()
print("Ingresar url:")
url = input()
print("Deseas enviar los datos? N/y")
rsp = input()
if rsp != "y":
    exit()

print(path, url, rsp)

f = open(path, "r").read()
sentenses = f.split(".")

headers = {"Content-Type": "application/json"}
for i in range(0, len(sentenses)):
    s = sentenses[i]
    requests.request(
        "POST", url, headers=headers, data={"autor": "autor " + str(i), "nota": s}
    )

