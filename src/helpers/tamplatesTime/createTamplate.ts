import { createTamplateForTwo } from './createTamplateForTwo';

export const createTamplate = (arrUsers: any) => {
    if (arrUsers.length === 2) {
        return createTamplateForTwo();
    };
};