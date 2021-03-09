var object = {
    id: 1,
    title: "this is a note",
    content: "This is the amazing content of the note!",
    mahmud: "Great Developer"
  }
  var myJSON = JSON.stringify(object);
  var myObj = JSON.parse(myJSON);
  /*console.log(myObj.id);
  console.log(myObj.title);
  console.log(myObj.content);
  console.log(myObj.mahmud);*/
  for (const key in myObj) { 
      console.log(myObj[key])
  }