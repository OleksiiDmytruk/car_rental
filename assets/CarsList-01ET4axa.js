import{j as s,b as r,r as t,c as l}from"./index-OFDkeFZO.js";const a=e=>e.cars.isLoading,h=e=>e.cars.rentalCars,m=e=>e.favorites.favorites,u=()=>s.jsx("p",{children:"SearchBar"}),o=r.div`
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
`;const c=({car:e,onClose:n})=>s.jsx(o,{children:s.jsxs(x,{children:[s.jsx("img",{src:e.img,alt:e.make}),s.jsx("div",{children:s.jsxs("p",{children:[e.make," ",s.jsx("span",{children:e.model}),", ",e.year]})}),s.jsxs("div",{children:[s.jsxs("div",{children:[s.jsx("p",{children:e.address}),s.jsx("div",{}),s.jsx("p",{children:e.address}),s.jsx("div",{}),s.jsxs("p",{children:["Id: ",e.id]}),s.jsx("div",{}),s.jsxs("p",{children:["Year: ",e.year]}),s.jsx("div",{}),s.jsxs("p",{children:["Type: ",e.type]})]}),s.jsxs("div",{children:[s.jsxs("p",{children:["Fuel Consumption: ",e.fuelConsumption]}),s.jsx("div",{}),s.jsxs("p",{children:["Engine Size: ",e.engineSize]})]}),s.jsx("p",{children:e.description}),s.jsx("p",{children:"Accessories and functionalities:"}),s.jsx("div",{children:e.accessories.map((i,d)=>s.jsx("p",{children:i},d))}),s.jsx("div",{children:e.functionalities.map((i,d)=>s.jsx("p",{children:i},d))}),s.jsx("p",{children:"Rental Conditions:"}),s.jsxs("div",{children:[e.rentalConditions.split(`
`).map((i,d)=>s.jsx("div",{children:s.jsx("p",{children:i})},d)),s.jsx("div",{children:s.jsxs("p",{children:["Mileage: ",e.mileage]})}),s.jsx("div",{children:s.jsxs("p",{children:["Price: ",e.rentalPrice]})})]})]}),s.jsx("button",{type:"button",children:"Rental car"})]})}),p=({car:e})=>{const[n,i]=t.useState(!1);return s.jsxs("div",{children:[s.jsx("img",{src:e.img,alt:e.make}),s.jsxs("div",{children:[s.jsxs("p",{children:[e.make," ",s.jsx("span",{children:e.model}),", ",e.year]}),s.jsx("p",{children:e.rentalPrice})]}),s.jsxs("div",{children:[s.jsxs("div",{children:[s.jsx("p",{children:e.address}),s.jsx("div",{}),s.jsx("p",{children:e.address}),s.jsx("div",{}),s.jsx("p",{children:e.rentalCompany})]}),s.jsxs("div",{children:[s.jsx("p",{children:e.type}),s.jsx("div",{}),s.jsx("p",{children:e.model}),s.jsx("div",{}),s.jsx("p",{children:e.mileage}),s.jsx("div",{}),s.jsx("p",{children:e.accessories[0]})]})]}),s.jsx("button",{type:"button",onClick:()=>i(!0),children:"Learn more"}),n&&l.createPortal(s.jsx(c,{car:e,onClose:()=>i(!1)}),document.body)]})},v=({rentalCars:e})=>(console.log(e),s.jsx("ul",{children:e.map(n=>s.jsx("li",{children:s.jsx(p,{car:n})},n.id))}));export{v as C,u as S,h as a,m as b,a as s};
