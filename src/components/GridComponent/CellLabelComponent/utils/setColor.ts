import {CellGridEnums} from "../../../../enums/CellGridEnums";

export const setColor = (color: string) : string => {
    if (color === CellGridEnums.GREEN) {
        return '#00FF00'
    }

    if (color === CellGridEnums.ORANGE) {
        return  '#F5A623'
    }

    if (color === CellGridEnums.RED) {
        return  '#FF0000'
    }

    return '#000'
}
