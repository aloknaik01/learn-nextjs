const serversearchparams = async (props) => { // or you can {searchParams} do like this
  //const dat = await searchParams;
  //data.phone
  const data = await props.searchParams;

  console.log(data.phone);
  return (
    <>
      <div>serversearchparams : {data.phone}</div>
    </>
  );
};

export default serversearchparams;
