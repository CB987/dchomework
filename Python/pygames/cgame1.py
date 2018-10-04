import pygame

def main():
    width = 512
    height = 480
    blue_color = (97, 159, 182)

    pygame.init()
    screen = pygame.display.set_mode((width, height))
    pygame.display.set_caption('My Game')
    clock = pygame.time.Clock()
    monster_at_x = 0
    monster_at_y = 0
    x = 0
    y = 0
    # Game initialization

    background_img = pygame.image.load('pygame-project/images/background.png')
    hero_image = pygame.image.load('pygame-project/images/hero.png')
    monster_image = pygame.image.load('pygame-project/images/monster.png')
    
    stop_game = False
    while not stop_game:
        for event in pygame.event.get():

            # Event handling

            if event.type == pygame.QUIT:
                stop_game = True


        # Game logic

        # Draw background
        screen.fill((0,0,0))
        screen.blit(background_img, (0,0))

        # Game display
        screen.blit(hero_image, (256,240))
        screen.blit(monster_image, (0,0))
        position = monster_image.get_rect()
        screen.blit(monster_image, position)          #draw the player
        pygame.display.update()                #and show it all
        for x in range(15): 
            screen.blit(background_img, position, position) #erase
            position = position.move(5, 0)     #move player
            screen.blit(monster_image, position)
            pygame.display.update()            #and show it all
            pygame.time.delay(5)             #stop the program for (100 = 1/10th of a) second 
        pygame.display.update()
        clock.tick(60)

    pygame.quit()

if __name__ == '__main__':
    main()