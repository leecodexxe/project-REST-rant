const React = require("react");
const Def = require("../layout/default");

function show({data}) {
  console.log(data)
  return (
    <Def>
      <main>
        <div className="container">
          <img className="imgOfPlace" src={data.pic} alt="" />
          <div className="nameOfPlace">
          <a href={`/places/${data.id}/edit`} className="btn btn-warning">
            Edit
          </a>
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>
            <h1>{data.name}</h1>
            <h2>Rating</h2>
            <h3>Not Rated</h3>
            <h2>Descroption</h2>
            <h3>
              Located in {data.city},{data.state} and serving{" "}
              {data.cuisines}
            </h3>
          </div>
          <div className="comment">
            <h2>Comments</h2>
            <p>No comments Yet!</p>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
