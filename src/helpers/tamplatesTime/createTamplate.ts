import { createTamplateForTwo } from './createTamplateForTwo';
import { createTamplateMoreTwo } from './createTamplateMoreTwo';

export const createTamplate = (arrUsers: any) => {
    if (arrUsers.length === 2) return createTamplateForTwo();
    if (arrUsers.length > 2) return createTamplateMoreTwo(arrUsers);
};

