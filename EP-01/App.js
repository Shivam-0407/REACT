const parent = React.createElement("div", { id: "parent" }, 
[
React.createElement('div',{id:'child1'},
[React.createElement('h4',{},'Hi I am h4 sister' ),
React.createElement('h4',{},'Hi I am h4 brother' )
]),
React.createElement('div',{id:'child2'},
[React.createElement('h4',{},'Hi I am h4 sister child2' ),
React.createElement('h4',{},'Hi I am h4 brother child2' )
])]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
