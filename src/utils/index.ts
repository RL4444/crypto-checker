
type unixTimestamp = string;


export const convertTsToUnixString = (offset: number):unixTimestamp => {
    const d: Date = new Date(); 
    return d.setDate(d.getDate() - offset).toString().slice(0, 10);
}