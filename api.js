var h=document.createElement('h1')
h.innerText='MOBILE'
h.setAttribute("class","text-center")
document.body.appendChild(h)


var div1=document.createElement('div')
div1.classList.add('container')
document.body.appendChild(div1)


var row=document.createElement('div')
row.classList.add('row')
div1.appendChild(row)



var row=document.createElement('div')
row.classList.add('row')
div1.appendChild(row)

// function submit(){
//   <div class = " card-text a">  Name: ${data.data[i].brand_name}</div>
  
// }
fetch(' https://api-mobilespecs.azharimm.site/v2/brands')
.then((d)=>d.json())
.then((data)=>{
  console.log(data)

    // console.log(data.[i].Deaths);


       for(let i=0;i<99;i++){
         row.innerHTML+=  `<div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 my-2 p-3  b">
             <div class="card text-center" m-3 >${data.data[i].device_count}
                 <div class="card-header text-center">
                <div class=" card-body ">
                    
                     <div class = " card-text a">  Name: ${data.data[i].brand_name}</div>
                     <div class =" card-text ">brand id: ${data.data[i].brand_slug}</div>
                    <div class = " card-text a">   Details: ${data.data[i].brand_id}</div>
                     <div class="card text-center" >${data.data[i].brand_name}</div>
                     
                    
<button class="btn btn-primary" onclick="submit()">Click Here</button>
                 
                    
                   </div>
                   </div>
                   </div>`
       }
      })
          







    //                   function check() {
    //                    document.getElementById("Name").innerHTML = "brand_name";
    //                   }
                         
                   
    // `
                        
                    