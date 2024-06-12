
export default function Frontend (){

    const data=[
        {
            "id": "sign-up-form",
            "name": "Sign-Up Form",
            "category": "HTML",
             "hex": "#808080"
        },
        {
            "id": "item-cart",
            "name": "Item Cart",
            "category": "HTML",
            "hex": "#FFFFFF"
        },
        {
            "id": "spaghetti-recipe",
            "name": "Spaghetti Recipe",
            "category": "HTML",
             "hex": "#FFA500"
        },
        {
            "id": "blog-post",
            "name": "Blog Post",
            "category": "HTML",
             "hex": "#FFA500"
        },
        {
            "id": "rainbow-circles",
            "name": "Rainbow Circles",
            "category": "CSS"
        },
        {
            "id": "navbar",
            "name": "Navbar",
            "category": "CSS",
             "hex": "#FFA500"
        },
        {
            "id": "pig-emoji",
            "name": "Pig Emoji",
            "category": "CSS"
        },
        {
            "id": "purchase-form",
            "name": "Purchase Form",
            "category": "CSS",
             "hex": "#FFA500"
        },
        {
            "id": "algoexpert-products",
            "name": "AlgoExpert Products",
            "category": "CSS",
             "hex": "#000000"
        },
        {
            "id": "testing-framework",
            "name": "Testing Framework",
            "category": "JavaScript",
             "hex": "#000000"
        },
        {
            "id": "array-methods",
            "name": "Array Methods",
            "category": "JavaScript",
             "hex": "#000000"
        },
        {
            "id": "event-target",
            "name": "Event Target",
            "category": "JavaScript",
             "hex": "#000000"
        },
        {
            "id": "debounce",
            "name": "Debounce",
            "category": "JavaScript",
             "hex": "#000000"
        },
        {
            "id": "this-binding",
            "name": "This Binding",
            "category": "JavaScript",
             "hex": "#000000"
        },
        {
            "id": "promisify",
            "name": "Promisify",
            "category": "JavaScript",
             "hex": "#000000"
        },
        {
            "id": "throttle",
            "name": "Throttle",
            "category": "JavaScript",
             "hex": "#000000"
        },
        {
            "id": "curry",
            "name": "Curry",
            "category": "JavaScript",
             "hex": "#FFA500"
        },
        {
            "id": "infinite-scroll",
            "name": "Infinite Scroll",
            "category": "DOM Manipulation",
            "hex": "#808080"
        },
        {
            "id": "stopwatch",
            "name": "Stopwatch",
            "category": "DOM Manipulation",
            "hex": "#FFFFFF"
        },
        {
            "id": "tic-tac-toe",
            "name": "Tic Tac Toe",
            "category": "DOM Manipulation",
              "hex": "#000000"
        },
        {
            "id": "todo-list",
            "name": "Todo List",
            "category": "DOM Manipulation",
             "hex": "#FF00FF"
        },
        {
            "id": "typeahead",
            "name": "Typeahead",
            "category": "DOM Manipulation",
             "hex": "#00FFFF"
        },
        {
            "id": "tier-list",
            "name": "Tier List",
            "category": "DOM Manipulation",
            "hex": "#FFFF00"
        },
        {
            "id": "toasts",
            "name": "Toasts",
            "category": "DOM Manipulation",
              "hex": "#0000FF"
        },
        {
            "id": "sudoku",
            "name": "Sudoku",
            "category": "DOM Manipulation",
              "hex": "#00FF00"
        },
        {
            "id": "questions-list",
            "name": "Questions List",
            "category": "DOM Manipulation",
             "hex": "#FF0000"
        }
    ]

  
      

    return(
        <>
        <div style={{backgroundColor:" #F6F9FC"}}>

       
        <div style={{display:"flex" ,justifyContent:"space-around"}}>
 <div className="Html" style={{width:"45%"}}>
 <h1>HTML - 2/4</h1>
 <div >   
 {
    data
    .filter(item => item.category === 'HTML')
   
    .map(item=>(
        < >
        <div style={{border:"1px solid grey", borderRadius:'5px',paddingLeft:"10px",marginBottom:'5px',backgroundColor:'#FFFFFF',boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
            <div  className=" content"style={{display:"flex",alignItems:"center",position:"relative"}}>
            <div style={{height:"30px",width:'30px',backgroundColor:item.hex,borderRadius:"50px",marginRight:'10px'}}>

</div>
<h4 style={{color:"#11967E"}}>{item.name}</h4>

<div  className="box" style={{backgroundColor:" #11967E",width:"33px",height:"63px",position: 'absolute', top: '0', right: '0'}}></div>


            </div>
        
        </div>
        
        </>
       

    ))
   }
 </div> 
 </div>
           
            <div className="Css" style={{width:"45%"}}>
            <h1>CSS-3/5</h1>
            {
    data
    .filter(item => item.category === 'CSS')
    .map(item=>(
        <>
 <div style={{border:"1px solid grey", borderRadius:'5px',paddingLeft:"10px",marginBottom:'5px',backgroundColor:'#FFFFFF',boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
<div style={{display:"flex",alignItems:"center",position:"relative"}}>
         <div style={{height:"30px",width:'30px',backgroundColor:item.hex,borderRadius:"50px",marginRight:'10px'}}></div>
         <h4  style={{color:"#11967E"}}>{item.name}</h4>
         <div  className="box" style={{backgroundColor:" #11967E",width:"33px",height:"63px",position: 'absolute', top: '0', right: '0'}}></div>
         </div>
         </div>
        </>
       

    ))
   }

            </div>
        </div>

        <div style={{display:"flex", justifyContent:"space-around"}}>
            <div className="javascript" style={{width:"45%"}}>
                <h1>JavaScript-3/8</h1>
                {
                    data.filter(item=>item.category==='JavaScript')
                    .map(item=>(

                       <>
                        <div style={{border:"1px solid grey", borderRadius:'5px',paddingLeft:"10px",marginBottom:'8px',backgroundColor:'#FFFFFF',boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                        <div style={{display:"flex",alignItems:"center",position:"relative"}}>
                        <div style={{height:"30px",width:'30px',backgroundColor:item.hex,borderRadius:"50px",marginRight:'10px'}}></div>
                         <h4  style={{color:"#11967E"}}>{item.name}</h4>
                         <div  className="box" style={{backgroundColor:" #11967E",width:"33px",height:"63px",position: 'absolute', top: '0', right: '0'}}></div>
                         </div>
                         </div>
                        </>
                    ))
                }
            </div>
            <div className="Dom" style={{width:"45%"}}>
            <h1>DOM Manipulation-5/9</h1>
                {
                    data.filter(item=>item.category==='DOM Manipulation')
                    .map(item=>(
                        <>
                        <div style={{border:"1px solid grey", borderRadius:'5px',paddingLeft:"10px",marginBottom:'8px',backgroundColor:'#FFFFFF',boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                        <div style={{display:"flex",alignItems:"center",position:"relative"}}>
                        <div style={{height:"30px",width:'30px',backgroundColor:item.hex,borderRadius:"50px",marginRight:'10px'}}></div>
                         <h4  style={{color:"#11967E"}}>{item.name}</h4>
                         <div  className="box" style={{backgroundColor:" #11967E",width:"33px",height:"63px",position: 'absolute', top: '0', right: '0'}}></div>
                         </div>
                         </div>
                        </>
                      
                    ))
                }
            </div>

        </div>
        </div>
        </>
    )
}