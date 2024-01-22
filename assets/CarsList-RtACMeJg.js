import{j as e,b as r,r as l,c}from"./index-ag_IkBOg.js";const u=s=>s.cars.isLoading,v=s=>s.cars.rentalCars,m=s=>s.favorites.favorites,g=()=>e.jsx("p",{children:"SearchBar"}),p=r.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* z-index: 10; */
  background-color: rgba(17, 17, 17, 0.4);
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 500ms cubic-bezier(0.4, 0, 0.2, 1);
`,x=r.div`
  background-color: white;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* position: relative; */
  width: 400px;
  border-radius: 8px;
  border: 2px solid blue;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;r.button`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: 0;
`;const a=({car:s,onClose:n})=>{l.useEffect(()=>(window.addEventListener("keydown",d),()=>{window.removeEventListener("keydown",d)}));const d=i=>{i.code==="Escape"&&n()},o=i=>{i.currentTarget===i.target&&n()};return e.jsx(p,{onClick:o,children:e.jsxs(x,{children:[e.jsx("img",{src:s.img,alt:s.make}),e.jsx("div",{children:e.jsxs("p",{children:[s.make," ",e.jsx("span",{children:s.model}),", ",s.year]})}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("p",{children:s.address.split(",")[1]}),e.jsx("div",{}),e.jsx("p",{children:s.address.split(",").pop()}),e.jsx("div",{}),e.jsxs("p",{children:["Id: ",s.id]}),e.jsx("div",{}),e.jsxs("p",{children:["Year: ",s.year]}),e.jsx("div",{}),e.jsxs("p",{children:["Type: ",s.type]})]}),e.jsxs("div",{children:[e.jsxs("p",{children:["Fuel Consumption: ",s.fuelConsumption]}),e.jsx("div",{}),e.jsxs("p",{children:["Engine Size: ",s.engineSize]})]}),e.jsx("p",{children:s.description}),e.jsx("p",{children:"Accessories and functionalities:"}),e.jsx("div",{children:s.accessories.map((i,t)=>e.jsx("p",{children:i},t))}),e.jsx("div",{children:s.functionalities.map((i,t)=>e.jsx("p",{children:i},t))}),e.jsx("p",{children:"Rental Conditions:"}),e.jsxs("div",{children:[s.rentalConditions.split(`
`).map((i,t)=>e.jsx("div",{children:e.jsx("p",{children:i})},t)),e.jsx("div",{children:e.jsxs("p",{children:["Mileage: ",s.mileage]})}),e.jsx("div",{children:e.jsxs("p",{children:["Price: ",s.rentalPrice]})})]})]}),e.jsx("button",{type:"button",children:"Rental car"})]})})},j=({car:s})=>{const[n,d]=l.useState(!1);return e.jsxs("div",{children:[e.jsx("img",{src:s.img,alt:s.make}),e.jsxs("div",{children:[e.jsxs("p",{children:[s.make," ",e.jsx("span",{children:s.model}),", ",s.year]}),e.jsx("p",{children:s.rentalPrice})]}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("p",{children:s.address.split(",")[1]}),e.jsx("div",{}),e.jsx("p",{children:s.address.split(",").pop()}),e.jsx("div",{}),e.jsx("p",{children:s.rentalCompany})]}),e.jsxs("div",{children:[e.jsx("p",{children:s.type}),e.jsx("div",{}),e.jsx("p",{children:s.model}),e.jsx("div",{}),e.jsx("p",{children:s.mileage}),e.jsx("div",{}),e.jsx("p",{children:s.accessories[0]})]})]}),e.jsx("button",{type:"button",onClick:()=>d(!0),children:"Learn more"}),n&&c.createPortal(e.jsx(a,{car:s,onClose:()=>d(!1)}),document.body)]})},b=({rentalCars:s})=>(console.log(s),e.jsx("ul",{children:s.map(n=>e.jsx("li",{children:e.jsx(j,{car:n})},n.id))}));export{b as C,g as S,v as a,m as b,u as s};
