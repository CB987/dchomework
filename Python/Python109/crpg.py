
class Character:
    def __init__(self, name, health, power):
        self.name = name
        self.health = health
        self.power = power

    def attack(self, other):
        other.health -= self.power
        print("The %s has done %d damage to the %s." % (self.name, self.power, other.name))
        if self.health <= 0:
            print("The %s is dead." % self.name)
        elif other.health <= 0:
            print("The %s is dead." % other.name)

    def alive(self):
        return self.health > 0

    def print_status(self):
        print("The %s has %d health and %d power." % (self.name, self.health, self.power))
        print()

class Hero(Character):
    pass        

class Goblin(Character):
    pass

class Zombie(Character):
    pass

    def attack(self, other):
        other.health -= self.power
        print("The %s has done %d damage to the %s." % (self.name, self.power, other.name))
        if self.health <= 0 or other.health <= 0:
            print("The zombie is already dead, so it can't die... only become more undead! HAHAHAHAHAHA")
            print("The %s is dead." % other.name)

hero = Hero("hero", 10, 5)
goblin = Goblin("goblin", 6, 2)
zombie = Zombie("zombie", 0, 100)

while goblin.alive() and hero.alive():
       
    print()
    hero.print_status
    goblin.print_status
    print()
    print("What do you want to do?")
    print("1. fight goblin")
    print("2. do nothing")
    print("3. flee")
    print("> ",)
    user_input = input()
    print()

    if user_input == "1":
        hero.attack(goblin)
            
    elif user_input == "2":
        pass

    elif user_input == "3":
        print("Oops... you ran into a zombie.")
        zombie.print_status()
        zombie.attack(hero)
        break
    else:
        print("Invalid input %r" % user_input)

    if goblin.alive() and user_input != "3":
        goblin.attack(hero)
 


        