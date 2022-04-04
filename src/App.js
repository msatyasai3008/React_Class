import React, { useState } from "react";

function App() {
  const [cateogries] = useState(["Gaming", "Tech", "Sports"]);
  const [category, setCat] = useState();
  const [post, setPost] = useState("");
  const [GamingPost, setGamingPost] = useState([]);
  const [TechPost, setTechPost] = useState([]);
  const [SportsPost, setSportsPost] = useState([]);
  const [editValue, setEditvalue] = useState();
  const [editCat, setEditCat] = useState();
  const [UpdatedValue, setUpdatedValue] = useState();
  const [showform, setShowForm] = useState(false);

  const handleSelect = (e) => {
    setCat(e.target.value);
  };

  const handlePost = (e) => {
    setPost(e.target.value);
  };

  const handleSubmit = (e) => {
    if (category === "Gaming") {
      setGamingPost([...GamingPost, post]);
    } else if (category === "Tech") {
      setTechPost([...TechPost, post]);
    } else if (category === "Sports") {
      setSportsPost([...SportsPost, post]);
    }
    e.preventDefault();
    console.log(category, GamingPost);
  };

  const handleDelete = (cat, post) => {
    if (cat === "Gaming") {
      setGamingPost(TechPost.filter((deletedpost) => deletedpost !== post));
    } else if (cat === "Tech") {
      setTechPost(TechPost.filter((deletedpost) => deletedpost !== post));
    } else if (cat === "Sports") {
      setSportsPost(SportsPost.filter((deletedpost) => deletedpost !== post));
    }
  };

  // handle edit

  const handleEdit = (cat, post) => {
    setEditvalue(post);
    setEditCat(cat);
    setUpdatedValue(post);
    setShowForm(true);
  };

  // button handler of edit form
  const editSubmitData = () => {
    console.log(editValue);

    if (editValue) {
      if (editCat === "Gaming") {
        const UpdatedPost = GamingPost.map((gp) => {
          if (gp === UpdatedValue) {
            return editValue;
          } else {
            return gp;
          }
        });
        setGamingPost(UpdatedPost);
      }
      setShowForm(false);
    }
  };

  const inputEditChange = (e) => {
    setEditvalue(e.target.value);
  };

  //Editform
  const editform = () => {
    return (
      <>
        <h3> Edit Form</h3>
        <label>Post</label>{" "}
        <input
          defaultValue={editValue}
          onChange={(e) => inputEditChange(e)}
          type="text"
        />
        <br /> <br />
        <button
          onClick={() => {
            editSubmitData();
          }}
        >
          Submit
        </button>
      </>
    );
  };

  const getPost = (cat) => {
    if (cat === "Gaming") {
      return (
        <>
          {GamingPost.map((gp) => (
            <li>
              {gp}{" "}
              <span>
                {" "}
                <button onClick={() => handleDelete(cat, gp)}>Delete</button>
                <button onClick={() => handleEdit(cat, gp)}>Edit</button>
              </span>
            </li>
          ))}
        </>
      );
    } else if (cat === "Tech") {
      return (
        <>
          {TechPost.map((tp) => (
            <li>
              {tp}
              <span>
                {" "}
                <button onClick={() => handleDelete(cat, tp)}>Delete</button>
                <button onClick={() => handleEdit(cat, tp)}>Edit</button>
              </span>
            </li>
          ))}
        </>
      );
    } else if (cat === "Sports") {
      return (
        <>
          {SportsPost.map((sp) => (
            <li>
              {sp}
              <span>
                {" "}
                <button onClick={() => handleDelete(cat, sp)}>Delete</button>
                <button onClick={() => handleEdit(cat, sp)}>Edit</button>
              </span>
            </li>
          ))}
        </>
      );
    }
  };

  // const Newform = () => {
  //   return (
  //     <form onSubmit={(e) => handleSubmit(e)}>

  //       <br />
  //       <label>Post</label>
  //       <textarea value={post} onChange={(e) => handlePost(e)}></textarea>
  //       <br />
  //       <br />
  //       <button>Edit Submit</button>
  //     </form>
  //   );
  // };
  // <Blog cat={categories}/>
  const form = () => {
    return (
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Categories</label>
        <select onChange={(e) => handleSelect(e)}>
          <option>select category</option>
          {cateogries.map((cat) => (
            <option>{cat}</option>
          ))}
        </select>
        <br />
        <br />
        <label>Post</label>
        <textarea onChange={(e) => handlePost(e)}></textarea>
        <br />
        <br />
        <button>Submit</button>
      </form>
    );
  };
  const Blog = cateogries.map((cat) => (
    <div>
      <h2>{cat}</h2>
      <p>{getPost(cat)}</p>
    </div>
  ));

  return (
    <>
      <h1>My Blog Application</h1>
      {form()}
      {showform && editform()}
      {Blog}
    </>
  );
}

export default App;
