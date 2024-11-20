export interface Pokemon{
    id: string,
    name: string,
    type: string[],
    base: BaseStats

}

interface BaseStats {
    HP: number;
    Attack: number;
    Defense: number;
    SpAttack: number;
    SpDefense: number;
    Speed: number;
  }

