"use client";
import { use } from "react";

const page = (props) => {
  const paramsData = use(props.params);
  console.log(paramsData);
  return (
    <>
      <div className="profession-background">
        <div className="profession-container">
          <h1>{paramsData.userName}</h1>
          <h2>{decodeURIComponent(paramsData.professionName)}</h2>
          {/*decodeURIComponent this helps to remove unocode from url  */}
          <p>
            I am passionate about building beautiful and performant web
            applications. I love working with React, modern CSS, and creating
            delightful user experiences.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
