import rockImage from '../assets/games/rock.svg';
import paperImage from '../assets/games/paper.svg';
import scissorsImage from '../assets/games/scissors.svg';

export function getDefaultChoice() {
    return {
        id: 1,
        image: rockImage,
        locked: false,
    }
}

export function getChoice(id) {
    switch(id) {
        case 1:
            return {
                id: 1,
                image: rockImage
            }
        case 2:
            return {
                id: 2,
                image: paperImage
            }
        default: 
            return {
                id: 3,
                image: scissorsImage
            }
    }
}

export function getChoices() {
    return [
        {
            id: 1,
            image: rockImage
        },
        {
            id: 2,
            image: paperImage
        },
        {
            id: 3,
            image: scissorsImage
        }
    ]
}