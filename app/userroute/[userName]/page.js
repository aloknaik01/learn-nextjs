import "../../globals.css";

const Userpage = async () => {
  console.log(prop);
  // const paramsData = await props.params;// you can do like this or you can directly destucture props
  // console.log(paramsData)
  return (
    <>
      <div className="background">
        <div className="App">
          {/* <h1>My Name is {paramsData.userName}</h1> */}
          {/* <h1>My Name is {props.userName}</h1> */}
          <p>Welcome to my personal React page!</p>
        </div>
      </div>
    </>
  );
};

export default Userpage;
