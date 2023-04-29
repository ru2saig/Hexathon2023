from dustbin import Dustbin
from concurrent.futures import ThreadPoolExecutor
import requests

# This is just to simulate the dustbins being filled. This will stop running
# after all the dustbins have been filled

ids = ["644d7c9ce2864a020e67",
       "644d7b7f6b3a865f8c47",
       "644d7b33bfdc02a8141c",
       "644d7a0615f06bed5df3",
       "644d79d2034192e1d030",
       "644d79649ad628ac8c3e",
       "644d78deaffe6c614039",
       "644d78acb2d558aff742",
       "644d76f34d12231c5f4d",
       "644d76c1918866f78a06",
       "644d76b29f206f9e0763",
       "644d7643bc9a9d9c42a1",
       "644d75f9687226c2d3cf",
       "644d75a708c89dbae9c1",
       "644d474474ae8d628bfc",
       "644d1b88a8da1e7f0da4",
       "644d19c0aa4582cd1247"] # hard-coded


def reset_dustbins(id):
    response = requests.post('http://localhost:3000/api/post-cap',
               headers={'Content-Type': 'application/json', },
               json={'code': f'{id}', 'stat': '0', })
    return response.content.decode('ascii')


def run_dustbin_forever(dustbin: Dustbin):
    while not dustbin.is_full():
        dustbin.update()


# set all the dustbins to empty, each run
with ThreadPoolExecutor() as executor:
    results = executor.map(reset_dustbins, ids)
    for result in results:
        print(result)
print("Reset all dustbins.", end="\n\n")

# start using the dustbins
print("Running dustbins...")
dustbins = [Dustbin(id) for id in ids]
with ThreadPoolExecutor() as executor:
    executor.map(run_dustbin_forever, dustbins)
