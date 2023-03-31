import superBase from './data/superBase';

export const getSuperArr = () => {
    const superArr = [];
    for (let i = 0; i<superBase.length; i++) {
        const superName = superBase[i].superHeroeCharacter;
        superArr.push(superName);
    }
    return superArr;
}

export const getSuperHeroeInfo = (index) => {
    const heroeInfo = superBase[index];
    return heroeInfo;
} 