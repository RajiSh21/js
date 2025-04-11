const person = {
    name: 'Alice',
    greet: function() {
      setTimeout(() => {
        console.log('Hello, ' + this.name);
      }, 1000);
    }
  };
  
  person.greet();  //function call greet 