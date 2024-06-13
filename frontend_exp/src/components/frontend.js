import './frontend.css'
export default function Frontend (){

    const data=[
        {
            "id": "sign-up-form",
            "name": "Sign-Up Form",
            "category": "HTML",
   
        },
        {
            "id": "item-cart",
            "name": "Item Cart",
            "category": "HTML",
         
        },
        {
            "id": "spaghetti-recipe",
            "name": "Spaghetti Recipe",
            "category": "HTML",
          
        },
        {
            "id": "blog-post",
            "name": "Blog Post",
            "category": "HTML",
            
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
            
        },
        {
            "id": "algoexpert-products",
            "name": "AlgoExpert Products",
            "category": "CSS",
            
        },
        {
            "id": "testing-framework",
            "name": "Testing Framework",
            "category": "JavaScript",
           
        },
        {
            "id": "array-methods",
            "name": "Array Methods",
            "category": "JavaScript",
            
        },
        {
            "id": "event-target",
            "name": "Event Target",
            "category": "JavaScript",
          
        },
        {
            "id": "debounce",
            "name": "Debounce",
            "category": "JavaScript",
            
        },
        {
            "id": "this-binding",
            "name": "This Binding",
            "category": "JavaScript",
            
        },
        {
            "id": "promisify",
            "name": "Promisify",
            "category": "JavaScript",
            
        },
        {
            "id": "throttle",
            "name": "Throttle",
            "category": "JavaScript",
            
        },
        {
            "id": "curry",
            "name": "Curry",
            "category": "JavaScript",
           
        },
        {
            "id": "infinite-scroll",
            "name": "Infinite Scroll",
            "category": "DOM Manipulation",
        
        },
        {
            "id": "stopwatch",
            "name": "Stopwatch",
            "category": "DOM Manipulation",
          
        },
        {
            "id": "tic-tac-toe",
            "name": "Tic Tac Toe",
            "category": "DOM Manipulation",
            
        },
        {
            "id": "todo-list",
            "name": "Todo List",
            "category": "DOM Manipulation",
            
        },
        {
            "id": "typeahead",
            "name": "Typeahead",
            "category": "DOM Manipulation",
           
        },
        {
            "id": "tier-list",
            "name": "Tier List",
            "category": "DOM Manipulation",
         
        },
        {
            "id": "toasts",
            "name": "Toasts",
            "category": "DOM Manipulation",
              
        },
        {
            "id": "sudoku",
            "name": "Sudoku",
            "category": "DOM Manipulation",
             
        },
        {
            "id": "questions-list",
            "name": "Questions List",
            "category": "DOM Manipulation",
            
        }
    ]

    const statusData = [
        { questionId: "blog-post", status: "CORRECT" },
        { questionId: "throttle", status: "INCORRECT" },
        { questionId: "stopwatch", status: "PARTIALLY_CORRECT" },
        { questionId: "pig-emoji", status: "CORRECT" },
        { questionId: "todo-list", status: "CORRECT" },
        { questionId: "testing-framework", status: "CORRECT" },
        { questionId: "array-methods", status: "INCORRECT" },
        { questionId: "spaghetti-recipe", status: "PARTIALLY_CORRECT" },
        { questionId: "algoexpert-products", status: "PARTIALLY_CORRECT" },
        { questionId: "curry", status: "CORRECT" },
        { questionId: "toasts", status: "INCORRECT" },
        { questionId: "tic-tac-toe", status: "CORRECT" },
        { questionId: "event-target", status: "CORRECT" },
        { questionId: "debounce", status: "PARTIALLY_CORRECT" },
        { questionId: "item-cart", status: "CORRECT" },
        { questionId: "typeahead", status: "CORRECT" },
        { questionId: "tier-list", status: "PARTIALLY_CORRECT" },
        { questionId: "sudoku", status: "CORRECT" },
        { questionId: "rainbow-circles", status: "INCORRECT" },
        { questionId: "infinite-scroll", status: "CORRECT" },
        { questionId: "navbar", status: "PARTIALLY_CORRECT" }
      ];
  
    const mergedData = data.map(item => ({
        ...item,
        status: statusData.find(statusItem => statusItem.questionId === item.id)?.status || 'UNKNOWN'
      })); 


      const getClassName = (status) => {
        switch (status) {
          case 'CORRECT':
            return 'correct';
          case 'INCORRECT':
            return 'incorrect';
          case 'PARTIALLY_CORRECT':
            return 'partiallycorrect';
          default:
            return '';
        }
      };

    return(

        <>
        <div style={{backgroundColor:" #F6F9FC"}}>

       
        <div style={{display:"flex" ,justifyContent:"space-around"}}>
 <div className="Html" style={{width:"45%"}}>
 <h1>HTML - 2/4</h1>
 <div >   
 {
    mergedData
    .filter(item => item.category === 'HTML')
   
    .map(item=>(
        < >
        <div style={{border:"1px solid grey", borderRadius:'5px',paddingLeft:"10px",marginBottom:'5px',backgroundColor:'#FFFFFF',boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
            <div  className=" content"style={{display:"flex",alignItems:"center",position:"relative"}}>
            <div key={item.id}
                    className={getClassName(item.status)} style={{height:"30px",width:'30px',borderRadius:"50px",marginRight:'10px'}}>

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
    mergedData
    .filter(item => item.category === 'CSS')
    .map(item=>(
        <>
 <div key={item.id} style={{border:"1px solid grey", borderRadius:'5px',paddingLeft:"10px",marginBottom:'5px',backgroundColor:'#FFFFFF',boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
<div style={{display:"flex",alignItems:"center",position:"relative"}}>
         <div key={item.id} className={getClassName(item.status)}style={{height:"30px",width:'30px',borderRadius:"50px",marginRight:'10px'}}></div>
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
                    mergedData.filter(item=>item.category==='JavaScript')
                    .map(item=>(

                       <>
                        <div style={{border:"1px solid grey", borderRadius:'5px',paddingLeft:"10px",marginBottom:'8px',backgroundColor:'#FFFFFF',boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                        <div style={{display:"flex",alignItems:"center",position:"relative"}}>
                        <div  key={item.id} className={getClassName(item.status)}style={{height:"30px",width:'30px',borderRadius:"50px",marginRight:'10px'}}></div>
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
                    mergedData.filter(item=>item.category==='DOM Manipulation')
                    .map(item=>(
                        <>
                        <div style={{border:"1px solid grey", borderRadius:'5px',paddingLeft:"10px",marginBottom:'8px',backgroundColor:'#FFFFFF',boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                        <div style={{display:"flex",alignItems:"center",position:"relative"}}>
                        <div key={item.id} className={getClassName(item.status)} style={{height:"30px",width:'30px',borderRadius:"50px",marginRight:'10px'}}></div>
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