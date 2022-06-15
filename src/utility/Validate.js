  export  const validateEmail = (emails) => {
    console.log(emails)
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   console.log(re.test(String(emails).toLowerCase()));
    return re.test(String(emails).toLowerCase());
};