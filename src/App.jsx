import carImg from "./images/car.jpg"
export default function App() {
  return <div className="h-screen w-screen flex items-center justify-center gap-5 flex-col">
    <h1 className="text-red-500 font-bold text-xl">
car
    </h1>
    <img className="h-[300px]" src={carImg} alt="" />
  </div>
}