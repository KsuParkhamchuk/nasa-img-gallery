export namespace CurrentImgModel{
    export interface State{
        selectedDate: string,
        latestSelectedDate: string | null,
        currentDate: string
    }

    export interface Props{
        getSelectedDateImg: any,
        dateImg: any
    }
}