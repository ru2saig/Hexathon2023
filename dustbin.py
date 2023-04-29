import random
import time

# TODO: For the API version, one can use multiprocessing in the driver code
# TODO: Use environmental variables for the server, ip, else go with localhost if the SERVER_IP env variable is not found

class Dustbin:
    def __init__(self):
        self.capacity = 0
        self.threshold = 80
        self.update_interval = random.randint(3, 5) # seconds
        self.timer_tic = time.perf_counter()

        print(f"{self} is initialized."
        # self.fill_rate

    def get_capacity(self):
        return self.capacity

    def fill(self):
        """Throws a die to figure out whether or not to fill the dustbin."""
        # send a signal each time the capacity changes
        self.capacity += random.randint(10, 30)

    def trigger(self):
        """This is called when the dustbin's capacity is reached."""
        # send signal here
        print(f"{self} is full!")
        self.capacity = 0 # emptying it for the sim

    def check(self):
        """Checks if the dustbin's capacity is reached."""
        if self.capacity >= self.threshold:
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
