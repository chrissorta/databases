var Friends = {

  toggleStatus: (userName) => {
    console.log('in toggle, ', userName);
    Friends[userName] = !Friends[userName];
    console.log(Friends[userName]);
  }


};