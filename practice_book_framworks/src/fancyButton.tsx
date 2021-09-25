import React from "react"

// functional components

type Props = {
    isDisabled?:boolean
    size:'Big' | 'Small'
    text:string
    onClick(event:React.MouseEvent<HTMLButtonElement>):void
}

export function FancyButton(props: Props) {
    const [toggled, setToggled] = React.useState<boolean>(false)
    return <button
        className={'size'+props.size}
        disabled={props.isDisabled || false}
        onClick={event=>{
            setToggled(!toggled)
            props.onClick(event)
        }}
    />
}

let button = <FancyButton 
        size="Big"
        text="Sign up Now"
        onClick={() => console.log('Clicked')}
        />



        