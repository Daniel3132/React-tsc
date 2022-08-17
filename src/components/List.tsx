import React from "react"
import { Sub } from "../types";

interface Props {
    /* children: (name:string)=>React.ReactNode */
    /* 
    //sin importar la definicion desde types
    subs: Array<{
        nick: string
        subMonths: number
        description?: string
    }> */
    subs:Array<Sub>

}

export default function List({ subs }: Props) {

    // si se quiere hacer un rederList seria mejor crear un componente
    /* const renderList = (): JSX.Element[] => {
        return subs.map(sub => {
            return (
                <li key={sub.nick}>
                    <h4>{sub.nick}</h4>
                    <small>{sub.subMonths}</small>
                    <p>{sub.description?.substring(0, 100)}</p>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()}
        </ul>
    ) */
////////////////////////////////

    return (
        <ul>
            {
                subs.map(sub => {
                    return (
                        <li key={sub.nick}>
                            <h4>{sub.nick}</h4>
                            <small>{sub.subMonths}</small>
                            <p>{sub.description?.substring(0, 100)}</p>
                        </li>
                    )
                })
            }
        </ul>
    );
}
/* 
const List:React.FunctionComponent<Props> =({ subs }: Props) =>{
    return (
        <ul>
            {
                subs.map(sub => {
                    return (
                        <li key={sub.nick}>
                            <h4>{sub.nick}</h4>
                            <small>{sub.subMonths}</small>
                            <p>{sub.description?.substring(0, 100)}</p>
                        </li>
                    )
                })
            }
        </ul>
    );
}
export default List;
*/