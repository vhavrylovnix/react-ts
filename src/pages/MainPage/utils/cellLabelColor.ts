import {MainGridBillingClass} from "../../../enums/mainGridBillingClass.ts";
import {CellGridEnums} from "../../../enums/CellGridEnums.ts";

export const cellLabelColor =(value): CellGridEnums => {
    if (value === MainGridBillingClass.PROFESSIONAL) {
        return CellGridEnums.GREEN
    }

    if (value === MainGridBillingClass.INSTITUTIONAL) {
        return  CellGridEnums.RED
    }

    return CellGridEnums.DEFAULT
}
