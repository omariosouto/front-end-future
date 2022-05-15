import { useState, Show, For } from "@builder.io/mitosis";
export default function Component(props) {
    const state = useState({ count: 0 })
    return (<div>
        {/* DISPLAY SOME JSX CONDITIONALLY */}
        <Show when={state.count > 10}>
            <h1>You Win!!!</h1>
        </Show>

        {/* DISPLAY THE COUNT */}
        <h1>{state.count}</h1>

        {/* BUTTON TO ADD TO THE COUNT */}
        <button onClick={(event) => { state.count += 1 }}>Click to Add One</button>
    </div>)
}