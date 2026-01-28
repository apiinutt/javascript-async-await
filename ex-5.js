// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here

async function getuserData () {
  try {
    const getSuccess = await getJohnProfile ()
    console.log('ซักเซสสส')
  } catch (error) {
    const getfail = await getJohnProfile ()
    console.log(getfail)
  }
}
getuserData()