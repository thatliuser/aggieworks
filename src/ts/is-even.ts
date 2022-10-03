interface IsEven {
    iseven: boolean,
    ad: string
}

export default async function isEven(num: number): Promise<IsEven> {
    let resp = await fetch(`https://api.isevenapi.xyz/api/iseven/${num}`);
    return await resp.json() as IsEven;
}