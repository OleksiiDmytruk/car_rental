import{j as e,u as n,r as p,c as h}from"./index-ed2TDQrn.js";const L=t=>t.cars.isLoading,B=t=>t.cars.rentalCars,I=t=>t.favorites.favorites,M=()=>e.jsx("p",{children:"SearchBar"}),f=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* z-index: 10; */
  background-color: rgba(18, 20, 23, 0.5);
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 500ms cubic-bezier(0.4, 0, 0.2, 1);
`,g=n.div`
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* position: relative; */
  width: 541px;
  height: 752px;
  padding: 40px;
  border-radius: 24px;
  background: #fff;
`;n.button`
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
`;const m=n.img`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  background: #f3f3f2;
  width: 461px;
  height: 248px;
  border-radius: 14px;
  margin-bottom: 14px;
`,j=n.p`
  color: #121417;
  line-height: 1.5;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 4px;
`,u=n.span`
  color: #3470ff;
`,b=n.p`
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  margin-top: 14px;
`,c=n.p`
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  margin-top: 24px;
  line-height: 1.42;
`,w=n.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  margin-bottom: 14px;
`,y=n.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`,a=n.p`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`,v=n.span`
  color: #3470ff;
`,r=n.div`
  display: flex;
  gap: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 4px;
`,i=n.p`
  position: relative;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.25);
    margin: 0 6px;
  }
`,k=n.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: var(--White, #fff);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  border: none;
  margin-top: 28px;

  &:hover,
  :focus {
    background: #0b44cd;
  }
`,C=({car:t,onClose:o})=>{p.useEffect(()=>(window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}));const l=s=>{s.code==="Escape"&&o()},x=s=>{s.currentTarget===s.target&&o()};return e.jsx(f,{onClick:x,children:e.jsxs(g,{children:[e.jsx(m,{src:t.img,alt:t.make}),e.jsxs(j,{children:[t.make," ",e.jsx(u,{children:t.model}),", ",t.year]}),e.jsxs("div",{children:[e.jsxs(r,{children:[e.jsx(i,{children:t.address.split(",")[1]}),e.jsx(i,{children:t.address.split(",").pop()}),e.jsxs(i,{children:["Id: ",t.id]}),e.jsxs(i,{children:["Year: ",t.year]}),e.jsxs(i,{children:["Type: ",t.type]})]}),e.jsxs(r,{children:[e.jsxs(i,{children:["Fuel Consumption: ",t.fuelConsumption]}),e.jsxs(i,{children:["Engine Size: ",t.engineSize]})]}),e.jsx(b,{children:t.description}),e.jsx(c,{children:"Accessories and functionalities:"}),e.jsx(r,{children:t.accessories.map((s,d)=>e.jsx(i,{children:s},d))}),e.jsx(r,{children:t.functionalities.map((s,d)=>e.jsx(i,{children:s},d))}),e.jsx(c,{children:"Rental Conditions:"}),e.jsxs("div",{children:[t.rentalConditions.split(`
`).map((s,d)=>e.jsx("div",{children:e.jsx("p",{children:s})},d)),e.jsx("div",{children:e.jsxs("p",{children:["Mileage: ",t.mileage]})}),e.jsx("div",{children:e.jsxs("p",{children:["Price: ",t.rentalPrice]})})]})]}),e.jsx("button",{type:"button",children:"Rental car"})]})})},z=({car:t})=>{const[o,l]=p.useState(!1);return e.jsxs("div",{children:[e.jsx(w,{src:t.img||t.photoLink,alt:t.make}),e.jsxs(y,{children:[e.jsxs(a,{children:[t.make," ",e.jsxs(v,{children:[t.model,","]})," ",t.year]}),e.jsx(a,{children:t.rentalPrice})]}),e.jsxs(r,{children:[e.jsx(i,{children:t.address.split(",")[1]}),e.jsx(i,{children:t.address.split(",").pop()}),e.jsx(i,{children:t.rentalCompany})]}),e.jsxs(r,{children:[e.jsx(i,{children:t.type}),e.jsx(i,{children:t.model}),e.jsx(i,{children:t.mileage}),e.jsx(i,{children:t.accessories[0]})]}),e.jsx(k,{type:"button",onClick:()=>l(!0),children:"Learn more"}),o&&h.createPortal(e.jsx(C,{car:t,onClose:()=>l(!1)}),document.body)]})},T=n.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 50px;
  column-gap: 29px;
  margin-bottom: 100px;
`,E=n.li`
  width: 275px;
  flex-direction: column;
  align-items: flex-start;
`,P=n.button`
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
`,A=({rentalCars:t})=>e.jsx(T,{children:t.map(o=>e.jsx(E,{children:e.jsx(z,{car:o})},o.id))});export{A as C,M as S,P as T,B as a,I as b,L as s};
