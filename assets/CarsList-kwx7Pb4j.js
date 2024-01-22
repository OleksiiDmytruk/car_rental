import{j as e,u as t,r as o,c}from"./index-QIojDec6.js";const v=s=>s.cars.isLoading,g=s=>s.cars.rentalCars,f=s=>s.favorites.favorites,b=()=>e.jsx("p",{children:"SearchBar"}),p=t.div`
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
`,x=t.div`
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
`;t.button`
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
`;const a=({car:s,onClose:n})=>{o.useEffect(()=>(window.addEventListener("keydown",d),()=>{window.removeEventListener("keydown",d)}));const d=i=>{i.code==="Escape"&&n()},l=i=>{i.currentTarget===i.target&&n()};return e.jsx(p,{onClick:l,children:e.jsxs(x,{children:[e.jsx("img",{src:s.img,alt:s.make}),e.jsx("div",{children:e.jsxs("p",{children:[s.make," ",e.jsx("span",{children:s.model}),", ",s.year]})}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("p",{children:s.address.split(",")[1]}),e.jsx("div",{}),e.jsx("p",{children:s.address.split(",").pop()}),e.jsx("div",{}),e.jsxs("p",{children:["Id: ",s.id]}),e.jsx("div",{}),e.jsxs("p",{children:["Year: ",s.year]}),e.jsx("div",{}),e.jsxs("p",{children:["Type: ",s.type]})]}),e.jsxs("div",{children:[e.jsxs("p",{children:["Fuel Consumption: ",s.fuelConsumption]}),e.jsx("div",{}),e.jsxs("p",{children:["Engine Size: ",s.engineSize]})]}),e.jsx("p",{children:s.description}),e.jsx("p",{children:"Accessories and functionalities:"}),e.jsx("div",{children:s.accessories.map((i,r)=>e.jsx("p",{children:i},r))}),e.jsx("div",{children:s.functionalities.map((i,r)=>e.jsx("p",{children:i},r))}),e.jsx("p",{children:"Rental Conditions:"}),e.jsxs("div",{children:[s.rentalConditions.split(`
`).map((i,r)=>e.jsx("div",{children:e.jsx("p",{children:i})},r)),e.jsx("div",{children:e.jsxs("p",{children:["Mileage: ",s.mileage]})}),e.jsx("div",{children:e.jsxs("p",{children:["Price: ",s.rentalPrice]})})]})]}),e.jsx("button",{type:"button",children:"Rental car"})]})})},h=({car:s})=>{const[n,d]=o.useState(!1);return e.jsxs("div",{children:[e.jsx("img",{src:s.img,alt:s.make}),e.jsxs("div",{children:[e.jsxs("p",{children:[s.make," ",e.jsx("span",{children:s.model}),", ",s.year]}),e.jsx("p",{children:s.rentalPrice})]}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("p",{children:s.address.split(",")[1]}),e.jsx("div",{}),e.jsx("p",{children:s.address.split(",").pop()}),e.jsx("div",{}),e.jsx("p",{children:s.rentalCompany})]}),e.jsxs("div",{children:[e.jsx("p",{children:s.type}),e.jsx("div",{}),e.jsx("p",{children:s.model}),e.jsx("div",{}),e.jsx("p",{children:s.mileage}),e.jsx("div",{}),e.jsx("p",{children:s.accessories[0]})]})]}),e.jsx("button",{type:"button",onClick:()=>d(!0),children:"Learn more"}),n&&c.createPortal(e.jsx(a,{car:s,onClose:()=>d(!1)}),document.body)]})},j=t.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 50px;
  column-gap: 29px;
  margin-bottom: 100px;
`,u=t.li`
  width: 275px;
  flex-direction: column;
  align-items: flex-start;
`,y=t.button`
  border: none;
  background: transparent;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  padding: 4px 12px;
  text-decoration-line: underline;
  margin-bottom: 150px;

  &:hover,
  :focus {
    color: #0b44cd;
  }
`,w=({rentalCars:s})=>e.jsx(j,{children:s.map(n=>e.jsx(u,{children:e.jsx(h,{car:n})},n.id))});export{w as C,b as S,y as T,g as a,f as b,v as s};
