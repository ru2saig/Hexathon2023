import random
import time
import requests

# TODO: For the API version, one can use multiprocessing in the driver code
# TODO: Use environmental variables for the server, ip, else go with localhost if the SERVER_IP env variable is not found
# these are used for deciding how long to wait before adding trash to the dustbins.
# the time will be a random time in the interval [TIME_MIN, TIME_MAX]
TIME_MIN = 3 # seconds
TIME_MAX = 10 # seconds

class Dustbin:
    def __init__(self, id):
        self.capacity = 0
        self.threshold = 80
        self.update_interval = random.randint(3, 10) # seconds
        self.timer_tic = time.perf_counter()
        self.id = id
        self.full = False

        print(f"{self.id} is initialized.")
        # self.fill_rate TODO: use data analysis for this

    def get_capacity(self):
        return self.capacity

    def fill(self):
        """Throws a die to figure out whether or not to fill the dustbin."""
        # send a signal each time the capacity changes
        self.capacity += random.randint(10, 20)
        response = requests.post('http://localhost:3000/api/post-cap',
               headers={'Content-Type': 'application/json', },
               json={'code': f'{self.id}', 'stat': f'{self.capacity}', })

    def trigger(self):
        """This is called when the dustbin's capacity is reached."""
        # send signal here
        response = requests.post('http://localhost:3000/api/post-cap',
                headers={'Content-Type': 'application/json', },
                json={'code': f'{self.id}', 'stat': '100', })
        print(f"{self.id} is full!")

    def is_full(self):
        return self.full
        
    def check(self):
        """Checks if the dustbin's capacity is reached."""
        if self.capacity >= self.threshold:
            self.full = True
            self.trigger()

    def update(self):
        """Updates the dustbin's status."""
        timer_toc = time.perf_counter()

        if int(timer_toc - self.timer_tic) >= self.update_interval:
            self.fill()
            self.timer_tic = time.perf_counter()
        self.check()


if __name__ == "__main__":
    dustbins = [Dustbin() for dustbin in range(20)]

    while True:
        for dustbin in dustbins:
            dustbin.update()
