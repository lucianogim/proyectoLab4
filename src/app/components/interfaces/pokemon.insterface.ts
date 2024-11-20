export interface Pokemon{
    id: string,
    name: string,
    type: [],
    base: {
        hp: number,
        attack: number,
        defence: number,
        spAttack: number,
        spDefence: number,
        speed: number
    }
}