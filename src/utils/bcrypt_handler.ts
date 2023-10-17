import { hash, compare } from "bcryptjs";

const encrypt = async (password: string) => {
    const result = await hash(password, 10);
    return result;
}

const verify = async (password: string, hash: string) => {
    const result = await compare(password, hash);
    return result;
}

export {
    encrypt,
    verify,
}