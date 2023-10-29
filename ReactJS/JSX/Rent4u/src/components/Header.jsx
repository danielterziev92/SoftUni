import {useState} from "react";

export default function Header(props) {
    const [state, setState] = useState(props.isChecked);

    const ShowLogo = () => (
        <div>
            <span>Logo</span>
            <button onClick={() => setState(false)}>Hide Logo</button>
        </div>
    )


    return (
        <header>
            {state
                ? <ShowLogo/>
                : <button onClick={() => setState(true)}>Click here to see the logo</button>
            }
        </header>
    )
}
