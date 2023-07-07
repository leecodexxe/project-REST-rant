const React = require("react");
const Def = require("../layout/default");

function new_form() {
    return (
        <Def>
            <h1>Add a New Place</h1>
            <form action="/places" method="POST">

                <label htmlFor="name">Place Name</label>
                <input type="text" id="name" name="name" required />

                 <label htmlFor="pic">Place Picture</label>
                <input type="text" id="pic" />

                <label htmlFor="city">City</label>
                <input id="city"/>

                <label htmlFor="state">State</label>
                <input type="text" id="state" />

                <label htmlFor="cuisines">Cuisines</label>
                <input type="text" id="cuisines" required />

                <label htmlFor="founded">Founded Year</label>
                <input type="text"  id="founded" />
                <br />
                <input  type="submit" value="Add Place" />
            </form>
                <a href="/places">
                    <button>Go back to the index</button>
                </a>
        </Def>
    );
}

module.exports = new_form;
