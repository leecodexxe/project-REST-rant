const React = require('react')
const Def = require('../layout/default')

function edit_form(data) {
    return (
        <Def>
            <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Name</label>
                        <input 
                        type='text'
                        name = "name"
                        id="name" 
                        defaultValue={data.place.name}
                        />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Place Picture</label>
                        <input 
                        type='text'
                        name = "pic"
                        id="pic" 
                        defaultValue={data.place.pic}
                        />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="city">City</label>
                        <input 
                        type='text'
                        name = "city"
                        id="city" 
                        defaultValue={data.place.city}
                        />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="state">State</label>
                        <input 
                        type='text'
                        name = "state"
                        id="state" 
                        defaultValue={data.place.state}
                        />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input 
                        type='text'
                        name = "cuisines"
                        id="cuisines" 
                        defaultValue={data.place.cuisines}
                        />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Place" />
                </div>

            </form>

        </Def>
    )
}

module.exports = edit_form
