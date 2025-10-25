        //3 STEPS TO PRINT HELLO WORLD FROM REACT


        //STEP 1:CREATE H1 TAG(heading) using createElement
        //STEP 2: CREATE ROOT using createROOT
        //STEP 3: render heading inside root.
        //create H1 tag in react : 
        // takes 3 arguments(html tag, an object for attributes or props, "content inside tag")
        // const heading=React.createElement(
        //     "h1",
        //     {id:"heading", xyz:"abc"},
        //     "Hello World from React!");

        //     console.log(heading); //this is an Object

        //it doesn’t yet render to the screen — it just exists in memory.

        //React need to have a root where it will do all the DOM manipulation
        // ReactDOM library is used here[IMPORTANT]
        // const root= ReactDOM.createRoot(document.getElementById("root"));
        //This is how React connects its virtual DOM to the real webpage.

        //Render(Displays) the heading inside root 
        // root.render(heading);


                 //CREATE NESTED ELEMENTS 
                 //1.
//  <div id="parent">
//     <div id="child">
//         <h1>I'm h1 tag</h1>
//     </div>

//  </div>

//ReactElement(Object) => HTML(Browser Understands)

// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement("div",
//         {id: "child"},

//         React.createElement(
//             "h1",
//             {},
//             "I'm h1 tag")
//     )
// );
// console.log(parent);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

    //2. h1 and h2 as siblings

//  <div id="parent">
//     <div id="child">
//         <h1>I'm h1 tag</h1>
//         <h2>I'm h2 tag</h2>
//     </div>

//  </div>

// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement("div",
//         {id: "child"},
//         //to pass siblings like h1 and h2 tags 
//         //CONVERT THIS TO AN ARRAY.
//         [React.createElement("h1",{},  "I'm h1 tag"),
//         React.createElement("h2",{}, "I'm h2 tag"),
//         ]

//     )
// );
// console.log(parent);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


//3.
//  <div id="parent">
//     <div id="child">
//         <h1>I'm h1 tag</h1>
//         <h2>I'm h2 tag</h2>
//     </div>
//     <div id="child2">
//         <h1>I'm h1 tag</h1>
//         <h2>I'm h2 tag</h2>
//     </div>

//  </div>

const parent = React.createElement(
    "div",
    {id:"parent"},[
    React.createElement("div",
        {id: "child"},
        //to pass siblings like h1 and h2 tags 
        //CONVERT THIS TO AN ARRAY.
        [React.createElement("h1",{},  "I'm h1 tag"),
        React.createElement("h2",{}, "I'm h2 tag"),
        ]),
    React.createElement("div",
        {id: "child2"},
        //to pass siblings like h1 and h2 tags 
        //CONVERT THIS TO AN ARRAY.
        [React.createElement("h1",{},  "I'm h1 tag"),
        React.createElement("h2",{}, "I'm h2 tag"),
        ]),
 ]);
console.log(parent);  //object
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


//JSX 