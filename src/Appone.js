import React, { Fragment } from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Categories: ["Gaming", "TechNews", "Sports"],
      category: "",
      blog: "",
      GamingBlogs: [],
      TechBlogs: ["second"],
      SportsBlogs: ["third"],
      editedBlog: "",
      editCat: "",
      updatedBlog: "",
      showForm: false
    };
  }
  //arr.filter(()=>{})
  //blog =3   /// 6!==3 (true)
  handleDelete = (blog, cat) => {
    if (cat === "Gaming") {
      this.setState({
        GamingBlogs: this.state.GamingBlogs.filter(
          (deletedblog) => deletedblog !== blog
        )
      });
    } else if (cat === "TechNews") {
      this.setState({
        TechBlogs: this.state.TechBlogs.filter(
          (deletedblog) => deletedblog !== blog
        )
      });
    } else if (cat === "Sports") {
      this.setState({
        SportsBlogs: this.state.SportsBlogs.filter(
          (deletedblog) => deletedblog !== blog
        )
      });
    }
  };

  ///

  handleEdit = (blog, cat) => {
    this.setState({ editedBlog: blog });
    this.setState({ editCat: cat });
    this.setState({ updatedBlog: blog });
    this.setState({ showForm: true });

    console.log(this.state.editedBlog);
  };
  /////

  handleEditInput = (e) => {
    this.setState({ editedBlog: e.target.value });
  };

  ///
  handleUpdateButton = (e) => {
    if (this.state.editedBlog) {
      if (this.state.editCat === "Gaming") {
        const newList = this.state.GamingBlogs.map((gb) => {
          if (gb === this.state.updatedBlog) {
            return this.state.editedBlog;
          } else {
            return gb;
          }
        });
        this.setState({ GamingBlogs: newList });
      }
    }
    this.setState({ showForm: false });
    e.preventDefault();
  };

  handlesumbit = (e) => {
    if (this.state.category === "Gaming") {
      this.setState({
        GamingBlogs: [...this.state.GamingBlogs, this.state.blog]
      });
    } else if (this.state.category === "TechNews") {
      this.setState({
        TechBlogs: [...this.state.TechBlogs, this.state.blog]
      });
    } else if (this.state.category === "Sports") {
      this.setState({
        SportsBlogs: [...this.state.SportsBlogs, this.state.blog]
      });
    }
    e.preventDefault();
  };

  form = () => {
    return (
      <form onSubmit={(e) => this.handlesumbit(e)}>
        <label>Categories</label>
        <select onChange={(e) => this.setState({ category: e.target.value })}>
          <option>select category</option>
          {this.state.Categories.map((cat) => (
            <option>{cat}</option>
          ))}
        </select>
        <br />
        <br />
        <label>Blog</label>
        <textarea
          onChange={(e) => this.setState({ blog: e.target.value })}
          type="text"
          placeholder="write your blog..."
        ></textarea>
        <br />
        <br />
        <button>Submit</button>
      </form>
    );
  };

  // getting my blog here
  getPost = (cat) => {
    if (cat === "Gaming") {
      return (
        <div>
          {this.state.GamingBlogs.map((gb) => (
            <li>
              {gb}
              <button onClick={() => this.handleDelete(gb, cat)}>Delete</button>
              <button onClick={() => this.handleEdit(gb, cat)}>Edit</button>
            </li>
          ))}
        </div>
      );
    } else if (cat === "TechNews") {
      return (
        <div>
          {this.state.TechBlogs.map((tb) => (
            <li>
              {tb}
              <button onClick={() => this.handleDelete(tb, cat)}>Delete</button>
            </li>
          ))}
        </div>
      );
    } else if (cat === "Sports") {
      return (
        <div>
          {this.state.SportsBlogs.map((sb) => (
            <li>
              {sb}
              <button onClick={() => this.handleDelete(sb, cat)}>Delete</button>
            </li>
          ))}
        </div>
      );
    }
  };
  editForm = () => {
    return (
      <form>
        <h2>Edited form</h2>
        <label>Blog</label>
        <textarea
          defaultValue={this.state.editedBlog}
          onChange={(e) => this.handleEditInput(e)}
        ></textarea>
        <button onClick={(e) => this.handleUpdateButton(e)}>Update</button>
      </form>
    );
  };

  render() {
    console.log(this.state.category, this.state.blog);
    return (
      <>
        {this.form()}
        {this.state.showForm && this.editForm()}
        {this.state.Categories.map((cat) => {
          return (
            <div>
              <h2>{cat}</h2>
              <p>{this.getPost(cat)}</p>
              {/* cat=Gaming */}
            </div>
          );
        })}
      </>
    );
  }
}
export default App;

//array =[1,2,3]
// array.map((num)=>num+1)  // num=2 2+1=3
//...spread operator
//arr1=[1,2,3] aar2=[5,6] ===> arr=[...arr1,blog] // 1,2,3,"first blogf"
// blog="first blog"
